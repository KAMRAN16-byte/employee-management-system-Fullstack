import React from 'react'
import {assets} from "../assets.jsx";

const AdminDashboard = ({data}) => {
    const stats = [
        {
            icon:assets.WorkforceIconRed,
            value: data.totalEmployees,
            title: "Total Employees",
            description: "Active workforce",
        },
        {
            icon:assets.DepartmentIconRed,
            value: data.totalDepartments,
            title: "Departments",
            description: "Organization units",
        },
        {
            icon:assets.AttendanceIconRed,
            value: data.todayAttendance,
            title: "today's Attendance",
            description: "Checked in today",
        },
        {
            icon:assets.LeaveIconRed,
            value: data.pendingLeaves,
            title: "Pending Leaves",
            description: "Awaiting approval",
        },
    ]

    return (
        <div className={'animate-fade-in'}>
            <div className={'page-header'}>
                <h1 className={'page-title'}>
                    Dashboard
                </h1>
                <p className={'page-subtitle'}>
                    Welcome back, Admin!  ━ here's your overview.
                </p>
            </div>
            <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:gap-5 mb-8'}>
                {stats.map((card, index) => (
                        <div key={index} className={'card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between '}>
                            <div>
                                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-500/70 transition-opacity duration-500 group-hover:opacity-0" />

                                    <div className="absolute inset-0 bg-linear-to-b from-[#ef2b16] via-slate-900 to-[#0f3d5b] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>
                                <p className={'text-sm font-medium md:text-lg text-slate-700'}>
                                    {card.title}
                                </p>
                                <p className={'text-2xl font-bold md:text-3xl text-slate-900 mt-1'}>
                                    {card.value}
                                </p>
                            </div>
                            <div>
                                <img src={card.icon} alt={card.description} className={'w-25 h-25 lg:h-25 lg:w-25'} />
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;