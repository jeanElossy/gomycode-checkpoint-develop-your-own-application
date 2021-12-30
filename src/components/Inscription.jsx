import { useState } from 'react';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Inscritpion = () => {
	const [ toggle, setToggle ] = useState(false);

	return (
		<div className="inscription-toggle">
			<button type="button" className="btn btn-primary" onClick={(e) => setToggle(!toggle)}>
				<strong>Inscription</strong>
			</button>

			<div className={toggle ? 'show modal fade ' : 'overlay'} id="overlay">
				<div className="modal-content">
					<div>
						<h5 className="modal-title mt-3 ms-4" id="Inscritpion">
							Inscription
						</h5>
						<div>
							<button
								type="button"
								className="btn-close d-flex justify-content-center align-items-center"
								onClick={(e) => setToggle(!toggle)}
							>
								x
							</button>
						</div>
					</div>
					<hr style={{ width: '90%', transform: 'translate(5%)' }} className="mt-2" />
					<div className="ins-reseaux">
						<div className="ms-4">
							Vous avez un compte ?{' '}
							<span>
								<a href="/" className="span">
									Connectez-vous
								</a>
							</span>
						</div>
						<div className="d-flex justify-content-center gap-2 mt-3">
							<button className="btn-reseau">
								<span>
									<AiOutlineGooglePlus />
								</span>{' '}
								<strong>Connexon avec Google</strong>
							</button>
							<button className="btn-reseau">
								<span>
									<FaFacebookF />
								</span>{' '}
								<strong>Connexon avec Facebook</strong>
							</button>
						</div>
					</div>
					<div className="text-center">
						<span className="ou">Ou</span>
					</div>
					<div className="mt-4 ">
						<form action="/" className="form-group ms-3">
							<input
								type="text"
								name="nom"
								id="nom"
								placeholder="Nom"
								className="form-control"
								style={{ width: '460px' }}
							/>
							<input
								type="text"
								name="prenom"
								id="prenom"
								placeholder="Prenom(s)"
								className="form-control mt-3"
								style={{ width: '460px' }}
							/>
							<input
								type="Email"
								name="email"
								id="email"
								placeholder="Email"
								className="form-control mt-3"
								style={{ width: '460px' }}
							/>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Mot de passe"
								className="form-control mt-3"
								style={{ width: '460px' }}
							/>

							<select
								name="pays"
								id="pays"
								className="select-control mt-3"
								style={{
									width: '460px',
									border: '1px solid rgba(165, 164, 164, 0.600)',
									padding: '.4rem 0',
									borderRadius: '5px'
								}}
							>
								<option value="Pays">Pays</option>
								<option value="Ci">Cote d'Ivoire</option>
								<option value="France">France</option>
							</select>

							<select
								name="ville"
								id="ville"
								className="select-control mt-3"
								style={{
									width: '460px',
									border: '1px solid rgba(165, 164, 164, 0.600)',
									padding: '.4rem 0',
									borderRadius: '5px'
								}}
							>
								<option value="Ville">Ville</option>
								<option value="Abidjan">Abidjan</option>
								<option value="Bouake">Bouake</option>
							</select>

							<input
								type="submit"
								value="S'inscrire"
								className="btn btn-primary mt-3"
								style={{ width: '460px' }}
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Inscritpion;
