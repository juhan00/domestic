import React, {useState} from "react";
import DomesticFilter from "@components/Disclosure/DisclosureFilter/DomesticFilter"
import DomesticList from "@components/Disclosure/DisclosureList/DomesticList"
import Pagination from "@components/Disclosure/Pagination";
import domesticSample from "@utils/doDisclosureData";


const DoDisclosure = () => {
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const disclosureList = domesticSample.list;

  return (
    <div className="disclosure">
      <DomesticFilter />
      <DomesticList 
        list={disclosureList} 
        offset={offset} 
        limit={limit}
      />
      <Pagination
        total={disclosureList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default DoDisclosure;
