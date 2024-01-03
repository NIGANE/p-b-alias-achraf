import "./User.css";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VscAccount } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { userActions } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { show } from "./../../store/loginPop";
import { ErrorPage } from "./../index";

const User = () => {
  const [ss, setSs] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userinfo);
  const signed = useSelector((state) => state.user.signed);
  useEffect(()=>{
    if (!signed) {
        dispatch(show());
      }
  },[dispatch,signed])
  
  const list = useRef();
  const chooseHandler = (e) => {
    let arr = list.current.children;
    for (const listItem of Object.values(arr)) {
      if (listItem.classList) {
        listItem.classList.remove("active");
      }
    }
    e.target.classList.add("active");
    setSs(!ss);
  };
  const logoutHandler = () => {
    dispatch(userActions.logout());
    navigate("/");
  };
  return (
    <>
      {signed ? (
        <div className=" flex justify-center pt-[8rem] pb-[4rem] bg-gradient-to-r from-[#4b6cb7]  to-[#182848] ">
          <div className="bg-white py-[1rem] px-[1rem] mx-[1rem] shadow overflow-hidden sm:rounded-lg flex flex-row justify-center">
            <div className="border-r-[2px] border-slate-400 pr-1 mr-1">
              <div>
                <h3 className="text-2xl font-semibold ">Account Center</h3>
                <p className="leading-[1.2] mt-2">
                  Manage your connected experiences and account settings.
                </p>
              </div>
              <div>
                <ul className="select" ref={list}>
                  <li className="active" onClick={chooseHandler}>
                    {" "}
                    <VscAccount /> Personal Details
                  </li>
                  <li onClick={chooseHandler}>
                    <MdPayment /> Payments{" "}
                  </li>
                  <li onClick={logoutHandler}>
                    <LuLogOut /> Logout{" "}
                  </li>
                </ul>
              </div>
            </div>
            {ss ? (
              <div className="">
                <div className="border-t border-gray-200">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      User database
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Details and informations about user.
                    </p>
                  </div>
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.name.toUpperCase()}
                      </dd>
                    </div>

                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.email.toUpperCase()}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        About
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        To get social media testimonials like these, keep your
                        customers engaged with your social media accounts by
                        posting regularly yourself
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ) : (
              <div>
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    User database
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about user.
                  </p>
                </div>
                <dt className="text-sm font-medium text-gray-500">
                        There's No Payment Assigned
                </dt>
              </div>
            )}
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default User;
