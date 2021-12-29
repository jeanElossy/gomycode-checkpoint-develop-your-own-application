import React from 'react';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {

	
	const navigate = useNavigate();
	

	return (
		<div className="notFound">
			<div className="text-center">
				<h1>Erreur 404 !!!</h1>
				<p>Page introuvable</p>
				<div  className='acceuil'>
					Allez à la page d'accueil
				</div>
			</div>
		</div>
	);
};

export default NotFound;
