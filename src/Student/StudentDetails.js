import { useParams } from "react-router-dom";

const StudentDetails = () => {
    const { student_id } = useParams();

    const student = [1, 2, 3, 4, 5];

    const students = student.find((student) => student === Number(student_id));

    return <div className="student__details">This is a Student database {students}</div>;
};
export default StudentDetails;