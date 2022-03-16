import React, {useState} from "react";
import { DisclosureFilterWrapper, SetPeriod, SetType } from "./style";
import DisclosureModal from "@components/disclosure/DisclosureModal";
import { func } from "prop-types";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useMediaQuery } from 'react-responsive'

const DomesticFilter = ({ setData }) => {
  const [period, setPeriod] = useState("oneY");
  const [disclosureType, setDisclosureType] = useState(["typeA"]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }

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
    // setData()
  }
  function handleRadioChange(event) {
    console.log(event.target.id)
    setPeriod(event.target.id)
  }
  function handleValueChange(event) {
    return ;
  }
  function isChecked() {
    console.log("checked")
  }
  function handleInputChange(e) {
    console.log(e.target.checked)
    if(e.target.checked) {
      setDisclosureType([...disclosureType, e.target.value])
    }
    console.log(disclosureType)
    // e.target.value 가 disclosureType에 있는지 체크
      // 있으면 제거한다. 
      // 없으면 추가한다. 
    // setDisclosureType([...disclosureType, e.target.value])   
  }
  // 체크박스 체크 or 체크해제(닫기)
    // setType 실행 => type 업데이트
      // type에 해당 id가 포함여부 판별 
        // type.detail 랜더링 업데이트
  return (
    <DisclosureFilterWrapper>
      <div className="disclosure__filter">
        <form name="form" onSubmit={handleFormSubmit}>
          <SetPeriod key={period}>
            <div className="date__picker">
              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}className="datepicker"/>~
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}className="datepicker"/> */}
              <input className="begin" type="date" name="date" defaultValue={getToday(date[period])} min={date.sixM} max={date.oneM} onChange={handleValueChange} />
              <span>~</span>
              <input type="date" name="date" defaultValue={getToday(date.today)} min={date.oneM} max={date.oneM} />
            </div>
            <ul className="date__radio">
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
          <button className="btn__filter" onClick={openModal}>필터</button>
          {
            modalVisible && <DisclosureModal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={closeModal}>
                <section className="type">
                  <h4>공시유형</h4>
                  <ul>
                    <li>
                      <input 
                        type="checkbox" id="typeA" name="type" value="typeA" 
                        defaultChecked onChange={handleInputChange} 
                      />
                      <label htmlFor="typeA">정기공시</label>
                    </li> 
                    <li>
                      <input 
                        type="checkbox" id="typeB" name="type" value="typeB" 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="typeB">주요사항보고</label>
                    </li>
                    <li>
                      <input 
                        type="checkbox" id="typeC" name="type" value="typeC" 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="typeC">발행공시</label>
                    </li>
                    <li>
                      <input 
                        type="checkbox" id="typeD" name="type" value="typeD" 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="typeD">지분공시</label>
                    </li>
                    <li>
                      <input 
                        type="checkbox" id="typeE" name="type" value="typeE" 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="typeE">기타공시</label>
                    </li>
                    <li>
                      <input 
                        type="checkbox" id="typeF" name="type" value="typeF" 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="typeF">외부감사관련</label>
                    </li>
                    <li>
                      <input 
                        type="checkbox" id="typeG" name="type" value="typeG" 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="typeG">펀드공시</label>
                    </li>
                    <li>
                      <input 
                        type="checkbox" id="typeH" name="type" value="typeH" 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="typeH">자산유동화</label>
                    </li>
                    <li>
                      <input 
                        type="checkbox" id="typeI" name="type" value="typeI" 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="typeI">거래소공시</label>
                    </li>
                    <li>
                      <input 
                        type="checkbox" id="typeJ" name="type" value="typeJ" 
                        onChange={handleInputChange} 
                      />
                      <label htmlFor="typeJ">공정위공시</label>
                    </li>
                  </ul>
                </section>
                <section className="type__details">
                  { disclosureType.find(li => li === "typeA") && 
                    <div>
                    <h5>정기공시</h5>
                    <ul>
                      <li>
                        <input type="checkbox" id="typeA1" name="typeA" value="typeA1" />
                        <label htmlFor="typeA1">사업보고서</label>
                      </li>                     
                      <li>
                        <input type="checkbox" id="typeA2" name="typeA" value="typeA2" />
                        <label htmlFor="typeA2">반기보고서</label>
                      </li>                    
                      <li>
                        <input type="checkbox" id="typeA3" name="typeA" value="typeA3" />
                        <label htmlFor="typeA3">분기보고서</label>
                      </li>                    
                      <li>
                        <input type="checkbox" id="typeA4" name="typeA" value="typeA4" />
                        <label htmlFor="typeA4">소액공모법인결산서류</label>
                      </li>                    
                      <li>
                        <input type="checkbox" id="typeA5" name="typeA" value="typeA5" />
                        <label htmlFor="typeA5">등록법인결산서류(자본시장법 이전)</label>
                      </li>                    
                    </ul>
                    <div className="type__details__btn">
                      <button>전체선택</button>
                      <button>닫기</button>
                    </div>
                    </div> }
                  { disclosureType.find(li => li === "typeB") && 
                    <div>
                    <h5>주요사항보고서</h5>
                    <ul>
                      <li>
                        <input type="checkbox" id="typeB1" name="typeB" value="typeB1" />
                        <label htmlFor="typeB1">주요사항보고서</label>
                      </li>                    
                      <li>
                        <input type="checkbox" id="typeB2" name="typeB" value="typeB2" />
                        <label htmlFor="typeB2">주요경영사항신고(자본시장법 이전)</label>
                      </li>                    
                      <li>
                        <input type="checkbox" id="typeB3" name="typeB" value="typeB3" />
                        <label htmlFor="typeB3">최대주주등과의거래신고(자본시장법 이전)</label>
                      </li>                    
                    </ul>
                    <div className="type__details__btn">
                      <button>전체선택</button>
                      <button>닫기</button>
                    </div>
                    </div> }
                  { disclosureType.find(li => li === "typeC") && 
                    <div>
                      <h5>발행공시</h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="typeC1" name="typeC" value="typeC1" />
                          <label htmlFor="typeC1">증권신고(지분증권)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeC2" name="typeC" value="typeC2" />
                          <label htmlFor="typeC2">증권신고(채무증권)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeC3" name="typeC" value="typeC3" />
                          <label htmlFor="typeC3">증권신고(파생결합증권)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeC4" name="typeC" value="typeC4" />
                          <label htmlFor="typeC4">증권신고(합병등)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeC5" name="typeC" value="typeC5" />
                          <label htmlFor="typeC5">증권신고(기타)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeC6" name="typeC" value="typeC6" />
                          <label htmlFor="typeC6">소액공모(지분증권)</label>
                        </li>
                        <li>
                          <input type="checkbox" id="typeC7" name="typeC" value="typeC7" />
                          <label htmlFor="typeC7">소액공모(채무증권)</label>
                        </li>          
                        <li>
                          <input type="checkbox" id="typeC8" name="typeC" value="typeC8" />
                          <label htmlFor="typeC8">소액공모(파생결합증권)</label>
                        </li>          
                        <li>
                          <input type="checkbox" id="typeC9" name="typeC" value="typeC9" />
                          <label htmlFor="typeC9">소액공모(합병등)</label>
                        </li>          
                        <li>
                          <input type="checkbox" id="typeC10" name="typeC" value="typeC10" />
                          <label htmlFor="typeC10">소액공모(기타)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeC11" name="typeC" value="typeC11" />
                          <label htmlFor="typeC11">호가중개시스템을통한소액매출</label>
                        </li>                    
                      </ul>
                      <div className="type__details__btn">
                        <button>전체선택</button>
                        <button>닫기</button>
                      </div>
                    </div> }
                  { disclosureType.find(li => li === "typeD") && 
                    <div>
                      <h5>지분공시</h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="typeD1" name="typeD" value="typeD1" />
                          <label htmlFor="typeD1">주식등의대량보유상황보고서</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeD2" name="typeD" value="typeD2" />
                          <label htmlFor="typeD2">공개매수</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeD3" name="typeD" value="typeD3" />
                          <label htmlFor="typeD3">의결권대리행사권유</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeD4" name="typeD" value="typeD4" />
                          <label htmlFor="typeD4">임원ㆍ주요주주특정증권등소유상황보고서</label>
                        </li>                    
                      </ul>
                      <div className="type__details__btn">
                        <button>전체선택</button>
                        <button>닫기</button>
                      </div>
                    </div> }
                  { disclosureType.find(li => li === "typeE") && 
                    <div>
                      <h5>기타공시</h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="typeE1" name="typeE" value="typeE1" />
                          <label htmlFor="typeE1">자기주식취득/처분</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeE2" name="typeE" value="typeE2" />
                          <label htmlFor="typeE2">신탁계약체결/해지</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeE3" name="typeE" value="typeE3" />
                          <label htmlFor="typeE3">합병등종료보고서</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeE4" name="typeE" value="typeE4" />
                          <label htmlFor="typeE4">주식매수선택권부여에관한신고</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeE5" name="typeE" value="typeE5" />
                          <label htmlFor="typeE5">사외이사에관한신고</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeE6" name="typeE" value="typeE6" />
                          <label htmlFor="typeE6">주주총회소집보고서</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeE7" name="typeE" value="typeE7" />
                          <label htmlFor="typeE7">시장조성/안정조작</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeE8" name="typeE" value="typeE8" />
                          <label htmlFor="typeE8">합병등신고서(자본시장법이전)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeE9" name="typeE" value="typeE9" />
                          <label htmlFor="typeE9">금융위등록/취소(자본시장법이전)</label>
                        </li>                    
                      </ul>
                      <div className="type__details__btn">
                        <button>전체선택</button>
                        <button>닫기</button>
                      </div>
                    </div> }
                  { disclosureType.find(li => li === "typeF") && 
                    <div>
                      <h5>외부감사관련</h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="typeF1" name="typeF" value="typeF1" />
                          <label htmlFor="typeF1">감사보고서</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeF2" name="typeF" value="typeF2" />
                          <label htmlFor="typeF2">연결감사보고서</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeF3" name="typeF" value="typeF3" />
                          <label htmlFor="typeF3">결합감사보고서</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeF4" name="typeF" value="typeF4" />
                          <label htmlFor="typeF4">회계법인사업보고서*</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeF5" name="typeF" value="typeF5" />
                          <label htmlFor="typeF5">감사전재무제표미제출신고서</label>
                        </li>                                  
                      </ul>
                      <div className="type__details__btn">
                        <button>전체선택</button>
                        <button>닫기</button>
                      </div>
                    </div> }
                  { disclosureType.find(li => li === "typeG") && 
                    <div>
                      <h5>펀드공시</h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="typeG1" name="typeG" value="typeG1" />
                          <label htmlFor="typeG1">증권신고(집합투자증권-신탁형)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeG2" name="typeG" value="typeG2" />
                          <label htmlFor="typeG2">증권신고(집합투자증권-회사형)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeG3" name="typeG" value="typeG3" />
                          <label htmlFor="typeG3">증권신고(집합투자증권-합병)</label>
                        </li>                                        
                      </ul>
                      <div className="type__details__btn">
                        <button>전체선택</button>
                        <button>닫기</button>
                      </div>
                    </div> }
                  { disclosureType.find(li => li === "typeH") && 
                    <div>
                      <h5>자산유동화</h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="typeH1" name="typeH" value="typeH1" />
                          <label htmlFor="typeH1">자산유동화계획/양도등록</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeH2" name="typeH" value="typeH2" />
                          <label htmlFor="typeH2">사업/반기/분기보고서</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeH3" name="typeH" value="typeH3" />
                          <label htmlFor="typeH3">증권신고(유동화증권)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeH4" name="typeH" value="typeH4" />
                          <label htmlFor="typeH4">채권유동화계획/양도등록*</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeH5" name="typeH" value="typeH5" />
                          <label htmlFor="typeH5">자산유동화관련중요사항발생등신고</label>
                        </li>                                  
                        <li>
                          <input type="checkbox" id="typeH6" name="typeH" value="typeH6" />
                          <label htmlFor="typeH6">주요사항보고서</label>
                        </li>                                  
                      </ul>
                      <div className="type__details__btn">
                        <button>전체선택</button>
                        <button>닫기</button>
                      </div>
                    </div> }
                  { disclosureType.find(li => li === "typeI") && 
                    <div>
                      <h5>거래소공시(한국거래소 소관)</h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="typeI1" name="typeI" value="typeI1" />
                          <label htmlFor="typeI1">수시공시</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeI2" name="typeI" value="typeI2" />
                          <label htmlFor="typeI2">공정공시</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeI3" name="typeI" value="typeI3" />
                          <label htmlFor="typeI3">시장조치/안내</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeI4" name="typeI" value="typeI4" />
                          <label htmlFor="typeI4">지분공시</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeI5" name="typeI" value="typeI5" />
                          <label htmlFor="typeI5">증권투자회사</label>
                        </li>                                  
                        <li>
                          <input type="checkbox" id="typeI6" name="typeI" value="typeI6" />
                          <label htmlFor="typeI6">채권공시</label>
                        </li>                                  
                      </ul>
                      <div className="type__details__btn">
                        <button>전체선택</button>
                        <button>닫기</button>
                      </div>
                    </div> }
                  { disclosureType.find(li => li === "typeJ") && 
                    <div>
                      <h5>공정위공시 (공정거래위원회 소관)</h5>
                      <ul>
                        <li>
                          <input type="checkbox" id="typeJ1" name="typeJ" value="typeJ1" />
                          <label htmlFor="typeJ1">대규모내부거래관련</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeJ2" name="typeJ" value="typeJ2" />
                          <label htmlFor="typeJ2">대규모내부거래관련(공익법인용)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeJ3" name="typeJ" value="typeJ3" />
                          <label htmlFor="typeJ3">대규모내부거래관련(구)</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeJ4" name="typeJ" value="typeJ4" />
                          <label htmlFor="typeJ4">기업집단현황공시</label>
                        </li>                    
                        <li>
                          <input type="checkbox" id="typeJ5" name="typeJ" value="typeJ5" />
                          <label htmlFor="typeJ5">비상장회사중요사항공시</label>
                        </li>                                  
                        <li>
                          <input type="checkbox" id="typeJ6" name="typeJ" value="typeJ6" />
                          <label htmlFor="typeJ6">기타공정위공시</label>
                        </li>                                  
                      </ul>
                      <div className="type__details__btn">
                        <button>전체선택</button>
                        <button>닫기</button>
                      </div>
                    </div> }
                </section>
                <div className="type__btn">
                  <input className="btn__form" type="reset" value="초기화" onClick={() => setPeriod('oneY')} />
                  <button className="btn__submit" type="submit">설정</button>
                </div>

            </DisclosureModal>
          }
        </form>
      </div>
    </DisclosureFilterWrapper>
  )
}

export default DomesticFilter;