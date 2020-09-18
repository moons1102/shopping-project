import React from 'react'
import "./style.scss";

function GameIcon(props) {
    const {imgIcon} = props;
    return (
        <div className="gameicon">
            <div className="gameicon__wrap">
                <img src={imgIcon} alt="" className="img-fluid"/>
            </div>
        </div>
    )
}

GameIcon.propTypes = {

}

export default GameIcon

