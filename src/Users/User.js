const User = (props) => {
    return (
        <li className="user_li">
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>

        </li>
    );
};
export default User;