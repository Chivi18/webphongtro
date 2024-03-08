import React from "react";
import { List, Pagination } from "./index";
import { text } from "../../ultils/Constant";
import { Province, ItemSideBar, RelatePost } from "../../components";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { categories, prices, areas } = useSelector((state) => state.app);

  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">

        {/* sidebar bên trái */}
        <div className="w-[68%]">
          <List />
          <Pagination />
        </div>
        
        {/* sidebar bên phải */}
        <div className="w-[32%]  flex flex-col gap-4 justify-start items-center">
          <ItemSideBar content={categories} title="danh sách cho thuê" />
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
export default Homepage;
