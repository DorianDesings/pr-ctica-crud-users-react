import styled from 'styled-components';

const StyledUser = styled.div`
	display: flex;
	align-items: center;
	width: 600px;
	padding: 0.5rem;
	margin-bottom: 1rem;
	border-radius: 1rem;
	box-shadow: 2px 2px 4px rgb(0 0 0 / 0.3);
`;

const StyledUserInfo = styled.div`
	display: flex;
	align-items: center;
	width: 250px;
	margin-right: auto;
`;

const StyledUserImage = styled.img`
	width: 50px;
	margin-right: 1rem;
	border: 2px solid;
	border-radius: 50%;
`;

const StyledName = styled.h3`
	margin: 0;
	margin-bottom: 0.25rem;
	font-size: 1.2rem;
`;

const StyledUsername = styled.p`
	margin: 0;
	font-size: 0.9rem;
`;

const StyledUserOptions = styled.div`
	margin-left: auto;
`;

export {
	StyledUser,
	StyledUserInfo,
	StyledUserImage,
	StyledName,
	StyledUsername,
	StyledUserOptions
};
