import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sitem } from "./index";
import * as actions from "../store/actions";

const RelatePost = () => {
  const { newPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.GetNewPost());
  }, []);
  return (
    <div className="w-full bg-white rounded-md p-4">
      <h3 className="font-semibold text-lg">tin mới đăng</h3>
      {newPost?.map((item) => {
        return (
          <Sitem
            key={item.id}
            title={item?.title}
            price={item?.attributes?.price}
            creatAt={item?.createdAt}
            image={JSON.parse(item?.image?.images)}
          />
          
        );
        
      })}
      
      
    </div>
  );
};
export default RelatePost;
