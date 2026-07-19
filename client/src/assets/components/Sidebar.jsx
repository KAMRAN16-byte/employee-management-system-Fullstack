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

    return (
        <>
            {/* Mobile Menu Button*/}
            <button onClick={() => toggleMenu(!mobileOpen)} className={'lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/15 text-black rounded-lg shadow-lg border border-white/20 active:scale-85 transition-transform duration-150'}>
                {mobileOpen ? <X size={20}/> : <MenuIcon size={20}/>}
            </button>

            {/* Mobile Overlay */}
            {mobileOpen && <div className={'lg:hidden fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40'} onClick={ () => toggleMenu(false)} />}

        </>
    );
};

export default Sidebar;