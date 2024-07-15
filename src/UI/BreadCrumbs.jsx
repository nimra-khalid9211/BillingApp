import React from "react";
import { BlueButton, WhiteButton } from "./Buttons";
import { _BillingCondition } from "../actions/Context/BillingOverviewConditions";
import { Link } from "react-router-dom";
import menuList from "../Components/DashboardLayout/menuList";

const BreadCrumbs = ({
  icon,
  menu,
  link,
  link2,
  subMenu,
  thirdMenu,
  btnTitle1,
  btnIcon1,
  btnIcon2,
  btnTitle2,
  btnEvent1,
  btnEvent2,
  customClass,
  customClass2,
  customStyle
}) => {

  const {checkVerfication} = _BillingCondition()

  return (

    <div className="my-5 border-b pb-3">

      <div className="flex justify-between items-center">

        <div className="flex items-center text-sm">
          {/* <img className={`w-5 ${checkVerfication ? "text-[#009EF7]" : 'text-[#6C7293]'}`} src={icon} alt="" />
          &nbsp; */}
        
        {/* {checkVerfication ? "text-[#009EF7] pl-1" : 'text-[#6C7293] pl-1'} */}

          <Link to={link}>
          <b className={`${ !checkVerfication || link  ?  "text-[#009EF7] pl-1": "text-[#6C7293] pl-1"}`}>{menu}</b> &nbsp;
          </Link>

          {subMenu &&  <>
           <span className={"text-[#6C7293]"}>/</span> &nbsp;

           <Link to={link2}> 
           <b className={`${link2 ? "text-[#009EF7] pl-1 " : "text-[#6C7293] pl-1"}`}>{subMenu}</b>  &nbsp; 

          </Link> </>}

          {thirdMenu && <span className="text-[#6C7293]">/</span>} &nbsp;
          <b className="text-[#6C7293]">{thirdMenu}</b>
        </div>

        <div>
          {btnTitle1 && (
            <WhiteButton
              title={btnTitle1}
              icon={btnIcon1}
              clickEvent={btnEvent1}
              customClass={customClass}
            />
          )}

          {btnTitle2 && (
            <BlueButton
            customStyle={customStyle}
              title={btnTitle2}
              icon={btnIcon2}
              clickEvent={btnEvent2}
              customClass={customClass2}
            />
          )}
        </div>

      </div>

    </div>

  );
};

export default BreadCrumbs;
