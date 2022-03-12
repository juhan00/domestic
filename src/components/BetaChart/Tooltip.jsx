import React from "react";
import { TooltipContainer } from "./style";

const Tooltip = ({ hoveredValue, mousePosition, names }) => {
  if (!hoveredValue) {
    return <div id="tooltip-container" style={{ visibility: "hidden" }}></div>;
  } else {
    const xPosition = mousePosition.x;
    const yPosition = mousePosition.y;
    return (
      <TooltipContainer
        style={{ left: `${xPosition + 25}px`, top: `${yPosition - 25}px` }}>
        <div>
          <div id="tooltip">
            {hoveredValue.basDt}
            <br />
            {names[0]}:{hoveredValue.xPrice}
            <br />
            {names[1]}:{hoveredValue.yPrice}
          </div>
        </div>
      </TooltipContainer>
    );
  }
};

export default Tooltip;
