import { useState } from 'react';
import UserDetails from '../user-details/UserDetails';
import UserEdit from '../user-edit/UserEdit';
import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const MainContainer = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const [editUser, setEditUser] = useState(false);
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>USERS CRUD REACT</h1>

			<StyledMain>
				<UsersList setCurrentUser={setCurrentUser} setEditUser={setEditUser} />
				{currentUser && !editUser && (
					<UserDetails user={currentUser} setEditUser={setEditUser} />
				)}
				{editUser && <UserEdit user={currentUser} setEditUser={setEditUser} />}
			</StyledMain>
		</>
	);
};

export default MainContainer;
