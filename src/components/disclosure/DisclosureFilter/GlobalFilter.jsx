import React, {useState} from "react";
import { DisclosureFilterWrapper, SetPeriod, SetType, GlobalType } from "./style";

const GlobalFilter = () => {
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
    console.log('begin-date : ' + form.date[0].value) // 시작일
    console.log('end-date : ' + form.date[1].value) // 마감일
    console.log('source : ' + form.source.value)
    console.log('category : ' + form.category.value)
    console.log('type : ' + form.type.value)
  }
  function handleRadioChange(event) {
    setPeriod(event.target.id)
  }
  function handleValueChange(event) {
    return ;
  }

  return (
    <DisclosureFilterWrapper>
      <div className="disclosure__filter">
        <form name="form" onSubmit={handleFormSubmit}>
          <SetPeriod key={period}>
            <h4>기간</h4>
            <div className="date--picker">
              <input type="date" name="date" defaultValue={getToday(date[period])} min={date.sixM} max={date.oneM} onChange={handleValueChange} />
              <span>~</span>
              <input type="date" name="date" defaultValue={getToday(date.today)} min={date.oneM} max={date.oneM} />
            </div>
            <div className="date--radio">
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
          </SetPeriod>
          <SetType>
            <GlobalType className="globalType">
              <label htmlFor="source">Source</label>
              <select name="source">
                <option value="">--Source--</option>
                <option value="source a">a</option>
                <option value="source b">b</option>
                <option value="source c">c</option>
                <option value="source d">d</option>
              </select>
            </GlobalType>
            <GlobalType className="globalType">
              <label htmlFor="category">Category</label>
              <select name="category">
                <option value="">--Category--</option>
                <option value="category a">a</option>
                <option value="category b">b</option>
                <option value="category c">c</option>
                <option value="category d">d</option>
              </select>
            </GlobalType>
            <GlobalType className="globalType">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="">--Type--</option>
                <option value="type a">a</option>
                <option value="type b">b</option>
                <option value="type c">c</option>
                <option value="type d">d</option>
              </select>
            </GlobalType>
            {/* <div>
              <label htmlFor="typeA">
                <input type="checkbox" id="typeA" name="type" />
                All
              </label>
            </div>
            <div>
              <label htmlFor="typeB">
                <input type="checkbox" id="typeB" name="type" />
                LSE
              </label>
            </div>
            <div>
              <label htmlFor="typeC">
                <input type="checkbox" id="typeC" name="type" />
                SEC
              </label>
            </div>
            <div>
              <label htmlFor="typeD">
                <input type="checkbox" id="typeD" name="type" />
                GB
              </label>
            </div>
            <div>
              <label htmlFor="typeE">
                <input type="checkbox" id="typeE" name="type" />
                General
              </label>
            </div>
            <div>
              <label htmlFor="typeF">
                <input type="checkbox" id="typeF" name="type" />
                Capital
              </label>
            </div>
            <div>
              <label htmlFor="typeG">
                <input type="checkbox" id="typeG" name="type" />
                Company Info
              </label>
            </div>
            <div>
              <label htmlFor="typeH">
                <input type="checkbox" id="typeH" name="type" />
                Type - A
              </label>
            </div>
            <div>
              <label htmlFor="typeI">
                <input type="checkbox" id="typeI" name="type" />
                Type - B
              </label>
            </div>
            <div>
              <label htmlFor="typeJ">
                <input type="checkbox" id="typeJ" name="type" />
                Type - C
              </label>
            </div> */}
          </SetType>
          <button className="btn__form">적용</button>
          <input className="btn__form" type="reset" value="초기화" onClick={() => setPeriod('oneY')} />
        </form>
      </div>
    </DisclosureFilterWrapper>
  )
}

export default GlobalFilter;