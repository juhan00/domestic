import React, {useState, useEffect, useMemo} from "react";
import { Page, Button, ArrayWrapper } from "./style";


function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  const tenDigit = Math.floor(page / 10) * 10 - 1

  const handleDeClick = () => {
    setPage(page - 1)
  }

  const handleInClick = () => {
    setPage(page + 1)
  }

  useMemo(() => Math.floor(page / 10), [page])
  console.log(page)
  console.log(tenDigit)
  if (tenDigit === -1) {
    ArrayWrapper.__emotion_styles[0] += `  transform: translateX(0px);`
  } else if(page > tenDigit) {
    ArrayWrapper.__emotion_styles[0] += `  transform: translateX(${-34 * tenDigit}px);`
  } 

  return (
    <Page>
      <Button className="arrow left" onClick={handleDeClick} disabled={page === 1}>
      </Button>
      <div className="overflow">
        <ArrayWrapper>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <Button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </Button>
          ))}
        </ArrayWrapper>
      </div>
      <Button className="arrow right" onClick={handleInClick} disabled={page === numPages}>
      </Button>
    </Page>
  );
}


export default Pagination;
