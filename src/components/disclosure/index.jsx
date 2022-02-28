import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { DisclosureWrapper } from "./style";
import axios from 'redaxios'
import DomesticCriterion from "./DisclosureCriterion/DomesticCriterion"
import GlobalCriterion from "./DisclosureCriterion/GlobalCriterion"
import DomesticList from "./DisclosureList/DomesticList"
import GlobalList from "./DisclosureList/GlobalList"

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

const url = `https://opendart.fss.or.kr`
          + `/api/list.json?`
          + `crtfc_key=${hardCode.crtfc_key}&`
          + `end_de=${hardCode.end_de}&`
          + `corp_cls=${hardCode.corp_cls}&`
          + `page_no=${hardCode.page_no}&`
          + `page_count=${hardCode.page_count}`

const Disclosure = () => {
  useEffect(() => {
    // const data = axios(url)
    //   .then((res) => res.data)
    //   .then((data) => {
    //     console.log(data)
    //   });
  }, []);
  const isDomestic = window.location.pathname.substring(1,2) === 'd'
  console.log(isDomestic)

  return (
    <DisclosureWrapper>
      <div className="disclosure">
        {isDomestic && <> 
          <DomesticCriterion />
          <DomesticList />
        </> || <> 
          <GlobalCriterion />
          <GlobalList />
        </>}
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