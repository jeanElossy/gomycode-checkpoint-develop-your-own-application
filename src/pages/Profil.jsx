import React from 'react';

const Profil = () => {
	return (
		<div className="profil">
			<div className="container p-3 content">
				<div className="row">
					<div className="content__coordonnees col-12 col-md-9">
						<h2 className="h4 mb-4">Profil</h2>

						<div className="contains">
							<form action="" className="form-groups d-flex flex-column gap-4">
								<div className="cadre--border flex-column">
									<div>
										<input type="file" name="myImage" accept="image/*" /> <br />
									
										<label htmlFor="file" className='mt-2'>Veuillez télécharger votre photo de profil ici</label>
									</div>
								</div>
								<div>
									<label htmlFor="nom" className="mb-2">
										Votre nom
									</label>{' '}
									<br />
									<input
										type="text"
										name="nom"
										id="nom"
										placeholder="Votre nom"
										className="form-control "
									/>
								</div>
								<div>
									<label htmlFor="nom" className="mb-2">
										Votre bio
									</label>
									<br />
									<textarea
										name=""
										id=""
										cols="30"
										rows="3"
										placeholder="Dites quelques choses a-propos de vous..."
										className="form-control"
									/>
								</div>
								<div className="submit">
									<input type="submit" value="Valider" className="btn" />
								</div>
							</form>

							<div className="contact mt-5">
								<div className="number d-flex justify-content-between">
									<h1 className="h5">Numéro de téléphone</h1>
									<button>Mettre à jour</button>
								</div>
								<input type="tel" required placeholder="0749490835" className="form-control mt-4" />
							</div>

							<div className="adresses mt-5">
								<div className="d-flex justify-content-between">
									<h1 className="h5">Différentes adresses</h1>
									<button>Mettre à jour</button>
								</div>

								<div className="row justify-content-between ps-2 mt-4">
									<div className="card col-12 col-md-3">
										<strong>Maison</strong>
										<p>Non loin de la pharmacie</p>
									</div>
									<div className="card col-12 col-md-3">
										<strong>Maison</strong>
										<p>Non loin de la pharmacie</p>
									</div>
									<div className="card col-12 col-md-3">
										<strong>Travail</strong>
										<p>Non loin de la pharmacie</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profil;
