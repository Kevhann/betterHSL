import React from "react";
import { setMapClass } from "../reducers/mapClassReducer";
import { setFormClass } from "../reducers/formClassReducer";
import { setRoutes } from "../reducers/routeReducer";
import { connect } from "react-redux";

const MainMenu = ({ setMapClass, setFormClass, setRoutes }) => {
  const handleClick = () => {
    setFormClass("startForm");
    setMapClass("startMap");
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
  setRoutes,
};

export default connect(null, mapDispatchToProps)(MainMenu);
