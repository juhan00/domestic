import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { clickOutside } from "../../utils/clickOutside";
import MenuIconToggle from "@images/menuicon_toggle.svg";

const stockNations = ["국내주식", "해외주식"];

const Dropdown = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectedOption] = useState(null);

  const toggle = () => setIsOpen(!isOpen);
  const optionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  clickOutside(ref, isOpen, setIsOpen);

  return (
    <div className="dropdownWrapper" ref={ref}>
      <div onClick={toggle}>
        {selectOption || "국내주식"}{" "}
        <img className="btnToggle" src={MenuIconToggle} />
      </div>
      {isOpen ? (
        <ul className="optionList">
          {stockNations.map((nation) => (
            <li className="optionItem" onClick={optionClicked(nation)}>
              {nation}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
