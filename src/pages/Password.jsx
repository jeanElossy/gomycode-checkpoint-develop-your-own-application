import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderConnect from '../components/HeaderConnect'
import Footer from '../components/Footer';

const Password = () => {
    return (
        <div className='password'>

            <HeaderConnect />

            <div className="container">
                <div className="row">
                    <div className="coordonnees col-12 col-md-3">
                        <h1 className="h5 text-primary">
                            <NavLink to="/profil">
                                <span>Profil</span>
                            </NavLink>
                        </h1>
                        <h1 className="h5">
                            <NavLink to="">
                                <span className="active">Changer de mot de passe</span>
                            </NavLink>
                        </h1>
                        <h1 className="h5">
                            <NavLink to="">
                                <span>Mes commandes</span>
                            </NavLink>
                        </h1>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Password
