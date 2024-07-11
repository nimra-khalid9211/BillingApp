import React from "react";
import Logo from "../../assets/image/brandlogo.png";
import menuList from "./menuList";
import { Link, useLocation } from "react-router-dom";
import { _BillingCondition } from "../../actions/Context/BillingOverviewConditions";

const LeftSideBar = () => {
  const path = useLocation().pathname;
  const { checkVerfication } = _BillingCondition();

  return (
    <>
      <div
        className="rounded-r-[50px] drop-shadow-lg"
        style={{ height: "100vh" }}
      >
        <div className="px-5 pt-5 flex justify-center items-center">
          <img src={Logo} className="w-36 h-[74px]" />
        </div>

        <section>
          {menuList.map((item, index) => (
            <div key={index} className="px-5 pt-8 text-base">
              <ul>

                {item.lists?.map((x, index) => (

                  <Link
                    to={checkVerfication ? x.link : "/dashboard"}
                    key={index}
                  >

                    <div
                      className={`flex items-center gap-3 px-3 text-[#6C7293] py-[12px] mx-3 my-2 w-[14rem] 
                        ${x.classses && x.classses} 

                        ${ checkVerfication ? "" : "opacity-50 pointer-events-none"} 
                        hover:bg-[var(--primary-color)] hover:text-white rounded-lg 

                        ${ path.includes(x.link) ? "bg-[#377CF6] text-white" : "" }`}>

                      {/* <div> */}
                        {/* {path.includes(x.link) ? (
                          <div className="icon-active">
                            {x.icon1}
                          </div>
                        ) : (
                          <>
                            <div className="normal-icon">{x.icon}</div>
                            <div
                              className="hover-icon"
                              style={{ display: "none" }}
                            >
                              {x.icon1}
                            </div>
                          </>
                        )} */}
                        
                      {/* </div> */}
                      {x.icon}

                      {x.title}

                    </div>

                  </Link>

                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default LeftSideBar;
