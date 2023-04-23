import styled from 'styled-components';

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	justify-items: center;
	padding: 2rem;
	border: 1px solid black;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
`;

export { StyledMain };
