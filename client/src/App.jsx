import MainContainer from './components/main-container/MainContainer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<h1 style={{ textAlign: 'center' }}>USERS CRUD REACT</h1>
			<MainContainer />;
		</>
	);
};

export default App;
