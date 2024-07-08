import React, { useState } from "react";
import Logo from "../../assets/image/brandlogo.png";
import menuList from "./menuList";
import { Link, useLocation } from "react-router-dom";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";

const LeftSideBar = () => {
  
  const path = useLocation().pathname;
  const{checkVerfication} = _BillingCondition();

  return (
    <div
      className="rounded-r-[50px] left-sidebar-shadow "
      style={{ height: "100vh" }}
    >
      <div className="px-5 pt-5 flex justify-center items-center ">
        <img src={Logo} className="w-44 h-[74px]" />
      </div>

      <section>
        {menuList.map((item, index) => (
          <div key={index} className="px-4 pt-5 text-lg ">
            <ul>
              <div>
                {/* className='flex items-center gap-4' */}

                {item.icon && item.icon}
                <span> {item.name} </span>
              </div>

              {item.lists?.map((x, index) => (
                <Link to={checkVerfication ? x.link : "/dashboard"} key={index} >
                  <div
                    className={`flex items-center gap-3 px-3  text-[#6C7293] py-2 mx-3 my-6 ${
                      x.classses && x.classses
                    }
                    ${
                    checkVerfication ? "" :  "opacity-50 pointer-events-none" // Disable styles
                    }
                     hover:bg-[#588fed] hover:text-white rounded-lg ${
                      path.includes(x.link) ? "bg-[#377CF6] text-white" : ""
                    }`}
                  >
                    <div className="hover-stroke-white"> {x.icon}</div>
                    {x.title}
                  </div>
                </Link>
              ))}

            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LeftSideBar;
