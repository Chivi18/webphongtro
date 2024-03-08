import React, { useEffect, useState } from "react";
import { List, Pagination } from "./index";
import { text } from "../../ultils/Constant";
import { Province, ItemSideBar, RelatePost } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { fomatVietnamesetoString } from "../../ultils/common/fomatVietnamesetoString";
import { useLocation } from "react-router-dom";

const Rental = () => {
  const { categories, prices, areas } = useSelector((state) => state.app);
  const [categoryCode, SetCategoryCode] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const [categoryCurrent,setCategoryCurrent]=useState('none')
  useEffect(() => {
    const category = categories?.find(
      (item) => `/${fomatVietnamesetoString(item.value)}` === location.pathname
    );
      setCategoryCurrent(category)
    if (category) {
      SetCategoryCode(category.code);
    }
  }, [location]);
 
  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{categoryCurrent?.header}</h1>
        <p className="text-base text-gray-700">{categoryCurrent?.subheader}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[68%]">
          <List categoryCode={categoryCode} />
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
export default Rental;
