import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register";
import Test from "../pages/test/Test.jsx";

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthorizedRoute />}>
                {/* <Route index element={<>Home View</>}/> */}
                <Route index element={<Test/>}/>
                <Route path="account">
                    <Route index element={<>Account View</>}/>
                    <Route path="addresses" element={<>Manage Addresses View</>}/>
                </Route>
                <Route path="appointments" element={<AuthorizedRoute roles={["Clinician", "Receptionist", "Patient"]} all={false}/>}>
                    <Route index element={<>Manage Appointments View</>}/>
                    <Route path="request" element={<>Request Appointment View</>}/>
                    <Route path="pending" element={<AuthorizedRoute roles={["Receptionist"]} all={true}/>}>
                        <Route index element={<>Pending Appointments View</>}/>
                    </Route>
                    <Route path=":appointmentId">
                        <Route index element={<>Appointment Details View</>}/>
                        <Route path="reschedule" element={<>Reschedule Appointment View</>}/>
                        <Route path="visit" element={<AuthorizedRoute roles={["Clinician"]} all={true}/>}>
                            <Route index element={<>Appointment Visit View</>} />
                        </Route>
                    </Route>
                </Route>
                <Route path="records" element={<AuthorizedRoute roles={["Clinician", "Patient"]} all={false}/>}>
                    <Route index element={<>Medical Records View</>}/>
                    <Route path=":recordId">
                        <Route index element={<>Medical Record Details View</>}/>
                        <Route path="edit" element={<>Edit Medical Record View</>}/>
                    </Route>
                </Route>
                <Route path="logs" element={<AuthorizedRoute roles={["Administrator"]} all={true}/>}>
                    <Route index element={<>Logs View</>}/>
                    <Route path=":logId" element={<>Log Details View</>}/>
                    <Route path=":userId">
                        <Route path="of" element={<>Logs OF This Users' Medical Records View</>}/>
                        <Route path="by" element={<>Logs BY This Users' Medical Records View</>}/>
                        <Route path="records">
                            <Route index element={<>Logs of Medical Records of This User View</>}/>
                            <Route path=":recordId" element={<>Logs of This Medical Record View</>}/>
                        </Route>
                    </Route>
                </Route>
                <Route path="patients" element={<AuthorizedRoute roles={["Administrator", "Clinician", "Receptionist"]} all={false}/>}>
                    <Route index element={<>Search Patients View</>}/>
                    <Route path=":patientId" element={<AuthorizedRoute roles={["Clinician", "Receptionist"]} all={false}/>}>
                        <Route index element={<>Patient Details View</>}/>
                        <Route path="appointments" element={<>Past and Upcoming Appointments for Patient View</>}/>
                        <Route path="records" element={<AuthorizedRoute roles={["Clinician"]} all={false}/>}>
                            <Route index element={<>Medical Records of Patient View</>}/>
                        </Route>
                    </Route>
                </Route>
                <Route path="users" element={<AuthorizedRoute roles={["Administrator"]} all={true}/>}>
                    <Route index element={<>Search Users View</>}/>
                    <Route path=":userId" element={<>User Details View</>}/>
                    <Route path="new" element={<>Create New Employee View</>}/>
                </Route>
            </Route>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="*" element={<p>Whoops, nothing here...</p>}/>
        </Routes>
    );
}

export default ApplicationViews
