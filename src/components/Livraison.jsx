import React, { useState } from 'react';
import HeaderConnect from './HeaderConnect';
import Footer from './Footer';

const Livraison = () => {
	const [ display, setDisplay ] = useState(true);
	const [ addNumber, setAddNumber ] = useState(true);
	const [ adresse, setAdresse ] = useState(1);
	const [ contact, setContact ] = useState(1);

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
									<input
										type="text"
										name="coupon"
										id="coupon"
										className="form-control"
										placeholder="coupon..."
									/>
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
							<div
								className={adresse === 1 ? 'card col-12 col-md-3 active' : 'card col-12 col-md-3'}
								onClick={(e) => setAdresse(1)}
							>
								<strong>Maison</strong>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam veniam optio illum
								</p>
							</div>
							<div
								className={adresse === 2 ? 'card col-12 col-md-3 active' : 'card col-12 col-md-3'}
								onClick={(e) => setAdresse(2)}
							>
								<strong>Travail</strong>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam veniam optio illum
								</p>
							</div>

							<div className="add col-12 col-md-4">
								{display ? (
									<strong className="mb-3" onClick={(e) => setDisplay(!display)}>
										Ajouter une adresse
									</strong>
								) : (
									<div className="display">
										<strong className="mb-3" onClick={(e) => setDisplay(!display)}>
											Ajouter une adresse
										</strong>
										<div className="form">
											<form action="/" className="form-groups d-flex align-items-center">
												<textarea
													name=""
													id=""
													cols=""
													rows="2"
													placeholder="Adresse..."
													className="form-control"
												/>
												<div className="text-center">
													<input type="submit" value="Ajouter" className="btn " />
												</div>
											</form>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="adresse mt-5 mb-5">
						<div className="mb-3">Contact</div>

						<div className="row gap-3 ">
							<div
								className={contact === 1 ? 'card col-12 col-md-3 active' : 'card col-12 col-md-3'}
								onClick={(e) => setContact(1)}
							>
								<strong>Primaire</strong>
								<p className="text-center mt-3">07 49 49 08 35</p>
							</div>
							<div
								className={contact === 2 ? 'card col-12 col-md-3 active' : 'card col-12 col-md-3'}
								onClick={(e) => setContact(2)}
							>
								<strong>Sécondaire</strong>
								<p className="text-center mt-3">01 71 41 01 54</p>
							</div>
							<div className=" add col-12 col-md-3">
								{addNumber ? (
									<strong className="mb-3" onClick={(e) => setAddNumber(!addNumber)}>
										Ajouter un contact
									</strong>
								) : (
									<div className="display">
										<strong className="mb-3" onClick={(e) => setAddNumber(!addNumber)}>
											Ajouter un contact
										</strong>
										<div className="form">
											<form action="/" className="form-groups d-flex align-items-center">
												<input type="tel" placeholder="numéro..." className="form-control" />
												<div className="text-center">
													<input type="submit" value="Ajouter" className="btn " />
												</div>
											</form>
										</div>
									</div>
								)}
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
