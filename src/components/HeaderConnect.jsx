import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';

const HeaderConnect = () => {
	const [ show, setShow ] = useState(false);

	return (
		<div className="header--connect">
			<div className="container ">
				<div className="row pt-4 justify-content-center align-items-center">
					<form action="/" className="form-groups col-12 col-md-3 form">
						<input type="search" className="form-control" placeholder="Search" />
					</form>

					<div className="logo col-12 col-md-4 ms-5 text-center">
						<NavLink exact to="/">
							<span>LMC-</span>
							<span>Shop</span>
						</NavLink>
					</div>


					<div className="col-12 col-md-4 d-flex gap-3 align-items-center">
						<div className="select d-flex gap-3">
							<div className="langues">
								<form action="/">
									<select name="langues" id="langues">
										<option value="Francais">Francais</option>
										<option value="English">English</option>
									</select>
								</form>
							</div>

							<div className="money">
								<form action="/">
									<select name="money" id="money">
										<option value="Euros">Euros</option>
										<option value="XOF">XOF</option>
									</select>
								</form>
							</div>
						</div>

						<div className="profil d-flex gap-2 align-items-center">
							<img src="./medias/capture.png" alt="balise" onClick={(e) => setShow(!show)} />

							<div>
								<h1 className="h6" onClick={(e) => setShow(!show)}>
									JEAN ELOSSY
								</h1>

								<div className={show ? 'show p-3' : 'lien'}>
									<div>
										<NavLink exact to="/profil">
											PROFIL
										</NavLink>
									</div>
									<div>
										<NavLink exact to="/">
											FAQ
										</NavLink>
									</div>
									<div>
										<NavLink exact to="/">
											DECONNEXION
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>

			<Navigation />
		</div>
	);
};

export default HeaderConnect;
