import InputRangeNumber from "components/InputRangeNumber";
import React from "react";
import "./style.scss";

const RangeFilter = (props) => {
  return (
    <div className="range-filter py-3">
      <div className="range-filter__title">
        <h5>Tướng</h5>
        <span className="range-filter__clear-filter">Xóa bộ lọc</span>
      </div>
      <div className="px-3">
        <InputRangeNumber
          labelColor="#e5724f"
          sliderColor="linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(90deg, #ff9155 0, #d54e4e);"
          min={0}
          max={500}
        />
      </div>
    </div>
  );
};

RangeFilter.propTypes = {};

export default RangeFilter;
