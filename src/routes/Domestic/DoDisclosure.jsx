import React from "react";
import DomesticFilter from "@components/Disclosure/DisclosureFilter/DomesticFilter"
import DomesticList from "@components/Disclosure/DisclosureList/DomesticList"

const DoDisclosure = () => {
  return (
    <div className="disclosure">
      <DomesticFilter />
      <DomesticList />
    </div>
  );
};

export default DoDisclosure;
