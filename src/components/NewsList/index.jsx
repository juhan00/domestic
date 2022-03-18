import React, { useState, useMemo } from "react";
import styled from "@emotion/styled";
import { timeFormat } from "d3";
import icon_positive from "@images/icon_positive.svg";
import icon_negative from "@images/icon_negative.svg";
import icon_nuetral from "@images/icon_neutral.svg";
import toggle_off from "@images/toggle_off.svg";
import toggle_on_negative from "@images/toggle_on_negative.svg";
import toggle_on_positive from "@images/toggle_on_positive.svg";
import toggle_on_neutral from "@images/toggle_on_neutral.svg";
import modal_open_icon from "@images/modal_open_icon.svg";
import modal_close_icon from "@images/modal_close_icon.svg";
import resent_slide_arrow_next from "@images/resent_slide_arrow_next.svg";
import resent_slide_arrow_prev from "@images/resent_slide_arrow_prev.svg";
import { NewsListContentWrapper } from "./style";

const NewsList = ({
  data,
  positive,
  negative,
  onClickPrev,
  onClickNext,
  neutral,
  onTogglePositive,
  onToggleNegative,
  onToggleNeutral,
  currentPage,
  newsPerPage,
  setCurrentPage,
}) => {
  const indexOfLast = useMemo(
    () => currentPage * newsPerPage,
    [currentPage, newsPerPage],
  );
  const indexOfFirst = useMemo(
    () => indexOfLast - newsPerPage,
    [indexOfLast, newsPerPage],
  );

  const currentNews = useMemo(() => {
    return data.slice(indexOfFirst, indexOfLast);
  }, [data, indexOfFirst, indexOfLast, positive, negative, neutral]);

  return (
    <div className="level1-news-list-wrapper">
      <NewsListContentWrapper>
        <div className="title-wrapper">
          <div className="title">
            <div className="curtab">실시간뉴스</div>
            <div>뉴스리스트</div>
          </div>
          <ul className="button-wrapper">
            <li>
              <span>긍정</span>
              <img
                onClick={onTogglePositive}
                src={positive ? toggle_on_positive : toggle_off}
                alt="positive"
              />
            </li>
            <li>
              <span>부정</span>
              <img
                onClick={onToggleNegative}
                src={negative ? toggle_on_negative : toggle_off}
                alt="negative"
              />
            </li>
            <li>
              <span>중립</span>
              <img
                onClick={onToggleNeutral}
                src={neutral ? toggle_on_neutral : toggle_off}
                alt="neutral"
              />
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <News data={currentNews} />
          <Pagination
            currentPage={currentPage}
            newsPerPage={newsPerPage}
            onClickPrev={onClickPrev}
            onClickNext={onClickNext}
            totalNews={data.length}
            paginate={setCurrentPage}
          />
        </div>
      </NewsListContentWrapper>
    </div>
  );
};

export default NewsList;

const News = ({ data }) => {
  const time = timeFormat("%Y.%m.%d");
  return (
    <>
      <ul style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        {data.length > 0 ? (
          data.map((ele) => (
            <li key={ele.id}>
              <div style={{ display: "flex" }}>
                <img
                  src={
                    ele.emotion === 0
                      ? icon_nuetral
                      : ele.emotion > 0
                      ? icon_positive
                      : icon_negative
                  }
                  alt="emotion_icon"
                  style={{ margin: "28px 20px 28px 0" }}
                />
                <div
                  style={{ width: "100%", borderBottom: "1px solid #F0F0F6" }}>
                  <div style={{ display: "flex", margin: "2px 0 12px 0" }}>
                    <div>{ele.press}</div>
                    <div>{time(ele.date)}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <div>{ele.title}</div>
                    <img src={modal_open_icon} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      margin: "12px 0 15px",
                    }}>
                    {ele.keyword.map((ele) => (
                      <div
                        style={{
                          padding: "2px 12px 3px",
                          background: "#F7F7FB",
                          borderRadius: "31px",
                        }}>
                        {ele}
                      </div>
                    ))}
                  </div>
                  {/* <div>{ele.summarized}</div> */}
                </div>
              </div>
            </li>
          ))
        ) : (
          <div>뉴스가 존재하지 않습니다.</div>
        )}
      </ul>
    </>
  );
};

const PageUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  cursor: pointer;

  & .active {
    background: #286f6c;
    border-radius: 50%;
  }
`;

const PageSpan = styled.span``;

const Pagination = ({
  newsPerPage,
  totalNews,
  paginate,
  currentPage,
  onClickPrev,
  onClickNext,
}) => {
  const newsNumbers = [];
  let z = totalNews / newsPerPage;
  for (let i = 1; i <= z; i++) {
    if (z > 10) z = 10;
    newsNumbers.push(i);
  }

  return (
    <div style={{ position: "absolute", bottom: 10 }}>
      <nav>
        <PageUl className="pagination">
          <PageLi
            onClick={onClickPrev}
            style={{
              background: `url(${resent_slide_arrow_prev}) 50% 50% no-repeat`,
            }}></PageLi>
          {newsNumbers.map((number) => (
            <PageLi
              key={number}
              className={
                currentPage === number ? "page-item active" : "page-item"
              }>
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
          <PageLi
            onClick={onClickNext}
            style={{
              background: `url(${resent_slide_arrow_next}) 50% 50% no-repeat`,
            }}></PageLi>
        </PageUl>
      </nav>
    </div>
  );
};
