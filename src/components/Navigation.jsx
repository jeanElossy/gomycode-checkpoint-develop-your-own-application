import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="navigation d-flex justify-content-center gap-5 pt-3 pb-4">
			<NavLink exact to="/categories" activeClassName="nav-active">
				Categories
			</NavLink>
			<NavLink exact to="/vetements" activeClassName="nav-active">
				Vêtements
			</NavLink>
			<NavLink exact to="/" activeClassName="nav-active">
				Accessoires
			</NavLink>
			<NavLink exact to="/" activeClassName="nav-active">
				Chaussures
			</NavLink>
		</div>
	);
};

export default Navigation;
