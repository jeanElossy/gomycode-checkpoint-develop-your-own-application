import React from 'react';
import Prod from './Prod';
import { useState } from 'react';
import { BiSun } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';
import TopVente from './TopVente';

const Articles = ({ className, setCount }) => {
	const [ changeData, setChangeData ] = useState(1);

	const [addProduct, setAddProduct] = useState([]);

	const handleAdd = (product) => {
		const newProduct = [...addProduct];
		newProduct.push(product);
		setAddProduct(newProduct);
	}

	console.log(addProduct)



	return (
		<div className={className}>
			<div className="container-fluid">
				<div className="row">
					<div className="choose col-12 col-md-2">
						<div className="new">
							<div className="d-flex" onClick={(e) => setChangeData(1)}>
								<div className="fs-3">
									<BiSun />
								</div>
								<h1 className={changeData === 1 ? 'active' : ' '}>Nouvel arrivage</h1>
							</div>
							<div className="d-flex mt-4 align-items-center" onClick={(e) => setChangeData(2)}>
								<div className="fs-3">
									<FiShoppingBag />
								</div>
								<h2 className={changeData === 2 ? 'active' : ' '}>Top ventes</h2>
							</div>
						</div>
					</div>

					<div className="product col-12 col-md-10 bg-light pb-5 mb-3">
						<div className="contenu">{changeData === 1 ? <Prod setCount={setCount} handleAdd={handleAdd} /> : <TopVente />}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Articles;
