import { useNavigate } from "react-router-dom";
import RightArrow from "../../assets/image/arrow-right.png";
import Challan from "../../assets/image/challan.png";
import Authlogo from "../../assets/image/authlogo.png"

export default function GovtDepartments() {
  const navigate = useNavigate();

  const handleClick = (title, link , icon) => {
    navigate(link, { state: { componentName: title , componentIcon : icon} });
  };

  const dataList = [
    { title: "Govt E-Challan", icon: Challan, link: "/add-no" },
    { title: "Another Service", icon: Authlogo , link: "/add-no" },
    { title: "Govt E-Challan", icon: Challan, link: "/add-no" },
    { title: "Another Service", icon: Challan, link: "/add-no" },
    { title: "Govt E-Challan", icon: Challan, link: "/add-no" },
    { title: "Another Service", icon: Challan, link: "/add-no" },
    { title: "Govt E-Challan", icon: Challan, link: "/add-no" },
    { title: "Another Service", icon: Challan,link: "/add-no" },
    { title: "Govt E-Challan", icon: Challan, link: "/add-no" }
    // Add more items as needed
  ];
  return (
    <div className="rounded-[3rem] border">
      <div className="bg-[#377CF6] text-white p-3 mb-10 rounded-t-lg">
        Govt Payments
      </div>
      <div className="w-[60%] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {dataList.map((item, index) => (
            <div key={index} onClick={() => handleClick(item.title, item.link, item.icon)}>
              <div className="flex items-center justify-between border border-[#E8E7EC] rounded-2xl px-5 py-7 mb-5">
                <div className="flex items-center">
                  <div className="w-14 h-14">
                    <img
                      className="w-full h-full"
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <div className="ml-2 text-base font-semibold">
                    {item.title}
                  </div>
                </div>
                <div className="w-6 h-3">
                  <img
                    src={RightArrow}
                    className="w-full h-full"
                    alt="Right Arrow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
