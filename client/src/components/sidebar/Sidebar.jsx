import "./Sidebar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const auth = useSelector((state) => state.auth);
  const { currentUser } = auth;

  return (
    <div>
      <ul className="sidebar">
        <li className="list-item">
          <h6>{currentUser.username}</h6>
        </li>
        <li className="list-item">
          <h5>
            <Link to="/dashboard">Home</Link>
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
