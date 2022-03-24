import React, { useMemo } from "react";

import { timeFormat } from "d3";
import icon_positive from "@images/icon_positive.svg";
import icon_negative from "@images/icon_negative.svg";
import icon_nuetral from "@images/icon_neutral.svg";
import toggle_off from "@images/toggle_off.svg";
import toggle_on_negative from "@images/toggle_on_negative.svg";
import toggle_on_positive from "@images/toggle_on_positive.svg";
import toggle_on_neutral from "@images/toggle_on_neutral.svg";

import { NewsListContentWrapper, PageLi, PageUl, NewsWrapper } from "./style";

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
        <div className="menu-title-wrapper">
          <div className="menu-title">
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
        <div className="content-wrapper">
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
      <NewsWrapper>
        {data.length > 0 ? (
          data.map((ele) => (
            <li className="news-element" key={ele.id}>
              <div className="content-wrapper">
                <img
                  src={
                    ele.emotion === 0
                      ? icon_nuetral
                      : ele.emotion > 0
                      ? icon_positive
                      : icon_negative
                  }
                  alt={
                    ele.emotion === 0
                      ? "icon_nuetral"
                      : ele.emotion > 0
                      ? "icon_positive"
                      : "icon_negative"
                  }
                />
                <div className="info-wrapper">
                  <div className="info">
                    <div>{ele.press}&nbsp;</div>
                    <div>{time(ele.date)}</div>
                  </div>
                  <div className="news-title-wrapper">
                    <a className="news-title" href={ele.url} target="_blank">
                      {ele.title}
                    </a>
                  </div>
                  <div className="keyword-wrapper">
                    {ele.keyword.map((ele) => (
                      <div className="keyword" key={ele}>
                        {ele}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div>뉴스가 존재하지 않습니다.</div>
        )}
      </NewsWrapper>
    </>
  );
};

const Pagination = ({
  newsPerPage,
  totalNews,
  paginate,
  currentPage,
  onClickPrev,
  onClickNext,
}) => {
  const pageLimit = useMemo(
    () => Math.floor(totalNews / newsPerPage),
    [newsPerPage, totalNews],
  );

  const newsNumbers = useMemo(() => {
    const temp = [];
    let end =
      currentPage > pageLimit
        ? pageLimit
        : Math.floor(currentPage / 10) * 10 + 10 > pageLimit
        ? pageLimit
        : Math.floor(currentPage / 10) * 10 + 10;

    let start =
      end === pageLimit
        ? pageLimit - 10 > 0
          ? pageLimit - 10
          : 1
        : end - 10 > 0
        ? end - 10
        : 1;
    for (let i = start; i <= end; i++) {
      temp.push(i);
    }

    return temp;
  }, [pageLimit, currentPage]);

  return (
    <div style={{ position: "absolute", bottom: 10 }}>
      <nav>
        <PageUl className="pagination">
          {currentPage !== 1 && (
            <PageLi onClick={onClickPrev} className="prev"></PageLi>
          )}
          {newsNumbers.map((number) => (
            <PageLi
              key={number}
              className={
                currentPage === number ? "page-item active" : "page-item"
              }>
              <span onClick={() => paginate(number)} className="page-link">
                {number}
              </span>
            </PageLi>
          ))}
          {currentPage !== pageLimit && (
            <PageLi onClick={onClickNext} className="next"></PageLi>
          )}
        </PageUl>
      </nav>
    </div>
  );
};
