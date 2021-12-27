import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Prod from '../components/Prod';
import { FiShoppingBag } from 'react-icons/fi';

const UniqueProduit = () => {
	return (
		<div className="details">
			<Header />

			<div className="container mb-4">
				<div className="row">
					<div className="product col-12 col-md-7 d-flex flex-column align-items-center">
						<div className="img">
							<img src="./medias/jupe.png" alt="jupe" />
						</div>
						<div className="row justify-content-center gap-4">
							<div className="card col-12 col-md-3">
								<img src="./medias/jupe.png" alt="jupe" />
							</div>
							<div className="card col-12 col-md-3">
								<img src="./medias/jupe.png" alt="jupe" />
							</div>
							<div className="card col-12 col-md-3">
								<img src="./medias/jupe.png" alt="jupe" />
							</div>
						</div>
					</div>
					<div className="detail--product col-12 col-md-5 mt-5">
						<h1 className="h3">
							<strong>Jupe volante</strong>
						</h1>
						<div className="h2">
							<strong>3000 F / Unité</strong>
						</div>
						<p className="mt-2">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut aspernatur voluptates modi
							consequatur voluptatem, tempora maxime nostrum{' '}
						</p>

						<div className="my-4">
							<em>Vente en gros à partir de 7 unités</em>
						</div>

						<div className="btn d-flex gap-2 mt-3">
							<button>
								<FiShoppingBag /> {''} Ajouter au panier
							</button>
							<button>Acheter</button>
						</div>
					</div>
				</div>
			</div>

			<div className="container mt-5 bg-light">
				<div className="row">
					<h1 className="h4 my-5">
						<strong>Articles connexes</strong>
					</h1>

					<div className="connexes">
						<Prod />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default UniqueProduit;
