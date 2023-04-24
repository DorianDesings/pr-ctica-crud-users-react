import { useState } from 'react';
import UserCreate from '../user-create/UserCreate';
import UserDelete from '../user-delete/UserDelete';
import UserDetails from '../user-details/UserDetails';
import UserEdit from '../user-edit/UserEdit';
import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const MainContainer = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const [editUser, setEditUser] = useState(false);
	const [createUser, setCreateUser] = useState(true);
	const [deleteUser, setDeleteUser] = useState(false);
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>USERS CRUD REACT</h1>

			<StyledMain>
				<UsersList
					setCurrentUser={setCurrentUser}
					setEditUser={setEditUser}
					setDeleteUser={setDeleteUser}
					setCreateUser={setCreateUser}
				/>

				{currentUser && !editUser && !deleteUser && (
					<UserDetails user={currentUser} setEditUser={setEditUser} />
				)}

				{!currentUser && createUser && !editUser && !deleteUser && (
					<UserCreate />
				)}

				{editUser && <UserEdit user={currentUser} setEditUser={setEditUser} />}

				{deleteUser && (
					<UserDelete user={currentUser} setDeleteUser={setDeleteUser} />
				)}
			</StyledMain>
		</>
	);
};

export default MainContainer;
