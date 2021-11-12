import { useState } from 'react';

const Inscritpion = ( { className }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className={className}>
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={(e) => setToggle(!toggle)}
                >
                    Inscription
            </button>
            
            <div className={ toggle ? "show modal fade " : "overlay" } id="overlay">
                    <div className="modal-content d-flex">
                            <h5 className="modal-title" id="Inscritpion">Modal title</h5>
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

export default Inscritpion ;
