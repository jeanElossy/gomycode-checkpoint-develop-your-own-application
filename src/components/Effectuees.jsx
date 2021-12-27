import React from 'react';

const Effectuees = () => {

	return (
		<div className="effectuees">
			<div className="container content">
				<div className="row mt-3">
					<div className="info--command col-12 col-md-6 ">
						<h1 className="h6 my-3">Commande n°23583741</h1>
						<div>
							<p>1 article</p>
							<p>Effectuée le 25-12-2021</p>
							<p>Total: 3000 FCFA</p>
						</div>
						<button className="btn">Détails</button>
					</div>
					<div className="info--article col-12 col-md-6 ">
						<div className="img">
							<img src="./medias/jupe.png" alt="jupe" width="100" height="100" />
						</div>
						<div className="donne mt-2">
							<p>Effectuées</p>
							<p>
								<strong>Le samedi, 25-12-2021</strong>
							</p>
						</div>
					</div>
				</div>

				
			</div>
		</div>
	);
};

export default Effectuees;
