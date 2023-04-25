import { deleteUser } from '../../utils/api';

const UserDelete = ({ user, dispatchUserStatus, setUsers }) => {
	return (
		<div>
			<h2>are you sure you want to delete {user.name}</h2>
			<button onClick={() => handleCancel(dispatchUserStatus)}>Cancel</button>
			<button
				onClick={() => handleDelete(user.userId, setUsers, dispatchUserStatus)}
			>
				Delete
			</button>
		</div>
	);
};

const handleCancel = dispatchUserStatus => {
	dispatchUserStatus({ type: 'CREATE', payload: { currentUser: null } });
};

const handleDelete = async (userId, setUsers, dispatchUserStatus) => {
	await deleteUser(userId, setUsers);
	handleCancel(dispatchUserStatus);
};

export default UserDelete;
