import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Vetements from './pages/Vetements';
import NotFound from './pages/NotFound';
import Categories from './pages/Categories';
import UniqueProduit from './pages/UniqueProduit';
import Livraison from './components/Livraison';
import Onglets from './components/Onglets';

const App = () => {


	
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/vetements" element={<Vetements />} />
				<Route exact path="/categories" element={<Categories />} />
				<Route exact path="/details" element={<UniqueProduit />} />
				<Route exact path="/profil" element={<Onglets />} />

				<Route exact path="/livraison" element={<Livraison />} />
				
				
				

				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
