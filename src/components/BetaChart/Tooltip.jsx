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
        style={{ left: `${xPosition + 30}px`, top: `${yPosition - 40}px` }}>
        <div>
          <div id="tooltip">
            <h3>{hoveredValue.basDt}</h3>
            <span>
              <div>{names[0]}</div>
              <div className="per">{hoveredValue.xPrice}%</div>
            </span>
            <span>
              <div>{names[1]}</div>
              <div className="per">{hoveredValue.yPrice}%</div>
            </span>
          </div>
        </div>
      </TooltipContainer>
    );
  }
};

export default Tooltip;
