import React from 'react';
import { useState } from 'react';
import { FaBabyCarriage } from 'react-icons/fa';
import Market from '../components/Market';

const Panier = () => {

    const [ market, setMarket ] = useState(false);
    const [ count, setCount ] = useState(0);

	const handleCount = (e) => {
		e.preventDefault();
		setCount(count + 1);
	};



    return (
        <div className=''>

            <div className="market" onClick={(e) => setMarket(!market)}>
                <span>{count}</span>
                <FaBabyCarriage className="icon--market" />
            </div>

            <div className={market ? 'show modal' : 'overlay'} id="overlay">
				<Market setMarket={setMarket} market={market} count={count} className="panier" />
			</div>


        </div>
    )
}

export default Panier