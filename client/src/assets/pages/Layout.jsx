import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar.jsx";

const Layout = () => {
  return (
    <div className='flex h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30'>
        <Sidebar />
      <main className='flex-1 overflow-y-auto '>
        <div className='flex-1 flex p-5 pt-16 sm:p-6 sm:pt-6 lg:p-8 max-w-400 mx-auto h-full'>
            <div className={'flex-1 sm:ml-10 lg:ml-0'}>
                <Outlet />
            </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
