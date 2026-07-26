import {assets, dummyAdminDashboardData, dummyEmployeeDashboardData} from "../assets.jsx";
import {useEffect, useState} from "react";
import Loading from "../components/Loading.jsx";
import EmployeeDashboard from "../components/EmployeeDashboard.jsx";
import AdminDashboard from "../components/AdminDashboard.jsx";

const Dashboard = () => {
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData(dummyEmployeeDashboardData)
        setLoading(true)
        setTimeout(()=>{
            setLoading(false);
        },3000)
    }, []);

    if(loading) return (<Loading />);
    if(data.role === "ADMIN") return (
        <div className={'flex-1 flex flex-col h-full'}>
            <AdminDashboard data={data} />
        </div>
    )
    else return (
        <div className={'flex-1 flex flex-col h-full'}>
            <EmployeeDashboard data={data} />
        </div>

    )
}

export default Dashboard
