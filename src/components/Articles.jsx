import React from 'react';

import New from './New';
import Prod from './Prod';


const Articles = ({ className }) => {

	return (
		<div className={className}>
			<div className='container-fluid'>
				<div className='row'>
					<div className='choose col-12 col-md-2'>
						<New/>
					</div>

					<div className='product col-12 col-md-10 bg-light pb-5 mb-3'>
						
						<Prod />
	
					</div>
				</div>
			</div>
		</div>
	);
};

export default Articles;
