import { useReducer } from 'react';
import {
	USER_LIST_INITIAL_STATE,
	userListReducer
} from '../../reducers/user-list-reducer';
import UserCreate from '../user-create/UserCreate';
import UserDelete from '../user-delete/UserDelete';
import UserDetails from '../user-details/UserDetails';
import UserEdit from '../user-edit/UserEdit';
import UsersList from '../users-list/UsersList';
import { StyledMain } from './styles';

const MainContainer = () => {
	// const [currentUser, setCurrentUser] = useState(null);
	// const [editUser, setEditUser] = useState(false);
	// const [createUser, setCreateUser] = useState(true);
	// const [deleteUser, setDeleteUser] = useState(false);

	const [userStatus, dispatchUserStatus] = useReducer(
		userListReducer,
		USER_LIST_INITIAL_STATE
	);

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>USERS CRUD REACT</h1>

			<StyledMain>
				<UsersList dispatchUserStatus={dispatchUserStatus} />

				{userStatus.mode === 'DETAILS' && (
					<UserDetails
						user={userStatus.currentUser}
						setEditUser={dispatchUserStatus}
					/>
				)}

				{userStatus.mode === 'CREATE' && <UserCreate />}

				{userStatus.mode === 'EDIT' && (
					<UserEdit
						user={userStatus.currentUser}
						setEditUser={dispatchUserStatus}
					/>
				)}

				{userStatus.mode === 'DELETE' && (
					<UserDelete
						user={userStatus.currentUser}
						dispatchUserStatus={dispatchUserStatus}
					/>
				)}
			</StyledMain>
		</>
	);
};

export default MainContainer;
