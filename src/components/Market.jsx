import React from 'react'
import Produit from './Produit';

const Market = ( { className,  setMarket, market, count}) => {

    return (
        <div className={className}>
            <div className='market-content'>
                <div className="d-flex justify-content-between p-3">
                    <h6>{count} articles</h6>
                    <div className="btn-close" style={{fontSize:".5rem", cursor:"pointer"}} onClick={(e) => setMarket(!market)} />
                </div>
                <span></span>

                <Produit />

            </div>
        </div>
    )

}

export default Market;