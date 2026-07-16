import React, {useState} from 'react'
import Logintemplate from "./Logintemplate.jsx";
import {Link} from "react-router-dom";
import {ArrowLeftIcon} from "lucide-react";

const LoginForm = ({role,title,subtitle}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <Logintemplate />
        <div className='flex-1 flex items-center justify-center'>
            <div className="w-full max-w-md animate-fade-in">
                <Link to='/login' className={'group inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors'}>
                    <ArrowLeftIcon className={"transition-transform group-hover:-translate-x-1"} size={20} /> Back to Portals
                </Link>

                <div className={'mb-8'}>
                    <h1 className={'text-2xl sm:text-3xl font-medium text-zinc-800'}>{title}</h1>
                    <p className={'text-slate-500  text-sm sm:text-base mt-2'}>{subtitle}</p>
                </div>

                {error && (
                    <div className={'mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3'}>
                        <div className={'w-1.5 h-1.5 rounded-full bg-rose-500 mtt-1.5 shrink-0'}/>
                        {error}
                    </div>
                )}
                <form className={'space-y-5'} onSubmit={handleSubmit}>
                    <div>
                        <label className={'block text-sm font-medium text-slate-700 mb-2'}>Email address</label>
                        <input type = 'email' value={email} onChange={(e) =>  setEmail(e.target.value)} required placeholder={'john@example.com'}/>
                    </div>
                    <div>
                        <label className={'block text-sm font-medium text-slate-700 mb-2'}>Password</label>
                        <input type = {showPassword ? 'text' : 'password'} placeholder={'••••••••'} value={password} onChange={ (e) => setPassword(e.target.value)} required={true} className={'pr-11'}/>
                        <button></button>
                    </div>
                </form>


            </div>
        </div>
    </div>
  )
}

export default LoginForm
