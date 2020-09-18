import React from "react";
import "./style.scss";

const GameListIcon = (props) => {
  const { imgSrc = "", styleStatus = 0, activeStatus = 0 } = props;
  const borderStyle = {
    borderRadius: "50%",
  };
  const active = {
    border: '2px solid #d54e4e',
    pointerEvents : 'none',
  };
  //
  return (
    <div className="gamelisticon" style={{
      ...styleStatus === 1 ? borderStyle : {},
      ...activeStatus === 1 ? active : {}
    }}>
      <div
        className="gamelisticon__wrap"
        style={styleStatus === 1 ? borderStyle : {}}
      >
        <img src={imgSrc} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

GameListIcon.propTypes = {};

export default GameListIcon;
