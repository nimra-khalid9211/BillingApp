import { TbReportSearch } from "react-icons/tb";
import BreadCrumbs from "../../UI/BreadCrumbs";
import AllReports from "./allReports";
import {blueReport} from '../../assets/image/index'

export default function Reports(){
    return(
        <>
        <BreadCrumbs
        menu="Reports"
        icon={blueReport}
        />
        <AllReports/>
        </>
    )
}