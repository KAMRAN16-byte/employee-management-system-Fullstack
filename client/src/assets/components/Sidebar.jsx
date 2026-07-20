import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {dummyProfileData} from "../assets.jsx";
import {CrosshairIcon, MenuIcon, X} from "lucide-react";

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

    const sidebarContent = (
        <>
            {/* Brand Header */}

        </>
    );

    return (
        <>
            {/* Mobile Menu Button*/}
            <button onClick={() => toggleMenu(!mobileOpen)} className={`lg:hidden fixed top-4 left-4 z-60 p-2 ${mobileOpen ? 'bg-white/80' : 'bg-black/15'} backdrop-blur-md text-black rounded-lg shadow-lg border border-white/20 active:scale-85 transition-all duration-200`}>
                    {mobileOpen ? <X size={20}/> : <MenuIcon size={20}/>}
            </button>


            {/* Mobile Overlay */}
            {mobileOpen && <div className={'lg:hidden fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 animate-fade-in'} onClick={ () => toggleMenu(false)} />}

            {/* Sidebar - desktop */}
            <aside className={"hidden lg:flex flex-col h-full w-65 bg-linear-to-b from-slate-900 via-slate-600 to-slate-950 text-white shrink-0 border-r border-white/4"}>
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