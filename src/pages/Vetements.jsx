import React from 'react';
import Contains from '../components/Contains';

import Prod from '../components/Prod';
import Header from "../components/Header";
import Footer from '../components/Footer';
import Panier from '../components/Panier';

// import Panier from '../components/Panier';

const Vetements = () => {
	return (
		<div className="vetements">
			
			<Header />

			<Contains />
			
			<Panier />

			<div className="container">
				<div className="row">
					<Prod className="prod" />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Vetements;
