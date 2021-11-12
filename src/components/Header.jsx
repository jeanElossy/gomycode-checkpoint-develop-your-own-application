import React from 'react'

const header = () => {
    return (
        <div className="header bg-light">

                    <div className="container">
                        <div className="row p-4 justify-content-center align-items-center">

                            <form action="/" className="form-groups col-12 col-md-4">
                                <input 
                                    type="search"
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </form>

                            <div className="logo col-12 col-md-4 text-center">
                                <span className="text-primary">LMC-</span><span>Shop</span>
                            </div>

                            <div className="col-12 col-md-4 d-flex gap-3 align-items-center">
                                <div className="select d-flex gap-3">
                                    <div className="langues">
                                        <form action="/">
                                            <select name="langues" id="langues">
                                                <option value="Francais">Francais</option>
                                                <option value="English">English</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className="money">
                                        <form action="/">
                                            <select name="money" id="money">
                                                <option value="Euros">Euros</option>
                                                <option value="XOF">XOF</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>

                                <div className="button d-flex gap-3">
                                    <div className="connexion">
                                        <button className="btn btn-outline-primary">Connexion</button>
                                    </div>
                                    <div className="inscription">
                                        <button className="btn">Inscritpion</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr className="ms-5" />
                    </div>
                    
                <div className="articles d-flex justify-content-center gap-5 pt-3 pb-4">
                    <div>
                        <a href="/">
                            Categories
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            Vetements
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            Accessoires
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            Chaussures 
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default header;

