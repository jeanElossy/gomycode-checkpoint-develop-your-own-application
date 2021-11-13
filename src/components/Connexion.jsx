import { useState } from 'react';

const Connexion = ( { className }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className={className}>
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={(e) => setToggle(!toggle)}
                >
                    Connexion
            </button>
            
            <div className={ toggle ? "show modal fade " : "overlay" } id="overlay">
                <div className="modal-content">
                    <div>
                        <h6 className="modal-title mt-3 ms-4" id="connexion">Connexion</h6>
                        <div>
                            <button 
                                type="button" 
                                className="btn-close"
                                onClick={(e) => setToggle(!toggle)}
                            >
                            </button>
                        </div>
                    </div>
                    <hr 
                        style={{width:"90%", transform: "translate(5%)"}}
                        className="mt-2"
                    />
                    <div className="con-reseaux">
                        <div className="ms-4">Vous n'avez pas de compte ? <span><a href="/" className="span">Inscrivez-vous</a></span></div>
                        <div className="d-flex justify-content-center gap-3 mt-3">
                            <button className="btn-reseau">
                                <span></span> <strong>Connexon avec Google</strong>
                            </button>
                            <button className="btn-reseau">
                                <span></span> <strong>Connexon avec Facebook</strong>
                            </button>
                        </div>
                    </div> 
                    <div className="text-center">
                        <span className="ou">Ou</span>
                    </div>
                    <div className="mt-4 ">
                        <form action="/" className="form-group ms-3">
                            <input 
                                type="Email" 
                                name="email"
                                id="email"
                                placeholder="Adresse email"
                                className="form-control"
                                style={{width: "415px"}}
                            />
                            <input 
                                type="password" 
                                name="password"
                                id="password"
                                placeholder="Mot de passe"
                                className="form-control mt-3"
                                style={{width: "415px"}}
                            />
                            <input 
                                type="submit" 
                                value="Se connecter"
                                className="btn text-white mt-3"
                                style={{width: "415px"}}
                            />
                        </form>
                        <div className="m-3">
                            <a href="/" className="forget">
                                Mot de passe oublié 
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Connexion;
