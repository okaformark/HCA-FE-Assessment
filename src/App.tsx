import AppBar from './components/appBar';
import Hero from './components/hero';
import NavBar from './components/navbar';
import Specialties from './components/specialties';
import { SelectedLettersProvider } from './context';
import Letter from './components/letter';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
	return (
		<main className='max-w-[1280] mx-auto bg-gray-200 min-h-svh '>
			<NavBar />
			<AppBar />
			<SelectedLettersProvider>
				<Hero />
				<Specialties />
				<Letter />
			</SelectedLettersProvider>
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
