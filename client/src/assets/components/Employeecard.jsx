import React from 'react'
import {PencilIcon, Trash2Icon} from "lucide-react";
import {dummyEmployeeData} from "../assets.jsx";

const Employeecard = ({employee, onDelete, onEdit}) => {
    const handleDelete = async (employee) => {
        if(confirm("Are you sure you want to delete?")){
            employee.isDeleted = true;
            onDelete();
        }
    }
    return (
        <div className={'group relative card card-hover overflow-hidden'}>
            <div className={'relative aspect-4/3 w-full overflow-hidden bg-linear-to-br from-slate-900 via-slate-900/10 to-[#0f3d5b]/50'}>
                <div className={'w-full h-full flex justify-center items-center'}>
                    <div className={'w-20 h-20 rounded-full bg-linear-to-br from-[#0f3d5b] via-slate-900 to-slate-900 flex items-center justify-center'}>
                        <span className={'text-md font-bold text-slate-100'}>
                            {employee.firstName[0]}{employee.lastName[0]}
                        </span>

                    </div>
                </div>
            </div>
            <div className={'absolute top-3 left-3 flex items-start gap-2'}>
                <span className={'bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-slate-900 rounded-lg shadow-sm'}>
                    {employee.department || 'Remote'}
                </span>
                {employee.isDeleted && <span className={'bg-red-500/60 font-sm text-white px-2.5 py-1 text-sm rounded'}>
                    DELETED
                </span>}
            </div>
            {!employee.isDeleted && (
                <div className={'absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3'}>
                    <button onClick={()=> onEdit(employee)} className={'p-2.5 bg-white/80 backdrop-blur-sm text-slate-700 hover:text-slate-900 rounded-xl shadow-lg transition-all hover:scale-105'}>
                        <PencilIcon className={'w-4 h-4 '} />
                    </button>
                    <button onClick={() => handleDelete(employee)} className={'p-2.5 bg-white/80 backdrop-blur-sm text-slate-700 hover:text-rose-600 rounded-xl shadow-lg transition-all hover:scale-105'}>
                        <Trash2Icon className={'w-4 h-4 '} />
                    </button>
                </div>
            )}
            <div className={'p-5'}>
                <h3 className={'text-slate-900'}>{employee.firstName} {employee.lastName}</h3>
                <p className={'text-xs text-slate-500'}>{employee.position}</p>
            </div>
        </div>
    );
};

export default Employeecard;