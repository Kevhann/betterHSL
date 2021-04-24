import React from 'react';
import { setMapClass } from '../reducers/mapClassReducer';
import { setFormClass } from '../reducers/formClassReducer';
import { setRoutes } from '../reducers/routeReducer';
import { connect, ConnectedProps } from 'react-redux';

type Props = ConnectedProps<typeof connector>;

const MainMenu = ({ setMapClass, setFormClass, setRoutes }: Props) => {
  const handleClick = () => {
    setFormClass('startForm');
    setMapClass('startMap');
    setRoutes([]);
  };

  return (
    <div className="mainHeader">
      <span className="mainHeader logo" onClick={handleClick} />
    </div>
  );
};

const mapDispatchToProps = {
  setMapClass,
  setFormClass,
  setRoutes
};

const connector = connect(null, mapDispatchToProps);

export default connector(MainMenu);
