import React from 'react';
import Contains from '../components/Contains';
import Header from "../components/Header";
import Prod from '../components/Prod';
import Footer from '../components/Footer';


// import Panier from '../components/Panier';

const Vetements = () => {
    return (
        <div className='vetements'>
            <Header />        
            
            <Contains />

            <div className="container">
                <div className="row">
                    <Prod className="prod" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Vetements;

