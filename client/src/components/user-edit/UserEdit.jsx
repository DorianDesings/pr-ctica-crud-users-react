import { useState } from 'react';
import { resetCrud, updateUser } from '../../utils/api';
import { StyledEdit } from './styles';

const UserEdit = ({ user, dispatchUserStatus, setFetchInfo }) => {
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
				onClick={() =>
					updateUser(user.userId, userInfo, setFetchInfo, dispatchUserStatus)
				}
			>
				SAVE CHANGES
			</button>
			<button onClick={() => resetCrud(dispatchUserStatus)}>CANCEL</button>
		</StyledEdit>
	);
};

export default UserEdit;
