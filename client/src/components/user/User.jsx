import { getUserById } from '../../utils/api';
import {
	StyledName,
	StyledUser,
	StyledUserImage,
	StyledUserInfo,
	StyledUserOptions,
	StyledUsername
} from './styles';

const User = ({ user, setCurrentUser, setEditUser }) => {
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
				<button onClick={() => handleClick(user, setCurrentUser, setEditUser)}>
					Show Details
				</button>
				<button onClick={() => setEditUser(true)}>Edit</button>
				<button>Delete</button>
			</StyledUserOptions>
		</StyledUser>
	);
};

const handleClick = (user, setCurrentUser, setEditUser) => {
	setCurrentUser(user);
	setEditUser(false);
	getUserById(user.userId);
};

export default User;
