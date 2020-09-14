import React from "react";
import "./style.scss";

const GameListIcon = (props) => {
  const { imgSrc, title = "" } = props;
  return (
    <div className="gamelisticon">
      <div className="gamelisticon__wrap">
        <img src={imgSrc} alt="" className="img-fluid" />
        {title.length > 0 ? <p className="gamelisticon__title">{title}</p> : ""}
      </div>
    </div>
  );
};

GameListIcon.propTypes = {};

export default GameListIcon;
