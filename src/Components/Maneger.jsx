import DashboardLayout from "./DashboardLayout";
import { Outlet } from 'react-router-dom';

export default function Maneger(){
    return(
        <DashboardLayout>
            <Outlet/>
        </DashboardLayout>
    )
}