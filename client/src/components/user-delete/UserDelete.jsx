const UserDelete = ({ user, setDeleteUser }) => {
	return (
		<div>
			<h2>are you sure you want to delete {user.name}</h2>
			<button onClick={() => setDeleteUser(false)}>Cancel</button>
			<button>Delete</button>
		</div>
	);
};

export default UserDelete;
