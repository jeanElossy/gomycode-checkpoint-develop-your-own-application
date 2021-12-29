import React from 'react';
import { NavLink } from 'react-router-dom';
import Connexion from './Connexion';
import Inscritpion from './Inscription';
import Navigation from './Navigation';

const header = () => {
	return (
		<div className="header bg-light">
			<div className="container">
				<div className="row pt-4 justify-content-center align-items-center">
					<form action="/" className="form-groups col-12 col-md-4">
						<input type="search" className="form-control" placeholder="Search" />
					</form>

					<div className="logo col-12 col-md-4 text-center">
						<NavLink exact to="/">
							<span className="">LMC-</span>
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

						<div className="button d-flex gap-3">
							<div className="connexion">
								<Connexion className="con-toggle" />
							</div>
							<div className="inscription">
								<Inscritpion className="ins-toggle" />
							</div>
						</div>
					</div>
				</div>
				<hr className="ms-5" />
			</div>

			<Navigation />
		</div>
	);
};

export default header;
