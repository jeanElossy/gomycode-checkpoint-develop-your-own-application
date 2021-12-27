import React from 'react';

import { Routes, Route } from 'react-router-dom';

// import Header from "./components/Header";
import Home from './pages/Home';
import Vetements from './pages/Vetements';
import NotFound from './pages/NotFound';
// import Footer from './components/Footer';
import Categories from './pages/Categories';
import UniqueProduit from './pages/UniqueProduit';
// import HeaderConnect from './components/HeaderConnect';
import Profil from './pages/Profil';
import Password from './pages/Password';
import Command from './pages/Command';


const App = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/vetements" element={<Vetements />} />
				<Route exact path="/categories" element={<Categories />} />
				<Route exact path="/details" element={<UniqueProduit />} />
				<Route exact path="/profil" element={<Profil />} />
				<Route exact path="/password" element={<Password />} />
				<Route exact path="/command" element={<Command />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
