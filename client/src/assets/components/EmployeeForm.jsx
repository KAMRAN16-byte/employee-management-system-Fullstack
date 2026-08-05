import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {DEPARTMENTS} from "../assets.jsx";

const EmployeeForm = ({intialData, onSucess, onCancel}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const isEditMode = !!intialData;
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const [selectDepartment, setSelectDepartment] = useState('');

    return (
        <form onSubmit={handleSubmit} className={'space-y-6 max-2-3xl animate-fade-in'}>
            {/* personal information */}
            <div className={'card p-5 sm:p-6'}>
                <h3 className={'font-medium mb-6 pb-6 border-b border-slate-100'}>Personal Information</h3>
                <div className={'grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-900'}>
                    <div>
                        <label className={'block mb-2'}>
                            First Name
                        </label>
                        <input name={'firstname'} required={true} type={'text'} defaultValue={intialData?.firstName}/>
                    </div>
                    <div>
                        <label className={'block mb-2'}>
                            Last Name
                        </label>
                        <input name={'lastname'} required={true} type={'text'} defaultValue={intialData?.lastName}/>
                    </div>
                    <div>
                        <label className={'block mb-2'}>
                            Phone Number
                        </label>
                        <input name={'phone'} required={true}  defaultValue={intialData?.phone}/>
                    </div>
                    <div >
                        <label className={'block mb-2'}>
                            Join Date
                        </label>
                        <input type={'date'} name={'joinDate'} defaultValue={intialData?.joinDate ? new Date(intialData.joinDate).toISOString().split('T')[0] : ''}
                        />
                    </div>
                    <div className={'col-span-2'}>
                        <label className={'block mb-2'}>
                            Bio (Optional)
                        </label>
                        <textarea name={'bio'} rows={3} defaultValue={intialData?.bio} className={'resize-none'} placeholder={'Brief Description...'}/>
                    </div>
                </div>
            </div>
            <div className={'card p-5 sm:p-6'}>
                <h3 className={'text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100'}>
                    Employment Details
                </h3>
                <div className={'grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-900'}>
                    <div>
                        <label className={'block mb-2'}>Department</label>
                        <select value={selectDepartment}  onChange={(e) => setSelectDepartment(e.target.value)}>
                            <option value={''}>All Departments</option>
                            {DEPARTMENTS.map((department) => (
                                <option value={department}>{department}</option>
                            ))}
                        </select>
                    </div>
                    

                </div>

            </div>

        </form>
    );
};

export default EmployeeForm;