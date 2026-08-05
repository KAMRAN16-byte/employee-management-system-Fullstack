import React, {useCallback, useEffect, useState} from "react";
import {dummyEmployeeData, DEPARTMENTS,} from "../assets.jsx";
import Loading from "../components/Loading.jsx";
import {Search, X} from "lucide-react";
import Employeecard from "../components/Employeecard.jsx";
import EmployeeForm from "../components/EmployeeForm.jsx";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectDepartment, setSelectDepartment] = useState("");
    const [editEmployee, setEditEmployee] = useState(null);
    const [showCreateModel, setShowCreateModel] = useState(false);

    const toggleCreateModel = () => {
        setShowCreateModel(!showCreateModel);
    }

    const fetchEmployees = useCallback(async () => {
            setLoading(true);
            setEmployees(dummyEmployeeData.filter((emp) => (selectDepartment ? emp.department === selectDepartment : emp)))
            setTimeout(()=>{
                setLoading(false);
            }, 1000);
    }, [])
    useEffect(() => {
        fetchEmployees();
    },[])

    const filtered = employees.filter((emp) => `${emp.firstName} ${emp.lastName} ${emp.department}`.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
        <div className={'animate-fade-in'}>
            {/* Header */}
            <div className={'flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'}>
                <div>
                    <h1 className={'page-title'}>
                        Employees
                    </h1>
                    <p className={'page-subtitle'}>
                        Manage your team members
                    </p>
                </div>
                <button className={'btn-primary flex items-center gap-2 w-full sm:w-auto justify-center'} onClick={toggleCreateModel}>
                        Add Employee
                </button>
            </div>

            {/* search bar */}
            <div className={'flex flex-col sm:flex-row gap-3 mb-6'}>
                <div className={'relative flex-1'}>
                    <Search className={'absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4'}/>
                    <input type={'text'} placeholder={'Search employees...'}
                    className={'w-full pl-10'} onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}/>
                </div>
                <select value={selectDepartment} className={'max-w-40'} onChange={(e) => setSelectDepartment(e.target.value)}>
                    <option value={''}>All Departments</option>
                    {DEPARTMENTS.map((department) => (
                        <option value={department}>{department}</option>
                    ))}

                </select>

            </div>

            {/* Employee cards */}
            {loading ? (
                <Loading />
            )   : <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5'}>
                {
                    filtered.length === 0 ? (
                        <p className={'col-span-full text-center py-16 text-primary-600 bg-white rounded-2xl border border-dashed border-primary-500'}>:( No employees found</p>
                    ) : (
                        filtered.map(
                            (employee) => (<Employeecard key={employee.id}  employee={employee} onDelete={fetchEmployees} onEdit={(e) => setEditEmployee((e))}/>)
                        )
                    )
                }
            </div>}

            {showCreateModel && (<div className={'fixed inset-0 bg-black/20 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto'} onClick={toggleCreateModel}>
                <div className={'fixed inset-0'}/>
                <div className={'relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 animate-fade-in'} onClick={(e) => e.stopPropagation()}>
                    <div className={'flex items-center justify-between p-6 pb-0'}>
                        <div>
                            <h2 className={'text-lg font-semibold text-slate-900'}>
                                New Employee
                            </h2>
                            <p className={'text-sm text-slate-500 mt-0.5'}>
                                Create a user account and employee profile
                            </p>
                        </div>
                            <button className={'p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-rose-600'}>
                                <X className={'w-5 h-5'} onClick={toggleCreateModel} />
                            </button>
                    </div>
                    <div className={'p-6'}>
                        <EmployeeForm  onSucess={
                            ()=>{
                                setShowCreateModel(null);
                                fetchEmployees();
                            }
                        } onCancel={
                            ()=> setShowCreateModel(null)
                        }
                        />
                    </div>
                </div>
            </div>)}


            {editEmployee && (<div className={'fixed inset-0 bg-black/20 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto'} onClick={() => setEditEmployee(null)}>
                    <div className={'fixed inset-0'}/>
                    <div className={'relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 animate-fade-in'} onClick={(e) => e.stopPropagation()}>
                        <div className={'flex items-center justify-between p-6 pb-0'}>
                            <div>
                                <h2 className={'text-lg font-semibold text-slate-900'}>
                                    Edit Employee
                                </h2>
                                <p className={'text-sm text-slate-500 mt-0.5'}>
                                    Update employee details
                                </p>
                            </div>
                            <button className={'p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-rose-600'}>
                                <X className={'w-5 h-5'} onClick={() => setEditEmployee(null)} />
                            </button>
                        </div>
                        <div className={'p-6'}>
                            <EmployeeForm intialData={editEmployee} onSucess={
                                ()=>{
                                    setEditEmployee(null);
                                    fetchEmployees();
                                }
                            } onCancel={
                                ()=> setEditEmployee(null)
                            }
                            />
                        </div>


                    </div>
                </div>)}

        </div>
    )
}

export default Employees
