import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { DisclosureWrapper } from "./style";
import axios from 'redaxios'

const hardCode = {
  crtfc_key: '40529f7f2d13f0da1ede1202e7cac575cf0419be', // API 인증키	
  corp_code: '', // 고유번호
  bgn_de: '', // 시작일
  end_de: '20200117', // 종료일	
  last_reprt_at: '', // 최종보고서 검색여부
  pblntf_ty: '', // 공시유형
  pblntf_detail_ty: '', // 공시상세유형
  corp_cls: 'Y', // 법인구분
  sort: '', // 정렬
  sort_mth: '', // 정렬방법
  page_no: '1', // 페이지 번호	
  page_count: '10' // 페이지 별 건수	
}

const url = `/api/list.json?`
          + `crtfc_key=${hardCode.crtfc_key}&`
          + `end_de=${hardCode.end_de}&`
          + `corp_cls=${hardCode.corp_cls}&`
          + `page_no=${hardCode.page_no}&`
          + `page_count=${hardCode.page_count}`

// 가져온 대이터를 zip file로 만든다
  // 압축을 해제하면 xml을 볼 수 있다. 
const Disclosure = () => {
  const [period, setPeriod] = useState("oneY");
  // 날짜 select 준비
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
console.log(getToday(date[period]))

  // useEffect(() => {
  //   const data = axios(url)
  //     .then((res) => res.data)
  //     .then((data) => {
  //       // console.log(data)
  //     });
  // }, []);

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
    <DisclosureWrapper>
      <div className="disclosure">
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
                <label htmlFor="oneM">1개월</label>
              </div>
              <div>
                <input type="radio" id="sixM" name="period" onChange={handleRadioChange} checked={period === "sixM"} />
                <label htmlFor="sixM">6개월</label>
              </div>
              <div>
                <input type="radio" id="oneY" name="period" onChange={handleRadioChange} checked={period === "oneY"} />
                <label htmlFor="oneY">1년</label>
              </div>
              <div>
                <input type="radio" id="threeY" name="period" onChange={handleRadioChange} checked={period === "threeY"} />
                <label htmlFor="threeY">3년</label>
              </div>
              <div>
                <input type="radio" id="fiveY" name="period" onChange={handleRadioChange} checked={period === "fiveY"} />
                <label htmlFor="fiveY">5년</label>
              </div>
              <div>
                <input type="radio" id="tenY" name="period" onChange={handleRadioChange} checked={period === "tenY"} />
                <label htmlFor="tenY">10년</label>
              </div>
            </div>
            <div className="setType">
              <div>
                <label htmlFor="typeA">
                  <input type="checkbox" id="typeA" name="typeA" />
                  정기공시
                </label>
              </div>
              <div>
                <label htmlFor="typeB">
                  <input type="checkbox" id="typeB" name="typeB" />
                  주요사항보고
                </label>
              </div>
              <div>
                <label htmlFor="typeC">
                  <input type="checkbox" id="typeC" name="typeC" />
                  발행공시
                </label>
              </div>
              <div>
                <label htmlFor="typeD">
                  <input type="checkbox" id="typeD" name="typeD" />
                  지분공시
                </label>
              </div>
              <div>
                <label htmlFor="typeE">
                  <input type="checkbox" id="typeE" name="typeE" />
                  기타공시
                </label>
              </div>
              <div>
                <label htmlFor="typeF">
                  <input type="checkbox" id="typeF" name="typeF" />
                  외부감사관련
                </label>
              </div>
              <div>
                <label htmlFor="typeG">
                  <input type="checkbox" id="typeG" name="typeG" />
                  펀드공시
                </label>
              </div>
              <div>
                <label htmlFor="typeH">
                  <input type="checkbox" id="typeH" name="typeH" />
                  자산유동화
                </label>
              </div>
              <div>
                <label htmlFor="typeI">
                  <input type="checkbox" id="typeI" name="typeI" />
                  거래소공시
                </label>
              </div>
              <div>
                <label htmlFor="typeJ">
                  <input type="checkbox" id="typeJ" name="typeJ" />
                  공정위공시
                </label>
              </div>
            </div>
            <button>적용</button>
          </form>
        </div>
        <div className="disclosure__list">
          <div className="disclosure__list__header">

          </div>
          <div className="disclosure__list__body">

          </div>
        </div>
      </div>
    </DisclosureWrapper>
  );
};

// Typescript를 적용하지 않은 대신 propTypes를 사용하여 안정성을 더했습니다.
// prop:PropsTypes.type 의 형태로 사용해주시면 됩니다.

Disclosure.propTypes = {
  // exampleMessage: PropTypes.string.isRequired,
};

export default Disclosure;
