import React from "react";
import { TooltipContainer } from "./style";

const Tooltip = ({ hoveredValue, mousePosition, names }) => {
  const xPosition = mousePosition.x;
  const yPosition = mousePosition.y;

  if (!hoveredValue) {
    return <div id="tooltip-container" style={{ visibility: "hidden" }}></div>;
  } else if (hoveredValue.basDt) {
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
  } else {
    return (
      <TooltipContainer
        style={{
          left: `${xPosition - 90}px`,
          top: `${yPosition + 25}px`,
          width: "180px",
        }}>
        <div>
          <div id="tooltip">
            <span>
              <div>{hoveredValue.x.toFixed(10)}</div>
            </span>
            <span>
              <div>Regression</div>
              <div className="per">{hoveredValue.y.toFixed(10)}</div>
            </span>
          </div>
        </div>
      </TooltipContainer>
    );
  }
};

export default Tooltip;
