import React from 'react';

import Prod from '../components/Prod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Panier from '../components/Panier';

const Accessoires = () => {
	return (
		<div className="accessoires">
			<Header />

			<div className="container cont">
				<div className="row">
					<div className="overlay" />
					<h1 className="h2 text-white">Accessoires</h1>
				</div>
			</div>

			<Panier />

			<div className="container mt-5">
				<div className="row">
					<Prod className="prod" />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Accessoires;
