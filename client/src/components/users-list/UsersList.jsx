import { useEffect, useState } from 'react';
import { getAllUsers } from '../../utils/api';
import User from '../user/User';

const UsersList = ({
	setCurrentUser,
	setCreateUser,
	setEditUser,
	setDeleteUser
}) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	return (
		<div>
			<button
				onClick={() =>
					handleCreateUser(
						setCurrentUser,
						setCreateUser,
						setEditUser,
						setDeleteUser
					)
				}
			>
				Create New User
			</button>
			{users.map(user => (
				<User
					key={user.userId}
					user={user}
					setCurrentUser={() => setCurrentUser(user)}
					setEditUser={setEditUser}
					setDeleteUser={setDeleteUser}
				/>
			))}
		</div>
	);
};

const handleCreateUser = (
	setCurrentUser,
	setCreateUser,
	setEditUser,
	setDeleteUser
) => {
	setCurrentUser(null);
	setCreateUser(true);
	setEditUser(false);
	setDeleteUser(false);
};

export default UsersList;
