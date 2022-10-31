import { Route, Routes } from "react-router-dom";
import StudentDetails from "./StudentDetails";
import Student from "./Students";

const StudentHome = (props) => {
    return (
        <>
            <Routes>
                <Route path="" element={<Student />} /> {}
                <Route path=":book_id" element={<StudentDetails />} /> {}
            </Routes>
        </>
    );
};
export default StudentHome;