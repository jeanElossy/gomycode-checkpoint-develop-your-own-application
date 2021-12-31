import React from 'react';
import ReactLoading from 'react-loading';

const Loader = () => {
	return (
		<div className="loader">
			<ReactLoading type="spinningBubbles" color="rgb(8, 26, 192)" height={10} width={50} />
		</div>
	);
};

export default Loader;
