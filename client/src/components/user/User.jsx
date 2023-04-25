import {
	StyledName,
	StyledUser,
	StyledUserImage,
	StyledUserInfo,
	StyledUserOptions,
	StyledUsername
} from './styles';

const User = ({ user, dispatchUserStatus }) => {
	return (
		<StyledUser>
			<StyledUserInfo>
				<StyledUserImage src={user.profileImage} alt='' />
				<div>
					<StyledName>{user.name}</StyledName>
					<StyledUsername>{user.username}</StyledUsername>
				</div>
			</StyledUserInfo>
			<p>{user.active ? 'Activo' : 'Inactivo'}</p>
			<StyledUserOptions>
				<button
					onClick={() =>
						dispatchUserStatus({
							type: 'DETAILS',
							payload: { user }
						})
					}
				>
					Show Details
				</button>
				<button
					onClick={() =>
						dispatchUserStatus({ type: 'EDIT', payload: { user } })
					}
				>
					Edit
				</button>
				<button
					onClick={() =>
						dispatchUserStatus({
							type: 'DELETE',
							payload: { user }
						})
					}
				>
					Delete
				</button>
			</StyledUserOptions>
		</StyledUser>
	);
};

export default User;
