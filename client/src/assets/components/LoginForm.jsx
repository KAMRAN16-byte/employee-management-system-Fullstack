import React, {useState} from 'react'
import Logintemplate from "./Logintemplate.jsx";
import {Link} from "react-router-dom";
import {ArrowLeftIcon, EyeIcon, EyeOffIcon, Loader2Icon} from "lucide-react";

const LoginForm = ({role,title,subtitle}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <Logintemplate />
        <div className='flex-1 flex items-center justify-center z-50 backdrop-blur-sm px-4'>
            <div className="w-full max-w-md animate-fade-in">
                <Link to='/login' className={'group inline-flex items-center gap-2 text-white/80 md:text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors'}>
                    <ArrowLeftIcon className={"transition-transform group-hover:-translate-x-1"} size={20} /> Back to Portals
                </Link>

                <div className={'mb-8'}>
                    <h1 className={'text-2xl sm:text-3xl font-medium text-white/80 md:text-zinc-800'}>{title}</h1>
                    <p className={'text-white/80 md:text-slate-500  text-sm sm:text-base mt-2'}>{subtitle}</p>
                </div>

                {error && (
                    <div className={'mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3'}>
                        <div className={'w-1.5 h-1.5 rounded-full bg-rose-500 mtt-1.5 shrink-0'}/>
                        {error}
                    </div>
                )}
                <form className={'space-y-5'} onSubmit={handleSubmit}>
                    <div>
                        <label className={'block text-sm font-medium text-white/80 md:text-slate-700 mb-2'}>Email address</label>
                        <input type = 'email' value={email} onChange={(e) =>  setEmail(e.target.value)} required placeholder={'john@example.com'} className={'bg-black/50 md:bg-white backdrop-blur-2xl text-white/80 md:text-black md:border-black/40 border-white/20 '}/>
                    </div>
                    <div>
                        <label className={'block text-sm font-medium text-slate-700 mb-2'}>Password</label>
                        <div className={'relative'}>
                            <input type = {showPassword ? 'text' : 'password'} placeholder={'••••••••'} value={password} onChange={ (e) => setPassword(e.target.value)} required={true} className={'pr-11 bg-black/50 md:bg-white backdrop-blur-2xl text-white/80 md:text-black md:border-black/40 border-white/20'}/>
                            <button type={"button"} className={'absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-600 hover:scale-110 transition-all '} onClick={toggleShowPassword}>
                                {showPassword ?  <EyeOffIcon size={18}/> : <EyeIcon size={18}/>}
                            </button>
                        </div>

                    </div>
                    <button type={'submit'} disabled={loading} className={'w-full py-3 mt-10 bg-linear-to-r from-[#111827] via-[#0f172a] to-[#0f3d5b] text-white rounded-md text-sm font-semibold hover:from-[#111827] hover:via-[#0f3d5b] hover:to-[#ff6b3d] disabled:opacity-50 transition-all duration-1000 shadow-lg shadow-red-500/20 md:shadow-none active:scale-[.95] flex items-center justify-center'}>
                        {loading && <Loader2Icon size={20} className={"animate-spin h-4 w-4 mr-2"}/> }
                        Sign in
                    </button>

                </form>


            </div>
        </div>
    </div>
  )
}

export default LoginForm
