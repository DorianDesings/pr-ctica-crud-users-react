import { StyledDetails, StyledProfileImage } from './styles';

const UserDetails = ({ user }) => {
	return (
		<StyledDetails>
			<StyledProfileImage src={user.profileImage} alt='' />
			<h2>
				{user.title} {user.name}
			</h2>
			<p>@{user.username}</p>
			<p>Status: {user.active ? 'Active' : 'Inactive'}</p>
		</StyledDetails>
	);
};

export default UserDetails;
