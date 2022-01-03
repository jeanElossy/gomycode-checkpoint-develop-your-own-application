import { useState } from 'react';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import axios from 'axios';

const Connexion = () => {
	const [ toggle, setToggle ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	// logique de connexion d'un utilisateur et la gestion d'erreur
	const handleLogin = (e) => {
		e.preventDefault();

		const emailError = document.querySelector('.error-email');
		const passwordError = document.querySelector('.error-password');

		axios({
			method: 'post',
			url: `${process.env.REACT_APP_API_URL}api/user/login`,
			withCredentials: true,
			data: {
				email,
				password
			}
		})
			.then((res) => {
				if (res.data.errors) {
					emailError.innerHTML = res.data.errors.email;
					passwordError.innerHTML = res.data.errors.password;
				} else {
					window.location = '/';
				}
			})
			// .catch((err) => {
			// 	console.log(err);
			// });
	};

	return (
		<div className="connexion-toggle ">
			<button type="button" className="btn" onClick={(e) => setToggle(!toggle)}>
				Connexion
			</button>

			<div className={toggle ? 'show modal fade ' : 'overlay'} id="overlay">
				<div className="modal-content">
					<div>
						<h6 className="modal-title mt-3 ms-4" id="connexion">
							<strong>Connexion</strong>
						</h6>
						<div>
							<button type="button" className="btn-close" onClick={(e) => setToggle(!toggle)} />
						</div>
					</div>

					<div className="con-reseaux">
						<div className="ms-4 mt-4">
							Vous n'avez pas de compte ?{' '}
							<span>
								<a href="/" className="span">
									Inscrivez-vous
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
						<form action="/" className="form-group ms-3" onSubmit={handleLogin}>
							<input
								type="Email"
								name="email"
								id="email"
								placeholder="Adresse email"
								className="form-control"
								style={{ width: '460px' }}
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>

							<div className="error-email" />

							<input
								type="password"
								name="password"
								id="password"
								placeholder="Mot de passe"
								className="form-control mt-4"
								style={{ width: '460px' }}
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>

							<div className="error-password" />

							<input
								type="submit"
								value="Se connecter"
								className="btn text-white mt-4"
								style={{ width: '460px' }}
							/>
						</form>
						<div className="m-3">
							<a href="/" className="forget">
								Mot de passe oublié
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Connexion;
