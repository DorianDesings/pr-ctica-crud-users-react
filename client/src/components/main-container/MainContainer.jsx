import { useEffect, useReducer, useState } from 'react';
import {
	USER_LIST_INITIAL_STATE,
	userListReducer
} from '../../reducers/user-list-reducer';
import { getAllUsers } from '../../utils/api';
import UserCreate from '../user-create/UserCreate';
import UserDelete from '../user-delete/UserDelete';
import UserDetails from '../user-details/UserDetails';
import UserEdit from '../user-edit/UserEdit';
import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const MainContainer = () => {
	const [userStatus, dispatchUserStatus] = useReducer(
		userListReducer,
		USER_LIST_INITIAL_STATE
	);

	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>USERS CRUD REACT</h1>

			<StyledMain>
				<UsersList dispatchUserStatus={dispatchUserStatus} users={users} />

				{userStatus.mode === 'DETAILS' && (
					<UserDetails
						user={userStatus.currentUser}
						setEditUser={dispatchUserStatus}
					/>
				)}

				{userStatus.mode === 'CREATE' && <UserCreate setUsers={setUsers} />}

				{userStatus.mode === 'EDIT' && (
					<UserEdit
						user={userStatus.currentUser}
						dispatchUserStatus={dispatchUserStatus}
						setUsers={setUsers}
					/>
				)}

				{userStatus.mode === 'DELETE' && (
					<UserDelete
						user={userStatus.currentUser}
						dispatchUserStatus={dispatchUserStatus}
						setUsers={setUsers}
					/>
				)}
			</StyledMain>
		</>
	);
};

export default MainContainer;
