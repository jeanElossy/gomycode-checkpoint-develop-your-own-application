import React from 'react';
import { useState } from 'react';

const Encours = () => {
	const [ show, setShow ] = useState(false);

	return (
		<div className="encours">
			<div className="container">
				<div className="row mt-3">
					<div className="info--command col-12 col-md-6 ">
						<h1 className="h6 my-3">Commande n°23583741</h1>
						<div>
							<p>1 article</p>
							<p>Effectuée le 25-12-2021</p>
							<p>Total: 3000 FCFA</p>
						</div>

						<button className="btn" onClick={(e) => setShow(true)}>
							Détails
						</button>
					</div>

					<div className="info--article col-12 col-md-6 ">
						<div className="img">
							<img src="./medias/jupe.png" alt="jupe" width="100" height="100" />
						</div>
						<div className="donne mt-2">
							<p>Annulée</p>
							<p>
								<strong>Le samedi, 25-12-2021</strong>
							</p>
						</div>
					</div>
				</div>

				<div className={show ? 'show--content' : 'details--content'}>
					<div className="over--content row justify-content-center gap-3">
						<div className="d-flex justify-content-between p-3">
							<h1 className="h5">Détails</h1>
							<div className="btn-close" onClick={(e) => setShow(false)} />
						</div>

						<div className="card col-12 col-md-5">
							<strong>Paiement</strong>
							<div className="mt-3 card-content">
								<div>
									<p>
										<strong>Méthode de paiement</strong>
									</p>
									<p>Paiement cash à la livraison</p>
								</div>
								<div>
									<p>
										<strong>Détails du paiement</strong>
									</p>
									<p>Sous total: 3000 FCFA</p>
									<p>Frais de livraison: 1,100 FCFA</p>
									<p>Total: 4,100 FCFA</p>
								</div>
							</div>
						</div>
						<div className="card col-12 col-md-5">
							<strong>Livraison</strong>
							<div className="mt-3 card-content">
								<div>
									<p>
										<strong>Méthode de Livraison</strong>
									</p>
									<p>Livraison standard</p>
								</div>
								<div>
									<p>
										<strong>Addresse de livraison</strong>
									</p>
									<p>Jean Elossy</p>
									<p>Abidjan</p>
									<p>Cocody, Angré Abidjan-lagunes</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Encours;
