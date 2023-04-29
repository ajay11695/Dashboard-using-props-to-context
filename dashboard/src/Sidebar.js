import { NavLink } from "react-router-dom";
import UserInfo from "./UserInfo";
import { useContext } from 'react';
import { UserContext } from './UserContext';

function Sidebar() {
  let { userInfo,isLogin } = useContext(UserContext);
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active" exact='true'>
            <i className="lni lni-home"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" activeclassname="active">
            <i className="lni lni-text-format"></i>
            <span>Articles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" activeclassname="active">
            <i className="lni lni-users"></i>
            <span>People</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            <i className="lni lni-phone"></i>
            <span>Contact</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/help" activeclassname="active">
            <i className="lni lni-support"></i>
            <span>Help & Support</span>
          </NavLink>
        </li>
      </ul>

      {isLogin && (
        <div className="bg">
          <UserInfo data={userInfo} />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
