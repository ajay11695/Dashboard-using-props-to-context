import { useContext } from 'react';
import { UserContext } from './UserContext';


export default function Card() {
	let { state } = useContext(UserContext);
	return (
		<div className="card">
			<div className="card-info">
				<img src={state.userInfo.avatarURL} alt="Avatar" style={{ width: "50%", height: "50%" }} />
				<h4>
					<b>{state.userInfo.name}</b>
				</h4>
			</div>
			<p>{state.userInfo.description}</p>
		</div>
	);
}
