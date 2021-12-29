import React from 'react';
import HeaderConnect from './HeaderConnect';
import Footer from './Footer';

const Livraison = () => {
	return (
		<div className="livraison">
			<HeaderConnect />

			<div className="container ps-5">
				<div className="row card mt-3 mb-5">
					<div className="bloc mt-3">
						<div className="row my-3">
							<div className="col-12 col-md-4 ">Sous total(3 articles)</div>
							<div className="col-12 col-md-4 bloc--right">3000 FCFA</div>
						</div>
						<div className="row my-3">
							<div className="col-12 col-md-4 ">Frais de livraison</div>
							<div className="col-12 col-md-4 bloc--right">1000 FCFA</div>
						</div>
						<div className="row my-3">
							<div className="col-12 col-md-4 ">Coupon</div>
							<div className="col-12 col-md-4">
								<form action="/" className="form-groups d-flex align-items-center ">
									<input type="text" name="coupon" id="coupon" className="form-control" />
									<input type="submit" value="Appliquer" />
								</form>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-12 col-md-4 ">Total</div>
							<div className="col-12 col-md-4 bloc--right">4000 FCFA</div>
						</div>
					</div>

					<div className="adresse mt-5">
						<div className="mb-3">Adresse de livraison</div>

						<div className="row gap-3">
							<div className="card col-12 col-md-3">
								<strong>Maison</strong>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam veniam optio illum
								</p>
							</div>
							<div className="card col-12 col-md-3">
								<strong>Travail</strong>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam veniam optio illum
								</p>
							</div>
							<div className="card col-12 col-md-3">
								<strong>Ajouter une adresse</strong>
							</div>
						</div>
					</div>

					<div className="adresse mt-5 mb-5">
						<div className="mb-3">Contact</div>

						<div className="row gap-3 ">
							<div className="card col-12 col-md-3">
								<strong>Primaire</strong>
								<p>07 49 49 08 35</p>
							</div>
							<div className="card col-12 col-md-3">
								<strong>Sécondaire</strong>
								<p>01 71 41 01 54</p>
							</div>
							<div className="card col-12 col-md-3">
								<strong>Ajouter un contact</strong>
							</div>
						</div>
					</div>

					<hr />

					<div className="verify my-5">
						<p>
							<strong>Option de paiement</strong>
						</p>

						<div>
							<form action="/" className="d-flex gap-3 align-items-center">
								<input type="checkbox" name="check" id="check" />
								<label htmlFor="check">Cash à la livraison</label>
							</form>
						</div>

						<div className="text-center mt-5">
							<button type="submit">Procéder au paiment</button>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Livraison;