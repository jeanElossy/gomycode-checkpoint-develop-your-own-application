import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderConnect from '../components/HeaderConnect';
import Footer from '../components/Footer';
import Encours from '../components/Encours';
import Effectuees from '../components/Effectuees';

const Command = () => {
	const [ stateOnglets, setStateOnglets ] = useState(1);

	return (
		<div className="command">
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

						<div className="nav-button d-flex gap-3">
							<div
								className={stateOnglets === 1 ? 'onglets text-center onglets--active' : ' '}
								onClick={(e) => setStateOnglets(1)}
							>
								Commande(s) en cours
							</div>
							<div
								className={stateOnglets === 2 ? 'onglets text-center onglets--active' : ' '}
								onClick={(e) => setStateOnglets(2)}
							>
								Commandes effectuées
							</div>
						</div>

						<div className="contenu ">{stateOnglets === 1 ? <Encours /> : <Effectuees />}</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Command;
