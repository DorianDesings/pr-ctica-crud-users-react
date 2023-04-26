import { deleteUser, resetCrud } from '../../utils/api';

const UserDelete = ({ user, dispatchUserStatus, setFetchInfo }) => {
	return (
		<div>
			<h2>are you sure you want to delete {user.name}</h2>
			<button onClick={() => resetCrud(dispatchUserStatus)}>Cancel</button>
			<button
				onClick={() =>
					deleteUser(user.userId, setFetchInfo, dispatchUserStatus)
				}
			>
				Delete
			</button>
		</div>
	);
};

export default UserDelete;
