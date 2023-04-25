import { useState } from 'react';
import { updateUser } from '../../utils/api';
import { StyledEdit } from './styles';

const UserEdit = ({ user, dispatchUserStatus, setUsers }) => {
	const [userInfo, setUserInfo] = useState(user);
	return (
		<StyledEdit>
			<h2>Edit User</h2>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					value={userInfo.name}
					onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					value={userInfo.username}
					onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='active'>Active</label>
				<input
					type='checkbox'
					id='active'
					checked={userInfo.active}
					onChange={e => setUserInfo({ ...userInfo, active: e.target.checked })}
				/>
			</div>
			<button
				onClick={() => handleSaveNewData(user.userId, userInfo, setUsers)}
			>
				SAVE CHANGES
			</button>
			<button onClick={() => handleCancel(dispatchUserStatus)}>CANCEL</button>
		</StyledEdit>
	);
};

const handleCancel = dispatchUserStatus => {
	dispatchUserStatus({ type: 'CREATE', payload: { currentUser: null } });
};
const handleSaveNewData = async (userId, userInfo, setUsers) => {
	updateUser(userId, userInfo, setUsers);
};

export default UserEdit;
