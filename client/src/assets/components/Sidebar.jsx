import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { assets, dummyProfileData } from "../assets.jsx";
import { MenuIcon, X } from "lucide-react";

const Sidebar = () => {
    const {pathname} = useLocation();
    const [userName, setUserName] = useState("");
    const [mobileOpen , setMobileOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);

    },[])
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const toggleMenu = (value) => {
        setMobileOpen(value);
    }

    // eslint-disable-next-line no-constant-binary-expression
    const role = "" || "Employee";

    const sidebarContent = (
        <>
            {/* Brand Header */}
            <div className={'px-5 pt-6 pb-5 border-white/6'}>
                <div className={'flex items-center justify-between'}>
                    <div className={'flex items-center gap-3'}>
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


            {/* Navigation List */}


            {/* Logout */}



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
            <aside className={"hidden lg:flex flex-col h-full w-65 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4"}>
                {sidebarContent}
            </aside>

            {/* Sidebar - Mobile */}
            <aside className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform
            duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {sidebarContent}
            </aside>





        </>
    );
};

export default Sidebar;