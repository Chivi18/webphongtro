import React, { useEffect } from "react";
import { Button, Item } from "../../components";
import { GetPosts, GetPostsLimit } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
const List = ({ categoryCode }) => {
  const [seachParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  
  useEffect(() => {
    let params = [];
    for (let entry of seachParams.entries()) {
      params.push(entry);
    }
    let searchParamsObject = {};
    params?.forEach((i) => {
      if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
        searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
      } else {
        searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
      }
    });
    if (categoryCode) searchParamsObject.categoryCode = categoryCode;
    console.log(searchParamsObject);
    dispatch(GetPostsLimit(searchParamsObject));
  }, [seachParams, categoryCode]);

  return (
    <div className="w-full p-2 bg-white shadow-md rounded-md px-6">
      <div className="flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold"> Danh Sách Tin Đăng</h4>
        <span> ngay gio</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>sap xep</span>
        <Button bgColor="bg-gray-200" text="Mặc định" />
        <Button bgColor="bg-gray-200" text="Mới đăng" />
      </div>
      <div className="items">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                image={JSON.parse(item?.image?.images)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
                id={item?.id}
              />
            );
          })}
      </div>
    </div>
  );
};
export default List;
