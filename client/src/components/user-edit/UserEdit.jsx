import { useState } from 'react';

const UserEdit = ({ user, setEditUser }) => {
	const [userInfo, setUserInfo] = useState(user);
	console.log(userInfo);
	return (
		<div>
			<h2>Edit User</h2>
			<div>
				<label htmlFor='name'></label>
				<input
					type='text'
					id='name'
					value={userInfo.name}
					onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
				/>
			</div>
			<button onClick={() => setEditUser(false)}>SAVE CHANGES</button>
			<button onClick={() => setEditUser(false)}>CANCEL</button>
		</div>
	);
};

export default UserEdit;
