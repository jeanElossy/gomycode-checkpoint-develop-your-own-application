import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Prod = ({ setCount }) => {
	const article = useSelector((state) => state.Reducer);

	const dataProduit = article.data;

	const [ listOfProduct, setListOfProduct ] = useState([]);


	useEffect(() => {
		const getData = async () => {
			const resutltat = await axios({
				method: 'GET',
				url: 'https://fakestoreapi.com/products'
			});

			setListOfProduct(resutltat.data);
		};

		getData();
	}, []);
	console.log(listOfProduct);


	return (
		<div className="prod">
			<div className="row">
				{listOfProduct.map((item) => {
					return (
						<div className="card p-2" style={{ width: '16rem', height: '24rem' }} key={item.id}>
							<div className="image mb-2">
								<img src={item.image} alt="" />
							</div>

							<h1 className="h6">{item.title}</h1>

							<div className="mt-2">
								<div>
									<span className="fw-bold">{item.price}</span> / unité
								</div>

								<div>
									<span className="fw-bold">{item.count2}</span> / à partie de 5 unités
								</div>
							</div>

							<div className="d-flex justify-content-between gap-2 mt-3">
								<button className="btn text-white" onClick={setCount}>
									Achéter
								</button>

								<NavLink exact to="/details">
									<div className="btn fw-bold">+</div>
								</NavLink>
							</div>
						</div>
					);
				})}

				<div className="voir-plus text-center my-4">
					<button className="btn">Voir plus</button>
				</div>
			</div>
		</div>
	);
};

export default Prod;
