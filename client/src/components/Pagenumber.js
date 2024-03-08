import React, { memo } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const notActive =
  "w-[46px] h-[48px] flex justify-center items-center bg-white hover:bg-gray-300  rounded-md ";
const Active =
  "w-[46px] h-[48px] flex justify-center items-center bg-[#E13427] text-white cursor-pointer  rounded-md ";
const PageNumber = ({ text, currentPage, icon, SetCurrentPage }) => {


  const Navigation = useNavigate();
  const [paramsSearch]=useSearchParams()
  const location=useLocation()
  let entries=paramsSearch.entries()
  const append =(entries)=>{
    let params=[]
    paramsSearch.append('page',+text)
    for(let entry of entries){
      params.push(entry)
    }
    let searchParamsObject= {}
    params?.forEach(i=>{
      if(Object.keys(searchParamsObject)?.some(item=>item===i[0]&&item !=='page')){
        searchParamsObject[i[0]]=[...searchParamsObject[i[0]],i[1]]
      }else{
        searchParamsObject={...searchParamsObject,[i[0]]:[i[1]]}
      }
    })
    
    return searchParamsObject
  }
  const handleChangepage = () => {
    if (!(text === "...")) {
      SetCurrentPage(+text);
      
      Navigation({
        pathname: location.pathname,
        search: createSearchParams(append(entries)).toString(),
      });
    }
  };
  return (
    <div
      className={
        +text === +currentPage
          ? Active
          : `${notActive} ${text === "..." ? "cursor-text" : "cursor-pointer"}`
      }
      onClick={handleChangepage}
    >
      {icon || text}
    </div>
  );
};
export default memo(PageNumber);
