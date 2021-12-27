import React from 'react';
import { BiSun } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';

const New = () => {
	return (
		<div>
			<div className="new">
				<div className="d-flex">
					<div className="fs-3">
						<BiSun />
					</div>
					<h1 className="h5 ms-4 new">Nouvel arrivage</h1>
				</div>
				<div className="d-flex mt-4 align-items-center">
					<div className="fs-3">
						<FiShoppingBag />
					</div>
					<h2 className="h5 ms-4 new ">Top ventes</h2>
				</div>
			</div>
		</div>
	);
};

export default New;
