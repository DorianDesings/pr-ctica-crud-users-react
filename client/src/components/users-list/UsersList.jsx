import User from '../user/User';

const UsersList = ({ dispatchUserStatus, users }) => {
	return (
		<div>
			<button
				onClick={() =>
					dispatchUserStatus({ type: 'CREATE', payload: { currentUser: null } })
				}
			>
				Create New User
			</button>
			{users.length > 0 &&
				users.map(user => (
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
