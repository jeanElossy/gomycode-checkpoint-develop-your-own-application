import React from 'react'

const Market = ( { className,  setMarket, market, count}) => {

    return (
        <div className={className}>
            <div className='market-content d-flex justify-content-between p-3' >
                <h6>{count} articles</h6>
                <div className="btn-close" style={{fontSize:".5rem", cursor:"pointer"}} onClick={(e) => setMarket(!market)} />
            </div>
            
            <span></span>
        
            <div>
            
            </div>
        </div>
    )

}

export default Market;