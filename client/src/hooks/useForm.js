import { useState } from 'react';
import { generateRandomImage } from '../utils/random-image';

export const useForm = () => {
	const [userInfo, setUserInfo] = useState({
		name: undefined,
		title: undefined,
		age: undefined,
		username: undefined,
		email: undefined,
		gender: 'men',
		profileImage: undefined
	});

	const saveFormData = (field, value) => {
		setUserInfo({ ...userInfo, [field]: value });
	};

	const setNewProfileImage = () => {
		const newProfileImage = generateRandomImage(userInfo.gender);
		setUserInfo({
			...userInfo,
			profileImage: newProfileImage
		});
	};

	return { userInfo, saveFormData, setNewProfileImage };
};
