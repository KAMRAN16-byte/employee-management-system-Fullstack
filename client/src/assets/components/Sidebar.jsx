import { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import { assets, dummyProfileData } from "../assets.jsx";
import {
    ChevronRightIcon,
    MenuIcon, PanelLeft,
    PanelLeftCloseIcon, PanelLeftOpenIcon,
    X
} from "lucide-react";

const Sidebar = () => {
    const {pathname} = useLocation();
    const [userName, setUserName] = useState("");
    const [mobileOpen , setMobileOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);

    },[])
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileOpen(false);
    }, [pathname]);

    const toggleMenu = (value) => {
        setMobileOpen(value);
    }

    const [openSideMenu, setOpenSideMenu] = useState(true);

    const toggleSideMenu = () => {
        setOpenSideMenu(!openSideMenu);
    }

    // eslint-disable-next-line no-constant-binary-expression
    const role = "" || "Employee";

    const navItems = [
        {name: 'Dashboard', route: '/dashboard', icon: assets.DashboardIcon},
        role === 'ADMIN' ?
            {name: 'Employees', route: '/employees' , icon: assets.EmployeeIcon2} :
            {name: 'Attendance', route: '/attendance' , icon: assets.AttendanceIcon},
        {name: 'Leave', route: '/leave' , icon: assets.LeaveIcon},
        {name: 'Payslips', route: '/payslips' , icon:  assets.PayslipsIcon},
        {name: 'Setting', route: '/settings' , icon:  assets.SettingIcon}
    ]

    const sidebarContent = (
        <>
            {/* Brand Header */}
            <div className={'px-5 pt-6 pb-5 border-white/6'}>
                <div className={'flex items-center justify-between'}>
                    <div className={'flex items-center gap-3 shrink-0'}>
                        <img src={assets.EmployeeIcon} alt={'Employee Image'} className={'size-7 border border-white/20 bg-white/35 backdrop-blur-2xl rounded-xl'} />
                        <div>
                            <p className={'font-semibold text-[13px] text-white tracking-wide'}>
                                Employee MS
                            </p>
                            <p className={'text-[11px] text-slate-500 font-medium'}>
                                Management System
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* User profile card */}
            {userName && (
                <div className={"mx-3 mt-4 mb-1 p-3 rounded-lg bg-white/3 border border-white/4"}>
                    <div className={'flex items-center gap-3'}>
                        <div className={'w-15 h-15 rounded-lg bg-slate-800 flex items-center justify-center ring-1 ring-white/10 shrink-0'}>
                            <img src={assets.MaleEmployeeIcon} alt={"Employee Icon"}/>
                        </div>
                        <div className={'min-w-0'}>
                            <p className={'text-[15px] font-medium text-slate-200 truncate'}>
                                {userName}
                            </p>
                            <p className={'text-[13px] text-slate-500'}>
                                {role === "ADMIN" ? "Administrator" : "Employee"}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Section label */}
            <div className={'px-5 pt-5 pb-2'}>
                <p className={'text-[10px] font-semibold uppercase tracking-[.12em] text-slate-500'}>
                    Navigation
                </p>
            </div>

            {/* Navigation List */}
            <div className={'flex-1 px-3 space-y-0.5 overflow-y-auto overflow-hidden'}>
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.route)
                    return (
                        <Link key={item.name} to={item.route} className={`group flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-all duration-150 relative  ${isActive ? 'bg-white/10 backdrop-blur-2xl rounded-md' : ' text-slate-300 hover:text-white hover:bg-white/4'}`}>
                            {isActive && <div className={'absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-5 rounded-r-full bg-primary-500'} />}
                            <img src={item.icon} alt={item.name} className={'w-5 h-5 shrink-0'}/>
                            <span className={'flex-1'}>
                                {item.name}
                            </span>
                            {isActive && <ChevronRightIcon className={'w-3.5 h-3.5 text-slate-300'} />}
                        </Link>
                    )
                })}

            </div>

            {/* Logout */}
            <div>
                <button>

                </button>
            </div>



        </>
    );

    return (
        <>
            {/* Mobile Menu Button*/}
            <button onClick={() => toggleMenu(!mobileOpen)} className={`lg:hidden fixed top-5 left-4 z-60 p-2 ${mobileOpen ? 'bg-white/80 translate-x-55' : 'bg-black/15 translate-x-0'} backdrop-blur-md text-black rounded-lg shadow-lg border border-white/20 active:scale-85 transition-all duration-200 delay-75`}>
                {mobileOpen ? <X size={20}/> : <MenuIcon size={20}/>}
            </button>


            {/* Mobile Overlay */}
            {mobileOpen && <div className={'lg:hidden fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 animate-fade-in'} onClick={ () => toggleMenu(false)} />}

            {/* Sidebar - desktop */}
            <aside className={`relative hidden lg:flex flex-col h-full bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4  transition-all duration-300 ease-in-out ${openSideMenu ? "w-65 border-r" : "w-5 border-none rounded-r-xl"}`}>
                <div className={`absolute w-0.5  bg-primary-500 transition-all duration-800 ${openSideMenu ? 'h-full': 'h-0'}`}>
                </div>
                <button className={`group absolute top-6 bg-slate-900 rounded-sm transition-all duration-350 ${openSideMenu ? 'left-62' : 'left-2'}`} onClick={ toggleSideMenu }>
                    <PanelLeft size={30}  className={'group-hover:hidden'}/>
                    {openSideMenu ? <PanelLeftCloseIcon  className={'hidden group-hover:block '} size={30}/> : <PanelLeftOpenIcon className={'hidden group-hover:block'} size={30}/> }
                </button>
                <div className={`overflow-hidden ${openSideMenu ? 'opacity-100' : 'opacity-0'} transition-opacity duration-400`}>
                    {sidebarContent}
                </div>

            </aside>

            {/* Sidebar - Mobile */}
            <aside className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform
            duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className={`absolute w-0.5  bg-primary-500 transition-all duration-1000 delay-350 ${mobileOpen ? 'h-full': 'h-0'}`}>
                </div>
                {sidebarContent}
            </aside>





        </>
    );
};

export default Sidebar;