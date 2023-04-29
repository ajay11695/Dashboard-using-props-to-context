import { useContext } from 'react';
import { UserContext } from './UserContext';
export default function UserInfo() {
  let {state}=useContext(UserContext);
  return (
    <div className="user-info">
      <img
        className="user-avatar"
        src={state.userInfo.avatarURL}
        width="50"
        height="50"
        alt="User Avatar"
      />
      <p>{state.userInfo.name}</p>
    </div>
  );
}
