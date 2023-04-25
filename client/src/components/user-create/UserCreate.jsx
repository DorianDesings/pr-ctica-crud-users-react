import { useState } from 'react';

const UserCreate = () => {
	const [userInfo, setUserInfo] = useState({
		name: undefined,
		title: undefined,
		age: undefined,
		username: undefined,
		email: undefined,
		gender: 'men',
		profileImage: undefined
	});

	console.log(userInfo);
	return (
		<div>
			<h2>Create User</h2>
			<form onSubmit={e => e.preventDefault()}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						id='name'
						onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
					/>
				</div>
				<div>
					{userInfo.profileImage && (
						<img src={userInfo.profileImage} alt='profile image' />
					)}
					<div>
						<label htmlFor='men'>Man</label>
						<input
							type='radio'
							name='gender'
							id='men'
							value='men'
							defaultChecked
							onChange={e =>
								setUserInfo({ ...userInfo, gender: e.target.value })
							}
						/>
						<label htmlFor='women'>Woman</label>
						<input
							type='radio'
							name='gender'
							id='women'
							value='women'
							onChange={e =>
								setUserInfo({ ...userInfo, gender: e.target.value })
							}
						/>
					</div>
					<button onClick={() => generateRandomImage(userInfo, setUserInfo)}>
						Generate Image
					</button>
				</div>
			</form>
		</div>
	);
};

const generateRandomImage = (userInfo, setUserInfo) => {
	const { gender } = userInfo;
	const randomNumber = Math.floor(Math.random() * 99);
	setUserInfo({
		...userInfo,
		profileImage: `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`
	});
};

export default UserCreate;
