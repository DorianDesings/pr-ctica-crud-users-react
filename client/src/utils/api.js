import { METHODS } from '../constants/methods';
import { URL_BASE } from '../constants/urls';
import { fetchData } from './fetchData';

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
};

export const getAllUsers = async setUsers => {
	const data = await fetchData('http://127.0.0.1:3000/api/users', {
		method: METHODS.GET
	});
	setUsers(data);
};

export const createUser = (userInfo, setFetchInfo, dispatchUserStatus) => {
	setFetchInfo({
		url: `${URL_BASE}`,
		body: JSON.stringify(userInfo),
		method: METHODS.POST,
		headers
	});
	resetCrud(dispatchUserStatus);
};

export const updateUser = (
	userId,
	userInfo,
	setFetchInfo,
	dispatchUserStatus
) => {
	setFetchInfo({
		url: `${URL_BASE}${userId}`,
		body: JSON.stringify(userInfo),
		method: METHODS.PATCH,
		headers
	});

	resetCrud(dispatchUserStatus);
};

export const deleteUser = async (userId, setFetchInfo, dispatchUserStatus) => {
	setFetchInfo({
		url: `${URL_BASE}${userId}`,
		method: METHODS.DELETE
	});
	resetCrud(dispatchUserStatus);
};

export const resetCrud = dispatchUserStatus => {
	dispatchUserStatus({ type: 'CREATE', payload: { currentUser: null } });
};
