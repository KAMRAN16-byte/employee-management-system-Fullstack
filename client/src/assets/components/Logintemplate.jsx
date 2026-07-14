import React from 'react'

const Logintemplate = () => {
    return (
        <div className='hidden md:flex w-1/2 bg-[#0B090A] relative overflow-hidden border-r border-slate-200'>
            <div className="absolute -top-30 -left-30 w-72 h-72 bg-[#BA181B]/20 rounded-full blur-3xl"></div>
            <div className="absolute top-60 left-30 lg:left-120 w-72 h-72 bg-[#BA181B]/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-start justify-center p-12 lg:p-20 w-full h-full">
                <h1 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">Employee <br /> Management System</h1>
                <p className="text-slate-400 text-lg max-w-lg leading-relaxed w-full">
                    Streamline your workforce management with our comprehensive Employee Management System. From attendance tracking to payroll processing, our platform simplifies HR tasks, enhances productivity, and empowers your team to focus on what matters most. Experience seamless employee management today.
                </p>
            </div>


        </div>
    )
}

export default Logintemplate
