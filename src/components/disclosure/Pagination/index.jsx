import React, {useState, useEffect} from "react";
import { Page, Button, ArrayWrapper } from "./style";


function Pagination({ total, limit, page, setPage }) {
  const [location, setLocation] = useState(0);
  const numPages = Math.ceil(total / limit);

  const handleDeClick = () => {
    setPage(page - 1)
    if(page <= 11) {
      ArrayWrapper.__emotion_styles[0] += `  transform: translateX(${location}px);`
      setLocation(location + 34)
    }
  }
  const handleInClick = () => {
    setPage(page + 1)
    if(page >= 8) {
      ArrayWrapper.__emotion_styles[0] += `  transform: translateX(${location}px);`
      setLocation(location - 34)
    }
  }

  useEffect(() => {
  }, [])


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
