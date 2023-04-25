import { METHODS } from '../../constants/methods';

const UserDelete = ({ user, dispatchUserStatus, setFetchInfo }) => {
	return (
		<div>
			<h2>are you sure you want to delete {user.name}</h2>
			<button onClick={() => handleCancel(dispatchUserStatus)}>Cancel</button>
			<button
				onClick={() =>
					handleDelete(user.userId, setFetchInfo, dispatchUserStatus)
				}
			>
				Delete
			</button>
		</div>
	);
};

const handleCancel = dispatchUserStatus => {
	dispatchUserStatus({ type: 'CREATE', payload: { currentUser: null } });
};

const handleDelete = async (userId, setFetchInfo, dispatchUserStatus) => {
	setFetchInfo({
		url: `http://127.0.0.1:3000/api/users/${userId}`,
		method: METHODS.DELETE
	});
	handleCancel(dispatchUserStatus);
};

export default UserDelete;
