import React, { useState } from 'react';
import Encours from '../components/Encours';
import Effectuees from '../components/Effectuees';

const Command = () => {
	const [ stateOnglets, setStateOnglets ] = useState(1);

	return (
		<div className="command">
			<div className="container p-3 contains">
				<div className="row">
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
		</div>
	);
};

export default Command;
