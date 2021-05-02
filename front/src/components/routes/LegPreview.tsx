import * as React from 'react';
import { formatDistance, formatTime } from '../../functions/formatter';
import styled from 'styled-components';
import { colorMap, Colors, Leg } from '../../types/route';
import { ToolTip } from '../ui/ToolTip';
import { Walk } from '../ui/Icons';

type Props = { leg: Leg };

type PillProps = {
  color: Colors;
};
const Pill = styled.div`
  line-height: 1em;
  border-radius: 4px;
  background-color: ${(props: PillProps) => props.color};
  width: fit-content;
  padding: 4px;
`;

export const LegPreview = (props: Props) => {
  const { leg } = props;
  const startTime = formatTime(leg.startTime);
  const distance = formatDistance(leg.distance);

  const color = colorMap[leg.mode];

  return (
    <>
      <ToolTip
        toolTip={() => (
          <>
            Leaves: {startTime}
            <br />
            Distance: {distance}
          </>
        )}
      >
        <Pill color={color}>
          <Walk />
          Howdy
        </Pill>
      </ToolTip>
    </>
  );
};
