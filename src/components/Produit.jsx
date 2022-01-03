import React from 'react';

const Produit = () => {

	
	return (
		<div className="produit">
			<div className="container">
				<div className="row ">
					<div className="number col-12 col-md-1">
						<div>+</div>
						<div>0</div>
						<div>-</div>
					</div>

					<div className="col-12 col-md-7 d-flex gap-1">
						<div>
							<img src="medias/5.png" alt="" width="100" height="100" />
						</div>
						<div className="d-flex flex-column gap-2 title">
							<div>Jupe volante</div>
							<div>2000 F</div>
							<div>3 unités</div>
						</div>
					</div>


					<div className="col-12 col-md-3 d-flex align-items-center gap-2 price--right">
						<div>2000 F</div>
						<div className="btn-close fw-bold" style={{ fontSize: '.5rem', cursor: 'pointer',  }} />
					</div>

					<hr className='mt-2' />
				</div>
			</div>
		</div>
	);
};

export default Produit;
