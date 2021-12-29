import React from 'react';
import { useState } from 'react';
import Profil from '../pages/Profil';
import Password from '../pages/Password';
import Command from '../pages/Command';
import HeaderConnect from '../components/HeaderConnect';

import Footer from '../components/Footer';

const Onglets = () => {

	const [ stateOnglets, setStateOnglets ] = useState(1);

	const verify = () => {
		if (stateOnglets === 1) {
			return <Profil />;
		} else if (stateOnglets === 2) {
			return <Password />;
		} else {
			return <Command />;
		}
	};

	return (
		<div className="onglets">
			<HeaderConnect />
			<div className="container element">
				<div className="row">
					<div className="button col-12 col-md-3">
						<div className={stateOnglets === 1 ? 'ongl--avtive ' : ' '} onClick={(e) => setStateOnglets(1)}>
							Profil
						</div>
						<div className={stateOnglets === 2 ? 'ongl--avtive ' : ' '} onClick={(e) => setStateOnglets(2)}>
							Changer de mot de passe
						</div>
						<div
							className={stateOnglets === 3 ? ' ongl--avtive ' : ' '}
							onClick={(e) => setStateOnglets(3)}
						>
							Mes commandes
						</div>
					</div>

					<div className="contenu col-12 col-md-9">{verify()}</div>
				</div>

				<div className="delete my-5">
					<h3 className="h4">Supprimer votre compte </h3>
					<p>Cette action entrainera la suppression de toute vos données personnelles.</p>
					<button>Supprimer mon compte</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Onglets;
