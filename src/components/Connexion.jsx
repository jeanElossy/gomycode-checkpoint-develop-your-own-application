import { useState } from 'react';

const Connexion = ( { className }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className={className}>
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={(e) => setToggle(!toggle)}
                >
                    Connexion
            </button>
            
            <div className={ toggle ? "show modal fade " : "overlay" } id="overlay">
                    <div className="modal-content d-flex">
                            <h5 className="modal-title" id="connexion">Modal title</h5>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn-close"
                                    data-bs-dismiss="modal" 
                                    aria-label="Close"
                                    onClick={(e) => setToggle(!toggle)}
                                    >

                                </button>
                            </div>
                           
                        
                    </div>
                
            </div>
        </div>
    )
}

export default Connexion;
