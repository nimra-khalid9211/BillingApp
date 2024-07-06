import React from "react";
import { BlueButton, WhiteButton } from "./Buttons";

const BreadCrumbs = ({
  icon,
  menu,
  subMenu,
  btnTitle1,
  btnIcon1,
  btnIcon2,
  btnTitle2,
  btnEvent1,
  btnEvent2,
  customClass
  
}) => {
  return (
    <div className="my-8 border-b pb-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center ml-5">
          <span className="text-[#009EF7]">{icon}</span> &nbsp;{" "}
          {/* static for now will dynamic it when icons for all menu items change */}
          <b className="text-[#009EF7]">{menu}</b> &nbsp;
          {subMenu && <span className="text-[#6C7293]">/</span>} &nbsp;
          <b className="text-[#6C7293]">{subMenu}</b>
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
