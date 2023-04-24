import { getUserById } from '../../utils/api';
import {
	StyledName,
	StyledUser,
	StyledUserImage,
	StyledUserInfo,
	StyledUserOptions,
	StyledUsername
} from './styles';

const User = ({ user, setCurrentUser, setEditUser, setDeleteUser }) => {
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
					onClick={() => handleShowDetails(user, setCurrentUser, setEditUser)}
				>
					Show Details
				</button>
				<button
					onClick={() =>
						handleEditUser(user, setCurrentUser, setEditUser, setDeleteUser)
					}
				>
					Edit
				</button>
				<button
					onClick={() =>
						handleDeleteUser(user, setCurrentUser, setEditUser, setDeleteUser)
					}
				>
					Delete
				</button>
			</StyledUserOptions>
		</StyledUser>
	);
};

const handleShowDetails = (user, setCurrentUser, setEditUser) => {
	setCurrentUser(user);
	setEditUser(false);
	getUserById(user.userId);
};

const handleDeleteUser = (user, setCurrentUser, setEditUser, setDeleteUser) => {
	setCurrentUser(user);
	setEditUser(false);
	setDeleteUser(true);
};

const handleEditUser = (user, setCurrentUser, setEditUser, setDeleteUser) => {
	setCurrentUser(user);
	setEditUser(true);
	setDeleteUser(false);
};

export default User;
