import React, { useState } from "react";
import InputRange from "react-input-range";
import styled from "styled-components";

const RangeSliderContainer = styled.div`
  .input-range__label--max .input-range__label-container,
  .input-range__label--min .input-range__label-container {
    display: none;
  }
  .input-range__label-container{
    top: -3.5rem;
    font-size: 0.9375rem;
    color: ${(props) => props.labelColor};
    font-weight: 700;
  }
  .input-range__label {
    font-family: "Noto Sans", sans-serif;
    padding: 2.5rem 0 !important;
  }
  .input-range__track {
    height: 7px !important;
  }
  .input-range__slider {
    background: #fff !important;
    border: 0 !important;
    width: 1.2rem !important;
    height: 1.2rem !important;
  }
  .input-range__track--active {
    background: ${(props) => props.color};
  }
  .input-range__track--background {
    background-color: #808080 !important;
  }
`;
export const InputRangeNumber = (props) => {
  const { sliderColor, min, max, labelColor} = props;

  const [curVal, setCurVal] = useState({
    value: { min: min, max: max },
  });

  return (
    <RangeSliderContainer color={sliderColor} labelColor={labelColor}>
      <InputRange
        maxValue={max}
        minValue={min}
        value={curVal.value}
        step={10}
        onChange={(value) => {
          setCurVal({ value });
        }}
      />
    </RangeSliderContainer>
  );
};

InputRangeNumber.propTypes = {};

export default InputRangeNumber;
