import { React, useEffect } from "react";
import Header from "./Header";
import {Outlet} from 'react-router-dom'
import {Navigation,Search}  from "./index";
import { Contact, Intro } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { apiGetCurrent } from "../../services/user";

const Home = () => {
  const Dispatch = useDispatch();
  const {isLoggedIn}=useSelector(state=>state.auth)
  
  useEffect(()=>{
    const fetchCurrent=async()=>{
      const response=await apiGetCurrent()
      console.log(response);
      
    }
    isLoggedIn&& fetchCurrent()
  },[isLoggedIn])

  useEffect(() => {
    Dispatch(actions.GetPrices());
    Dispatch(actions.GetArea());
    Dispatch(actions.GetProvince());

  }, []);
  return (
    <div className="w-full  flex flex-col gap-6 items-center h-full ">
      <Header />
      <Navigation/>
      {isLoggedIn && <Search/>}
      <div className='w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3'>
          <Outlet/>
      </div>
      <Intro/>
      <Contact/>
    </div>
  );
};
export default Home;
