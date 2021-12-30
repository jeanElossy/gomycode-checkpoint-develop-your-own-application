import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	const [add, setAdd] = useState(false);

	return (
		<div className="navigation d-flex justify-content-center gap-5 pt-3 pb-4 my-3">
			<NavLink exact to="/categories" className={add ? "active" : " "} onClick={(e) => setAdd(true)}>
				Categories
			</NavLink>
			<NavLink exact to="/vetements" >
				Vêtements
			</NavLink>
			<NavLink exact to="/accessoires" >
				Accessoires
			</NavLink>
			<NavLink exact to="/chaussures" >
				Chaussures
			</NavLink>
		</div>
	);
};

export default Navigation;
