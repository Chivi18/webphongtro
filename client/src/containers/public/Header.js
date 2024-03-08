import { React, useCallback, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../ultils/Icons";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { path } from "../../ultils/Constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const { AiOutlinePlusCircle } = icons;

const Header = () => {
  const headerref = useRef();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    headerref.current.scrollIntoView({behavior:'smooth',block:'start'});
  }, [searchParams.get("page")]);
  const navgate = useNavigate();
  const dispatch = useDispatch();
  const goLogin = useCallback((flag) => {
    navgate(path.LOGIN, { state: { flag } });
  });
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div ref={headerref} className="w-3/5">
      <div className="w-full flex items-center justify-between ">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-[70px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-1 ">
          {!isLoggedIn && (
            <div className="flex items-center gap-1 ">
              <small>phong trọ 123 xin chào</small>
              <Button
                text={"Đăng nhập"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(false)}
              />
              <Button
                text={"Đăng ký"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(true)}
              />
            </div>
          )}

          {isLoggedIn && (
            <div className="flex items-center gap-1 ">
              <small>ten</small>
              <Button
                text={"Đăng xuất "}
                textColor="text-white"
                bgColor="bg-red-700"
                onClick={() => dispatch(actions.logout())}
              />
            </div>
          )}
          <Button
            text={"Đăng tin mới"}
            textColor="text-white"
            bgColor="bg-secondary2"
            IcAfter={AiOutlinePlusCircle}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
