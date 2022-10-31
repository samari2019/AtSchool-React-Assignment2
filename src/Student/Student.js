import { useLocation, useNavigate } from "react-router-dom";

const Student = ({ number }) => {
    const { pathname } = useLocation();


    const navigate = useNavigate();

    return (
        <>
            <li
                className="student__item"
                onClick={() => navigate(`${pathname}/${number}`)}
            >
                Student {number}
            </li>
        </>
    );
};
export default Student;