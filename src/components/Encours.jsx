import React from 'react';
import { NavLink } from 'react-router-dom';
// import Command from '../pages/Command';
import HeaderConnect from './HeaderConnect';
import Footer from '../components/Footer';

const Encours = () => {
	return (
		<div className="encours mt-3">

			<HeaderConnect />

			<div className="container p-3 contains">
				<div className="row">
					<div className="coordonnees col-12 col-md-3">
						<h1 className="h5">
							<NavLink to="/profil">
								<span>Profil</span>
							</NavLink>
						</h1>
						<h1 className="h5">
							<NavLink to="/password">
								<span>Changer de mot de passe</span>
							</NavLink>
						</h1>
						<h1 className="h5">
							<NavLink to="/command">
								<span className="active">Mes commandes</span>
							</NavLink>
						</h1>
					</div>

					<div className="col-12 col-md-9">
						<h2 className="h4 mb-4">Mes commandes</h2>

						<div className="container-fluid">
							<div className="row">
								<div className="nav-button ms-3 col-12">
									<NavLink to="/encours">
										<button className="btn btn-primary">Commande(s) en cours</button>
									</NavLink>

									<NavLink to="/effectuees">
										<button className="btn btn-2">Commandes effectuées</button>
									</NavLink>
								</div>

								<div className="content">
																	
								</div>
							</div>
						</div>

						
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Encours;
