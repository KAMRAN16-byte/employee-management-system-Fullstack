import React from 'react';
import Logintemplate from '../components/Logintemplate';
import { ShieldIcon, UserIcon, ArrowRightIcon } from "lucide-react";
import { Link } from 'react-router-dom';
const LoginLanding = () => {
  const portals = [
    {
      to: '/login/admin',
      title: 'Admin Portal',
      subtitle: 'Sign in to manage the organization',
      icon: ShieldIcon
    },
    {
      to: '/login/employee',
      title: 'Employee Portal',
      subtitle: 'Sign in to access your employee portal',
      icon: UserIcon
    }
  ]
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <Logintemplate />
      <div className='w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen'>
        <div className='w-full max-w-md animate-fade-in'>
          {/* Header */}
          <div className='mb-10 text-center md:text-left'>
            <h2 className='text-3xl font-medium text-slate-900 tracking-tight mb-3'>Welcome Back</h2>
            <p className='text-slate-500'>Select a portal to continue</p>
          </div>

          {/* Portals List */}
          <div className='space-y-4'>
            {portals.map((portal) => (
              <Link key={portal.to} to={portal.to} className="group block bg-neutral-200 border border-neutral-300 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:bg-primary-950/5">
                <div className = "relative z-10 flex items-center justify-between gap-4 sm:gap-5">
                  <h3 className="text-lg text-slate-800 group-hover:text-primary-800 mb-1 trasition-colors">{portal.title} </h3>
                  <ArrowRightIcon className = "w-4 h-4 text-neutral-400 group-hover:text-primary-800 group-hover:translate-x-1 transition-all duration-300"/> 
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}

          <div className = "mt-10 text-center  md:text-left text-sm text-slate-500">
              <p>© {new Date().getFullYear()} Kam.Codex. All rights reserved.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginLanding
