import React, { useEffect, useState } from "react";
import { List, Pagination } from "./index";

import { ItemSideBar, RelatePost } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";


const SearchDetail = () => {
  const {  prices, areas } = useSelector((state) => state.app);
  const location = useLocation()
  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{location.state?.titleSearch||"kết quả tìm kiếm"}</h1>
        <p className="text-base text-gray-700">{location.state?.titleSearch||"kết quả tìm kiếm"}</p>
      </div>
      
      <div className="w-full flex gap-4">
        <div className="w-[68%]">
          <List  />
          <Pagination />
        </div>
        <div className="w-[32%]  flex flex-col gap-4 justify-start items-center">
          <ItemSideBar
            isbouble={true}
            type="priceCode"
            content={prices}
            title="xem theo giá"
          />
          <ItemSideBar
            isbouble={true}
            type="areaCode"
            content={areas}
            title="xem theo diện tích "
          />
          <RelatePost />
        </div>
      </div>
    </div>
  );
};
export default SearchDetail;
