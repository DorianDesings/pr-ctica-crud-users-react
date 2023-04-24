import { useEffect, useState } from 'react';
import { getAllUsers } from '../../utils/api';
import User from '../user/User';

const UsersList = ({ dispatchUserStatus }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	return (
		<div>
			<button
				onClick={() =>
					dispatchUserStatus({ type: 'CREATE', payload: { currentUser: null } })
				}
			>
				Create New User
			</button>
			{users.map(user => (
				<User
					key={user.userId}
					user={user}
					dispatchUserStatus={dispatchUserStatus}
				/>
			))}
		</div>
	);
};

export default UsersList;
