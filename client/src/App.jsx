import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginLanding from "./assets/pages/LoginLanding";
import Layout from "./assets/pages/Layout";
import Dashboard from "./assets/pages/Dashboard";
import Employees from "./assets/pages/Employees";
import Attendance from "./assets/pages/Attendance";
import Leave from "./assets/pages/Leave";
import Payslips from "./assets/pages/Payslips";
import Settings from "./assets/pages/Settings";
import PrintPayslip from "./assets/pages/PrintPayslip";
import LoginForm from "./assets/components/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        <Route path="/login/admin" element={<LoginForm role = "admin" title="Admin Portal" subtitle="Sign in to manage the organization"/>} />
        <Route path="/login/employee" element={<LoginForm role = "employee" title="Employee Login" subtitle="Sign in to access your employee portal"/>} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslip/:id" element={<PrintPayslip />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  )
}

export default App
