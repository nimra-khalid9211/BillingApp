import React from "react";
import { BlueButton, WhiteButton } from "./Buttons";
import { _BillingCondition } from "../actions/Context/BillingOverviewConditions";
import { Link } from "react-router-dom";

const BreadCrumbs = ({
  icon,
  menu,
  link,
  subMenu,
  thirdMenu,
  btnTitle1,
  btnIcon1,
  btnIcon2,
  btnTitle2,
  btnEvent1,
  btnEvent2,
  customClass
  
}) => {

  const {checkVerfication} = _BillingCondition()

  return (
    <div className="my-8 border-b pb-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center text-lg font-bold">
          <span className={checkVerfication ? "text-[#009EF7]" : 'text-[#6C7293]'}>{icon}</span> &nbsp;{" "}
          {/* static for now will dynamic it when icons for all menu items change */}
        
          <Link to={link}>
          <b className={checkVerfication ? "text-[#009EF7]" : 'text-[#6C7293]'}>{menu}</b> &nbsp;
          </Link>

          {subMenu && <span className="text-[#6C7293]">/</span>} &nbsp;
          <b className="text-[#6C7293]">{subMenu}</b> &nbsp;

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
              title={btnTitle2}
              icon={btnIcon2}
              clickEvent={btnEvent2}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
