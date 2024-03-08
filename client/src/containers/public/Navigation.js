import React ,{useState,useEffect}from 'react';
import {NavLink} from "react-router-dom"
import {apiGetCategories} from "../../services/category"
import { fomatVietnamesetoString } from '../../ultils/common/fomatVietnamesetoString';
import * as actions from "../../store/actions"
import {useDispatch,useSelector} from "react-redux"

const notAction='hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1'
const action='hover:bg-secondary2 px-4 h-full flex items-center bg-secondary2'

const Navigation=()=>{

    // const [categories, setCategories] = useState([]);
    const dispatch=useDispatch()
    const {categories}=useSelector(state=>state.app)
    useEffect(() => {
       
        dispatch(actions.GetCategories())
    }, []);

   
    return (
        <div className='w-full flex justify-center items-center h-[40px] bg-secondary1 text-white'>
            <div className='w-3/5 flex h-full items-center text-sm font-medium' >
            <NavLink to={"/"} className={({isActive})=>isActive?action:notAction}>
                                Trang Chủ
                            </NavLink>
                {categories?.length>0&&categories.map((item)=>{
                    return(
                        <div key={item.code} className='h-full flex justify-center items-center'>
                            <NavLink to={`${fomatVietnamesetoString(item.value)}`} className={({isActive})=>isActive?action:notAction}>
                                {item.value}
                            </NavLink>
                        </div>
                    )
                })}
              
            </div>
        </div>
    )
}
export default Navigation