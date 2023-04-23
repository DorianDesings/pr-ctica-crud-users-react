import { useEffect, useState } from 'react';
import { getAllUsers } from '../../utils/api';
import User from '../user/User';

const UsersList = ({ setCurrentUser, setEditUser }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	return (
		<div>
			{users.map(user => (
				<User
					key={user.userId}
					user={user}
					setCurrentUser={() => setCurrentUser(user)}
					setEditUser={setEditUser}
				/>
			))}
		</div>
	);
};

export default UsersList;
