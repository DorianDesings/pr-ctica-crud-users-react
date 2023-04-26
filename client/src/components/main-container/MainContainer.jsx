import { useReducer, useState } from 'react';
import { USER_STATUS_ACTIONS } from '../../actions/user-status.actions';
import { METHODS } from '../../constants/methods';
import useFetch from '../../hooks/useFetch';
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
	const [userStatus, dispatchUserStatus] = useReducer(
		userListReducer,
		USER_LIST_INITIAL_STATE
	);

	const [fetchInfo, setFetchInfo] = useState({
		url: 'http://127.0.0.1:3000/api/users',
		method: METHODS.GET,
		headers: undefined
	});

	const { data, loading, error } = useFetch(fetchInfo.url, { ...fetchInfo });

	if (loading && !error) return <h2>Loading CRUD...</h2>;

	if (error) return <h2>Somethig wrong!!</h2>;

	return (
		<>
			<StyledMain>
				<UsersList dispatchUserStatus={dispatchUserStatus} users={data} />

				{userStatus.mode === USER_STATUS_ACTIONS.DETAILS && (
					<UserDetails
						user={userStatus.currentUser}
						dispatchUserStatus={dispatchUserStatus}
					/>
				)}

				{userStatus.mode === USER_STATUS_ACTIONS.CREATE && (
					<UserCreate
						setFetchInfo={setFetchInfo}
						dispatchUserStatus={dispatchUserStatus}
					/>
				)}

				{userStatus.mode === USER_STATUS_ACTIONS.EDIT && (
					<UserEdit
						user={userStatus.currentUser}
						dispatchUserStatus={dispatchUserStatus}
						setFetchInfo={setFetchInfo}
					/>
				)}

				{userStatus.mode === USER_STATUS_ACTIONS.DELETE && (
					<UserDelete
						user={userStatus.currentUser}
						dispatchUserStatus={dispatchUserStatus}
						setFetchInfo={setFetchInfo}
					/>
				)}
			</StyledMain>
		</>
	);
};

export default MainContainer;
