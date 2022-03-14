import React, {useState, useEffect} from "react";
import DomesticFilter from "@components/Disclosure/DisclosureFilter/DomesticFilter"
import DomesticList from "@components/Disclosure/DisclosureList/DomesticList"
import Pagination from "@components/Disclosure/Pagination";
import axios from "redaxios";

const DoDisclosure = () => {
  const [disclosureList, setDisclosureList] = useState(null); // 공시 리스트
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  
  useEffect(() => {
    let isApiSubscribed = true;
    const disclosureFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/005930/disclosure.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setDisclosureList(res.data);
        }, 2000);
      }
    };
    disclosureFetch();
    return () => (isApiSubscribed = false);
  }, [])

  return (
    <div className="disclosure">
      <DomesticFilter setData={setDisclosureList} />
      {!disclosureList ? (
        <div>로딩중</div>
      ) : (
        <>
          <DomesticList 
            data={disclosureList} 
            offset={offset} 
            limit={limit}
          />
          <Pagination
            total={disclosureList.list.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
};

export default DoDisclosure;
