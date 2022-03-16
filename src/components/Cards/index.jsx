import React, { useMemo } from "react";
import { CardsWrapper } from "./style";
import icon_positive from "@images/icon_positive.svg";
import icon_negative from "@images/icon_negative.svg";
import icon_nuetral from "@images/icon_neutral.svg";
import icon_news from "@images/icon_news.svg";
import boom_up from "@images/boom_up.svg";
import boom_down from "@images/boom_down.svg";
import { timeFormat } from "d3";

const CardsList = ({ startDate, endDate }) => {
  const periodStart = useMemo(
    () => timeFormat("%Y.%m.%d")(startDate),
    [startDate],
  );
  const periodEnd = useMemo(() => timeFormat("%Y.%m.%d")(endDate), [endDate]);
  return (
    <CardsWrapper>
      <EmojiCard
        icon={icon_news}
        title="Apple Inc 관련 뉴스 수집량"
        description={`${periodStart}-${periodEnd} 기준`}
        number="538"
        unit="개"
      />
      <EmojiCard
        icon={boom_up}
        title="KODEX 200선물인버스x 버즈량 전월대비"
        description={`${periodStart}-${periodEnd} 기준`}
        number="2.5%"
        unit="하락"
      />
      <EmojiCard
        icon={icon_positive}
        title="KODEX 200선물인버스x "
        description={`${periodStart}-${periodEnd} 기준`}
        number="82.5%"
        numberDes="긍정"
      />
      <Card description={`${periodStart}-${periodEnd} 기준`} />
    </CardsWrapper>
  );
};

const EmojiCard = React.memo(
  ({ icon, title, description, numberDes, number, unit }) => {
    return (
      <div className="card">
        <div className="card-info">
          <div className="emoji">
            <img src={icon} alt="icon_positive" />
          </div>
          <div>
            <div className="title">{title}</div>
            <div className="value">
              <span className="number-des">{numberDes}</span>
              <span className="number">{number}</span>
              <span className="unit">{unit}</span>
            </div>
          </div>
        </div>
        <div className="period-date">{description}</div>
      </div>
    );
  },
);

const Card = React.memo(
  ({
    description = "2022.02.01-2022.03.01 기준",
    highestDate = "2021-08-11",
    lowestDate = "2021-08-11",
  }) => {
    return (
      <div className="extreme card">
        <div className="extreme_info">
          <div className="content">
            <div className="title">긍정이 가장 많은 날</div>
            <div className="date">{highestDate}</div>
          </div>
          <div className="content">
            <div className="title">부정이 가장 많은 날</div>
            <div className="date">{lowestDate}</div>
          </div>
        </div>
        <div className="period-date">{description}</div>
      </div>
    );
  },
);

export default CardsList;
