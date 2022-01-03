import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Vetements from '../../pages/Vetements';
import NotFound from '../../pages/NotFound';
import Categories from '../../pages/Categories';
import UniqueProduit from '../../pages/UniqueProduit';
import Livraison from '../Livraison';
import Onglets from '../Onglets';
import Accessoires from '../Accessoires';
import Chaussures from '../Chaussures';
import Admin from '../../pages/Admin';
import Loader from '../Loader';

const Index = () => {
	const [ loader, setLoarder ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoarder(false);
		}, 2000);
	}, []);

	return loader ? (
		<Loader />
	) : (
		<div>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/vetements" element={<Vetements />} />
				<Route exact path="/categories" element={<Categories />} />
				<Route exact path="/details" element={<UniqueProduit />} />
				<Route exact path="/profil" element={<Onglets />} />

				<Route exact path="/livraison" element={<Livraison />} />
				<Route exact path="/accessoires" element={<Accessoires />} />
				<Route exact path="/chaussures" element={<Chaussures />} />
				<Route exact path="/admin" element={<Admin />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default Index;
