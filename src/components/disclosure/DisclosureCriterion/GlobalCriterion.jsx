import React, {useState} from "react";
import { DisclosureCriterionWrapper } from "./style";

const GlobalCriterion = () => {
  const [period, setPeriod] = useState("oneY");

  const date = {
    today: new Date(),
    oneM: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    sixM: new Date(new Date().setMonth(new Date().getMonth() - 6)),
    oneY: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    threeY: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
    fiveY: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    tenY: new Date(new Date().setFullYear(new Date().getFullYear() - 10))
  }
  function getToday(date){
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
}
  
  function handleFormSubmit(event) {
    event.preventDefault()
    console.log("submitted")
  }
  function handleRadioChange(event) {
    setPeriod(event.target.id)
  }
  function handleValueChange(event) {
    return ;
  }

  return (
    <DisclosureCriterionWrapper>
      <div className="disclosure__criterion">
        <div className="disclosure__criterion__header">
          <h4>기간 및 상세보기</h4>
        </div>
        <form className="disclosure__criterion__body" onSubmit={handleFormSubmit}>
          <div className="setPeriod" key={period}>
            <input type="date" defaultValue={getToday(date[period])} min={date.sixM} max={date.oneM} onChange={handleValueChange} />
            <input type="date" defaultValue={getToday(date.today)} min={date.oneM} max={date.oneM} />
            <div>                
              <input type="radio" id="oneM" name="period" onChange={handleRadioChange} checked={period === "oneM"} />
              <label htmlFor="oneM">1M</label>
            </div>
            <div>
              <input type="radio" id="sixM" name="period" onChange={handleRadioChange} checked={period === "sixM"} />
              <label htmlFor="sixM">6M</label>
            </div>
            <div>
              <input type="radio" id="oneY" name="period" onChange={handleRadioChange} checked={period === "oneY"} />
              <label htmlFor="oneY">1Y</label>
            </div>
            <div>
              <input type="radio" id="threeY" name="period" onChange={handleRadioChange} checked={period === "threeY"} />
              <label htmlFor="threeY">3Y</label>
            </div>
            <div>
              <input type="radio" id="fiveY" name="period" onChange={handleRadioChange} checked={period === "fiveY"} />
              <label htmlFor="fiveY">5Y</label>
            </div>
            <div>
              <input type="radio" id="tenY" name="period" onChange={handleRadioChange} checked={period === "tenY"} />
              <label htmlFor="tenY">10Y</label>
            </div>
          </div>
          <div className="setType">
            <div>
              <label htmlFor="typeA">
                <input type="checkbox" id="typeA" name="typeA" />
                All
              </label>
            </div>
            <div>
              <label htmlFor="typeB">
                <input type="checkbox" id="typeB" name="typeB" />
                LSE
              </label>
            </div>
            <div>
              <label htmlFor="typeC">
                <input type="checkbox" id="typeC" name="typeC" />
                SEC
              </label>
            </div>
            <div>
              <label htmlFor="typeD">
                <input type="checkbox" id="typeD" name="typeD" />
                GB
              </label>
            </div>
            <div>
              <label htmlFor="typeE">
                <input type="checkbox" id="typeE" name="typeE" />
                General
              </label>
            </div>
            <div>
              <label htmlFor="typeF">
                <input type="checkbox" id="typeF" name="typeF" />
                Capital
              </label>
            </div>
            <div>
              <label htmlFor="typeG">
                <input type="checkbox" id="typeG" name="typeG" />
                Company Info
              </label>
            </div>
            <div>
              <label htmlFor="typeH">
                <input type="checkbox" id="typeH" name="typeH" />
                Type - A
              </label>
            </div>
            <div>
              <label htmlFor="typeI">
                <input type="checkbox" id="typeI" name="typeI" />
                Type - B
              </label>
            </div>
            <div>
              <label htmlFor="typeJ">
                <input type="checkbox" id="typeJ" name="typeJ" />
                Type - C
              </label>
            </div>
          </div>
          <button>적용</button>
        </form>
      </div>
    </DisclosureCriterionWrapper>
  )
}

export default GlobalCriterion;