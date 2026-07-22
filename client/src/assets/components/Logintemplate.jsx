import React from 'react'
import {assets} from "../assets.jsx";

const Logintemplate = () => {
    return (
        <div className={'md:flex w-1/2 '}>
            <div className={'z-10 absolute '}>
                <img src={assets.BackgroundImage2} className={' min-h-screen  w-full md:w-1/2  object-fill'} />
            </div>
            <div className='hidden md:flex bg-[#0B090A] relative overflow-hidden border-r border-slate-200'>

                <div className="relative z-20 flex flex-col items-start justify-center p-12 lg:p-20 w-full h-full">
                    <h1 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">Employee <br /> Management System</h1>
                    <p className=" bg-primary-950/30 backdrop-blur-xl   text-slate-100 text-lg max-w-lg leading-relaxed w-full pl-2">
                        Streamline your workforce management with our comprehensive Employee Management System. From attendance tracking to payroll processing, our platform simplifies HR tasks, enhances productivity, and empowers your team to focus on what matters most. Experience seamless employee management today.
                    </p>
                </div>


            </div>
        </div>

    )
}

export default Logintemplate
