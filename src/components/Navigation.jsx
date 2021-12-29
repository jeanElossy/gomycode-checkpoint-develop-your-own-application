import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	const [add, setAdd] = useState(false);

	return (
		<div className="navigation d-flex justify-content-center gap-5 pt-3 pb-4">
			<NavLink exact to="/categories">
				Categories
			</NavLink>
			<NavLink exact to="/vetements" >
				Vêtements
			</NavLink>
			<NavLink exact to="/" >
				Accessoires
			</NavLink>
			<NavLink exact to="/" >
				Chaussures
			</NavLink>
		</div>
	);
};

export default Navigation;
