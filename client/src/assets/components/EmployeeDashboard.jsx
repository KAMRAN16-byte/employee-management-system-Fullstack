import React from 'react'
import {assets} from "../assets.jsx";
import {Link} from "react-router-dom";
import {ArrowRightIcon} from "lucide-react";

const EmployeeDashboard = ({data}) => {
    const emp = data.employee;

    const cards = [
        {
            icon:assets.AttendanceIconRed,
            value: data.currentMonthAttendance,
            title: "Days Present",
            subtitle: "This month",
        },
        {
            icon: assets.LeaveIconRed,
            value: data.pendingLeaves,
            title: "Pending Leaves",
            subtitle: "Awaiting approval",
        },
        {
            icon: assets.PayslipsIconRed,
            value: data.latestPayslip ? `\u20B9${data.latestPayslip.netSalary?.toLocaleString()}` : "N/A",
            title: "latest Payslip",
            subtitle: "Most recent payout",
        },
    ]
    return (
        <div className={'animate-fade-in'}>
            <div className={'page-header'}>
                <h1 className={'page-title'}>
                        Welcome, {emp?.firstName}!
                </h1>
                <p className={'page-subtitle'}>
                    {emp?.position} - {emp?.department}
                </p>
            </div>
            <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 mb-8'}>
                {cards.map((card, index) => (
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
                            <img src={card.icon} alt={card.subtitle} className={'w-25 h-25 lg:h-25 lg:w-25'} />
                        </div>
                    </div>
                    )
                )}
            </div>
            <div className={'flex flex-col sm:flex-row gap-4 mb-10'}>

                <Link to={'/attendance'} className={'group btn-primary text-center inline-flex items-center justify-center gap-3'}>
                    Mark Attendance <ArrowRightIcon size={15}  className={'group-hover:translate-x-1 transition-transform duration-200'}/>
                </Link>

                <Link to={'/leave'} className={'group btn-secondary inline-flex items-center justify-center gap-3'}>
                Apply Leave <ArrowRightIcon size={15}
                className={'group-hover:translate-x-1 transition-transform duration-200'}/>
                </Link>
            </div>
        </div>
    );
};

export default EmployeeDashboard;