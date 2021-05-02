import React, { useState } from 'react';
import { Search, Icon, SearchResultData, SearchResultProps } from 'semantic-ui-react';
import autocomplete from '../apis/autocomplete';
import { useDebouncedCallback } from 'use-debounce';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import { AutocompleteResult, LatLong, LayerName } from '../types/route';

export type AutocompleteValue = { name: string; coordinates?: LatLong };

type Props = {
  fieldName: string;
  inputValue: AutocompleteValue;
  setInputValue: (val: AutocompleteValue) => void;
};

export const AutocompleteSearchForm = ({ fieldName, inputValue, setInputValue }: Props) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AutocompleteResult[]>([]);

  const bounce = useDebouncedCallback(
    async value => {
      if (value.length < 1) return resetComponent();

      setLoading(true);

      const autocompleteResults = await autocomplete(value);

      setLoading(false);
      setResults(autocompleteResults);
    },
    200,

    {}
  );

  const resetComponent = () => {
    setLoading(false);
    setResults([]);
    setInputValue({ name: '' });
  };

  const handleResultSelect = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: SearchResultData
  ) => {
    console.log('data:', data);
    setInputValue({ name: data.result.title, coordinates: data.result.coordinates });
  };

  const resultRenderer = (props: SearchResultProps) => {
    /* Return an appropriate icon based on the layer of the autofill result */

    // TODO: fix types
    const layer: LayerName = props.layer;
    const title = props.title;
    let iconName: SemanticICONS;
    if (layer === 'venue') {
      iconName = 'building';
    } else if (layer === 'stop') {
      iconName = 'flag';
    } else if (layer === 'address') {
      iconName = 'point';
    } else {
      iconName = 'map signs';
    }
    return (
      <div>
        <Icon name={iconName} />
        {title}
      </div>
    );
  };
  return (
    <Search
      fluid
      loading={loading}
      onSearchChange={(e, data) => {
        setInputValue({ name: data.value! });
        bounce(data.value);
      }}
      onResultSelect={handleResultSelect}
      results={results}
      value={inputValue.name}
      placeholder={fieldName}
      resultRenderer={resultRenderer}
    />
  );
};
