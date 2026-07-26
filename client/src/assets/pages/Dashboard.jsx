import {assets, dummyAdminDashboardData, dummyEmployeeDashboardData} from "../assets.jsx";
import {useEffect, useState} from "react";
import Loading from "../components/Loading.jsx";
import EmployeeDashboard from "../components/EmployeeDashboard.jsx";

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
            <div className={'p-4 mb-5 flex-1 border'}>
                <h2 className={'text-2xl font-semibold text-slate-900 '}>
                    Dashboard
                </h2>
                <p>
                    Manage your system
                </p>
                <p>Hello Admin!</p>
            </div>
        </div>

    )
    else return (
        <div className={'flex-1 flex flex-col h-full sm:ml-10 lg:ml-0'}>
            <EmployeeDashboard data={data} />
        </div>

    )
}

export default Dashboard
