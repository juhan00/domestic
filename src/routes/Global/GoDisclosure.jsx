import React from "react";
import GlobalFilter from "@components/Disclosure/DisclosureFilter/GlobalFilter"
import GlobalList from "@components/Disclosure/DisclosureList/GlobalList"

const DoDisclosure = () => {
  return (
    <div className="disclosure">
      <GlobalFilter />
      <GlobalList />
    </div>
  );
};

export default DoDisclosure;
