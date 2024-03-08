import React, { memo } from "react";
import icons from "../ultils/Icons";
import { fomatVietnamesetoString } from "../ultils/common/fomatVietnamesetoString";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
import { createSearchParams,useLocation, useNavigate } from "react-router-dom";
const { GrNext } = icons;


const ItemSideBar = ({ title, content, isbouble, type }) => {
  const location =useLocation();
  const Navigation=useNavigate();
  const dispatch = useDispatch();
  const handlefilterposts = (code) => {
  
    Navigation({
  pathname: location.pathname,
  search: createSearchParams({
   [type] : code
  }).toString(),
});
  };
  const formatcontent = () => {
    const oddEl = content?.filter((item, index) => index % 2 !== 0);
    const evenEl = content?.filter((item, index) => index % 2 === 0);
    const formatcontent = oddEl?.map((item, index) => {
      return {
        right: item,
        left: evenEl?.find((item2, index2) => index2 === index),
      };
    });

    return formatcontent;
  };

  return (
    <div className="p-4 rounded-md bg-white w-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {isbouble && (
        <div className="flex flex-col gap-2">
          {content?.length > 0 &&
            formatcontent(content).map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex items-center justify-around">
                    <div
                      className="flex flex-1 gap-2 items-center cursor-pointer hover:text-orange-600 border-b border-grap-600 pb-1 border-dashed"
                      onClick={() => {
                        handlefilterposts(item.left.code);
                      }}
                    >
                      <GrNext size={16} color="#ccc" />
                      <p>{item.left.value}</p>
                    </div>

                    <div
                      className="flex flex-1 gap-2 items-center cursor-pointer hover:text-orange-600 border-b border-grap-600 pb-1 border-dashed"
                      onClick={() => {
                        handlefilterposts(item.right.code);
                      }}
                    >
                      <GrNext size={16} color="#ccc" />
                      <p>{item.right.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {!isbouble && (
        <div className="flex flex-col gap-2">
          {content?.length > 0 &&
            content.map((item, index) => {
              return (
                <Link
                  to={`${fomatVietnamesetoString(item.value)}`}
                  key={item.code}
                  className="flex gap-2 items-center cursor-pointer hover:text-orange-600 border-b border-grap-600 pb-1 border-dashed"
                >
                  <GrNext size={16} color="#ccc" />
                  <p>{item.value}</p>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};
export default memo(ItemSideBar);
