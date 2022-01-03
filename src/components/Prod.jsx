import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';


const Prod = ({ setCount, handleAdd }) => {
	const article = useSelector((state) => state.Reducer);
	const dataProduit = article.data;

	const [addElement, setAddElement] = useState()




	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);




	return (
		<div className="prod">
			<div className="row">
				{dataProduit.map((item) => {
					return (
						<div
							className="card p-2"
							style={{ width: '16rem', height: '25rem' }}
							key={item.id}
							data-aos="fade-up"
						>
							<div className="image" onClick={handleAdd}>
								<img src={item.image} alt="" />
							</div>
							<h1 className="h6">{item.title}</h1>

							<div className="mt-2">
								<div>
									<span className="fw-bold">{item.price * 1000 }</span> <strong>F</strong> / unité
								</div>

								<div>
									<span className="fw-bold">{item.price * 100}</span><strong> F</strong> / à partir de 5 unités
								</div>
							</div>

							<div className="d-flex justify-content-between gap-2 mt-3">
								<button className="btn text-white" onClick={setCount} >
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
					<button className="btn" data-aos="flip-left">
						Voir plus
					</button>
				</div>
			</div>
		</div>
	);
};

export default Prod;
