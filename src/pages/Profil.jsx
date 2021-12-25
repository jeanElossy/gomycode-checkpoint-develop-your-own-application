import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderConnect from "../components/HeaderConnect"
import Footer from "../components/Footer"

const Profil = () => {

    const str = "Maison, non loin de la pharmacie";

	return (
		<div className="profil">
            
            <HeaderConnect />

			<div className="container p-3 content">
				<div className="row">
					<div className="coordonnees col-12 col-md-3">
						<h1 className="h5 text-primary">
							<NavLink to="/profil">
								<span className="active">Profil</span>
							</NavLink>
						</h1>
						<h1 className="h5">
							<NavLink to="/password">
								<span>Changer de passe</span>
							</NavLink>
						</h1>
						<h1 className="h5">
							<NavLink to="">
								<span>Mes commandes</span>
							</NavLink>
						</h1>
					</div>

					<div className="content__coordonnees col-12 col-md-9">
						<h2 className="h4 mb-4">Profil</h2>

						<div className="contains ms-3">
							<form action="" className="form-groups d-flex flex-column gap-4">
								<div className="cadre--border" />
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
								<input type="tel" required placeholder="0749490835" className='form-control mt-4'/>
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
                <div className="delete my-5">
                    <h3 className='h4'>Supprimer votre compte </h3>
                    <p>Cette action entrainera  la suppression de toute vos données personnelles.</p>
                    <button>Supprimer mon compte</button>
                </div>
			</div>

            <Footer />
            
		</div>
	);
};

export default Profil;
