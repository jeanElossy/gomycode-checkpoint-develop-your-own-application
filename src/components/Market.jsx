import React from 'react';
import { NavLink } from 'react-router-dom';
import Produit from './Produit';

const Market = ({ className, setMarket, market, count }) => {
	return (
		<div className={className}>
			<div className="market-content">
				<div className="content">
					<div>
						<div className="d-flex justify-content-between p-3">
							<h6>{count} articles</h6>
							<div
								className="btn-close"
								style={{ fontSize: '.5rem', cursor: 'pointer' }}
								onClick={(e) => setMarket(!market)}
							/>
						</div>
						<hr />
						<span />

						<Produit />
					</div>

					<div className="coupon">
						<NavLink to="livraison">
							<h1 className="h5 text-center">Avez-vous un coupon?</h1>
						</NavLink>

						<div>
							<form action="/" className="form-group">
								<div>
									<label htmlFor="price">Mon panier</label>
								</div>
								<div>
									<input
										type="text"
										name="price"
										id="price"
										placeholder="2000 F"
										className="form-control"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Market;
