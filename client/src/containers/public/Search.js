import React, { useEffect, useState } from "react";
import { Searchitem, Modal } from "../../components";
import icons from "../../ultils/Icons";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { path } from "../../ultils/Constant";
import {
  getCodePrice,
  getCodeArea,
  getCodesPrice,
  getCodesArea,
} from "../../ultils/common/getCode";
const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;

const Search = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const [defaultText, setDefaultText] = useState("");
  const [arrMaxMin, setArrMaxMin] = useState({});
  const [queries, setQueries] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState([]);
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );

  const handleShowModal = (content, name, defaultText) => {
    setContent(content);
    setName(name);
    setDefaultText(defaultText);
    setIsShowModal(true);
  };
  const handleSubmit = (e, query, arrMaxMin1) => {
    e.stopPropagation();
    setQueries((prev) => ({ ...prev, ...query }));
    setIsShowModal(false);
    arrMaxMin1 && setArrMaxMin((prev) => ({ ...prev, ...arrMaxMin1 }));
  };
  const handleSearch = () => {
    const querycodes = Object.entries(queries)
      .filter((item) => item[0].includes("Number") || item[0].includes("Code"))
      .filter((item) => item[1]);
    let queryCodeObj = {};
    querycodes.forEach((item) => {
      queryCodeObj[item[0]] = item[1];
    });

    let queryTextObj = {};
    const queryText = Object.entries(queries).filter(
      (item) => !item[0].includes("Code") || item[0].includes("Number")
    );
    queryText.forEach((item) => {
      queryTextObj[item[0]] = item[1];
    });

    let titleSearch = `${
      queryTextObj.category ? queryTextObj.category : "cho thuê tất cả"
    } ${queryTextObj.province ? `tỉnh ${queryTextObj.province}` : ""} ${
      queryTextObj.price ? `giá ${queryTextObj.price}` : ""
    }${queryTextObj.area ? ` diện tích ${queryTextObj.area}` : ""}`;
    Navigate(
      {
        pathname: path.SEARCH,
        search: createSearchParams(queryCodeObj).toString(),
      },
      { state: { titleSearch } }
    );
  };

  return (
    <>
      <div className=" p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handleShowModal(categories, "category", "tìm tất cả")}
          className="cursor-pointer flex-1"
        >
          <Searchitem
            fontWeight
            IconBefore={<MdOutlineHouseSiding />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.category}
            defaultText={"tìm tất cả"}
          />
        </span>
        <span
          onClick={() => handleShowModal(provinces, "province", "toàn quốc")}
          className="cursor-pointer flex-1"
        >
          <Searchitem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.province}
            defaultText={"toàn quốc"}
          />
        </span>
        <span
          onClick={() => handleShowModal(prices, "price", "chọn giá")}
          className="cursor-pointer flex-1"
        >
          <Searchitem
            IconBefore={<TbReportMoney />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.price}
            defaultText={"chọn giá"}
          />
        </span>
        <span
          onClick={() => handleShowModal(areas, "area", "chọn diện tích ")}
          className="cursor-pointer flex-1"
        >
          <Searchitem
            IconBefore={<RiCrop2Line />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.area}
            defaultText={"chọn diện tích "}
          />
        </span>

        <button
          type="button"
          onClick={handleSearch}
          className="outline-none py-2 px-4 w-full bg-secondary1 text-[13.3px] flex items-center justify-center gap-2 text-white font-medium"
        >
          <FiSearch />
          tìm kiếm
        </button>
      </div>
      {isShowModal && (
        <Modal
          arrMaxMin={arrMaxMin}
          queries={queries}
          handleSubmit={handleSubmit}
          content={content}
          name={name}
          setIsShowModal={setIsShowModal}
          defaultText={defaultText}
        />
      )}
    </>
  );
};
export default Search;
