import React from 'react'
import Header from "../components/Header";
import { FaBabyCarriage } from "react-icons/fa";
import Articles from '../components/Articles';
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="home">

            <Header />

            <div className="text__image container-fluid bg-primary">
                <div className="row">
                    <div className="text col-12 col-md-7 text-white">
                        <h1>Bénéficiez de vos articles préférés <br /> en gros et en details</h1>
                        <p className="mt-4 fs-6">Achéter et faites vous livrer vos colis en Côte d'Ivoire, au Burkina Faso, au Libéria, et en Sierra Léonne </p>
                        <div className="success mt-4">
                            <button className="btn btn-success p-3">Achéter maintenant</button>
                        </div>
                    </div>
                    <div className="image col-12 col-md-5">
                        <img src="medias/2.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="market">
                <span>
                    0
                </span>
                <FaBabyCarriage
                    className="icon--market"
                />
            </div>

            <div className="produits container">
                <div className="row justify-content-center gap-5">
                    <div className="col-12 col-md-4 card">
                        <div className="row">
                            <h6 className="col-md-5 p-3">Hommes</h6>
                            <img 
                                src="medias/3.png" 
                                alt="" 
                                className="col-md-7"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card">
                        <div className="row">
                            <h6 className="col-md-5 p-3">Sacs</h6>
                            <img src="medias/8.png" alt="" className="col-md-7"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card">
                        <div className="row">
                            <h6 className="col-md-5 p-3">Femmes</h6>
                            <img src="medias/1.png" alt=""  className="col-md-7 pt-4"/>
                        </div>
                    </div>
                </div>
            </div>

            <Articles 
                className="products"
            />


            <Footer />
        </div>
    )
}


export default Home
