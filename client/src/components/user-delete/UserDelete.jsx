const UserDelete = ({ user, dispatchUserStatus }) => {
	return (
		<div>
			<h2>are you sure you want to delete {user.name}</h2>
			<button
				onClick={() =>
					dispatchUserStatus({ type: 'CREATE', payload: { currentUser: null } })
				}
			>
				Cancel
			</button>
			<button>Delete</button>
		</div>
	);
};

export default UserDelete;
