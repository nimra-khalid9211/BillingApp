import { TbReportSearch } from "react-icons/tb";
import BreadCrumbs from "../../UI/BreadCrumbs";
import AllReports from "./allReports";

export default function Reports(){
    return(
        <>
        <BreadCrumbs
        menu="Reports"
        icon={<TbReportSearch />}
        />
        <AllReports/>
        </>
    )
}