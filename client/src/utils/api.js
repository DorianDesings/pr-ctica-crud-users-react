import { METHODS } from '../constants/methods';
import { fetchData } from './fetchData';

export const getAllUsers = async setUsers => {
	const data = await fetchData('http://127.0.0.1:3000/api/users', {
		method: METHODS.GET
	});
	setUsers(data);
};

export const createUser = async (newUser, setUsers) => {
	const data = await fetchData(`http://127.0.0.1:3000/api/users/`, {
		method: METHODS.POST,
		body: JSON.stringify(newUser),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

	setUsers(data);
};

export const updateUser = async (userId, newData, setUsers) => {
	const data = await fetchData(`http://127.0.0.1:3000/api/users/${userId}`, {
		method: METHODS.PATCH,
		body: JSON.stringify(newData),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

	console.log(data);

	setUsers(data);
};

export const deleteUser = async (userId, setUsers) => {
	const data = await fetchData(`http://127.0.0.1:3000/api/users/${userId}`, {
		method: METHODS.DELETE
	});

	setUsers(data);
};
