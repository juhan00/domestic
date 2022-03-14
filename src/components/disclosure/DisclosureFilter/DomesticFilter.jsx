import React, {useState} from "react";
import { DisclosureFilterWrapper, SetPeriod, SetType } from "./style";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useMediaQuery } from 'react-responsive'

const DomesticFilter = ({ setData }) => {
  const [period, setPeriod] = useState("oneY");

  const date = {
    today: new Date(),
    oneM: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    threeM: new Date(new Date().setMonth(new Date().getMonth() - 3)),
    sixM: new Date(new Date().setMonth(new Date().getMonth() - 6)),
    oneY: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    threeY: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
    fiveY: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    tenY: new Date(new Date().setFullYear(new Date().getFullYear() - 10))
  }
  function getToday(date) {
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }
  
  function handleFormSubmit(event) {
    event.preventDefault()
    console.log('begin-date : ' + form.date[0].value) // 시작일
    console.log('end-date : ' + form.date[1].value) // 마감일
    // const checkedType = [...form.type].filter(input => input.checked)
    // console.log(checkedType) // 체크된 타입
    setData()
  }
  function handleRadioChange(event) {
    console.log(event.target.id)
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
            <div className="date--picker">
              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}className="datepicker"/>~
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}className="datepicker"/> */}
              <input className="begin" type="date" name="date" defaultValue={getToday(date[period])} min={date.sixM} max={date.oneM} onChange={handleValueChange} />
              <span>~</span>
              <input type="date" name="date" defaultValue={getToday(date.today)} min={date.oneM} max={date.oneM} />
            </div>
            <ul className="date--radio">
              <li>                
                <input type="radio" id="oneM" name="period" onChange={handleRadioChange} checked={period === "oneM"} />
                <label htmlFor="oneM">1개월</label>
              </li>
              <li>
                <input type="radio" id="threeM" name="period" onChange={handleRadioChange} checked={period === "threeM"} />
                <label htmlFor="threeM">3개월</label>
              </li>
              <li>
                <input type="radio" id="sixM" name="period" onChange={handleRadioChange} checked={period === "sixM"} />
                <label htmlFor="sixM">6개월</label>
              </li>
              <li>
                <input type="radio" id="oneY" name="period" onChange={handleRadioChange} checked={period === "oneY"} />
                <label htmlFor="oneY">1년</label>
              </li>
              <li>
                <input type="radio" id="threeY" name="period" onChange={handleRadioChange} checked={period === "threeY"} />
                <label htmlFor="threeY">3년</label>
              </li>
              <li>
                <input type="radio" id="fiveY" name="period" onChange={handleRadioChange} checked={period === "fiveY"} />
                <label htmlFor="fiveY">5년</label>
              </li>
              <li>
                <input type="radio" id="tenY" name="period" onChange={handleRadioChange} checked={period === "tenY"} />
                <label htmlFor="tenY">10년</label>
              </li>
            </ul>
          </SetPeriod>
          <button className="btn__filter">Filter</button>
          <button type="submit" className="btn__submit">검색</button>
        </form>
      </div>
    </DisclosureFilterWrapper>
  )
}

export default DomesticFilter;