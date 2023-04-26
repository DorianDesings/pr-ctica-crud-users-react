import { useForm } from '../../hooks/useForm';
import { createUser, resetCrud } from '../../utils/api';

const UserCreate = ({ dispatchUserStatus, setFetchInfo }) => {
	const { userInfo, saveFormData, setNewProfileImage } = useForm();

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
						onChange={e => saveFormData('name', e.target.value)}
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
							onChange={e => saveFormData('gender', e.target.value)}
						/>
						<label htmlFor='women'>Woman</label>
						<input
							type='radio'
							name='gender'
							id='women'
							value='women'
							onChange={e => saveFormData('gender', e.target.value)}
						/>
					</div>
					<button onClick={setNewProfileImage}>Generate Image</button>
				</div>
			</form>
			<button
				onClick={() => createUser(userInfo, setFetchInfo, dispatchUserStatus)}
			>
				CREATE USER
			</button>
			<button onClick={() => resetCrud(dispatchUserStatus)}>CANCEL</button>
		</div>
	);
};

export default UserCreate;
