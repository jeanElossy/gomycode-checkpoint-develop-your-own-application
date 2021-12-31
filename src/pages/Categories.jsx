import React from 'react';
import Panier from "../components/Panier";
import { FiSearch } from 'react-icons/fi';
import { FaRegCreditCard } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';
import { IoLogoModelS } from 'react-icons/io';
import Articles from '../components/Articles';
import Header from "../components/Header";
import Footer from '../components/Footer';

const Categories = () => {
	return (
		<div className="categories">
			
		
			<Header />

			<div className="container-fluid container-articles">
				<div className="row ">
					<div className="text--tilte">
						<h1 className="text-center">
							Bénéficiez de vos articles préférés <br /> en gros et en details
						</h1>
						<div className="text-center">
							<span>
								Acheter et faite vous livrer vos colis en Côte d'Ivoire, au Burkina Faso, au Libéria,{' '}
								<br /> et en Sierra Léonne.
							</span>
						</div>
						<div className="form">
							<form action="/" className="d-flex">
								<div className="select">
									<select name="list" id="list">
										<option defaultValue="categories" className="text-primary">
											Categories
										</option>
										<option value="vetements">Vêtements</option>
										<option value="accessoires">Accessoires</option>
										<option value="chaussures">Chaussures</option>
									</select>
								</div>
								<div className="search">
									<input
										type="search"
										name="search"
										id="search"
										placeholder="ex: Chémise, Pantalon"
									/>
								</div>
								<div className="submit">
									<span>
										<FiSearch className="text-white" />
									</span>
									<input type="submit" value="Chercher" className="text-white" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="container bloc--info">
				<div className="row">
					<div className="card col-12 col-md-3">
						<div className="icon">
							<BsCart />
						</div>
						<div className="card--title">
							<h1 className="h3">Vente en gros & en details</h1>
						</div>
						<div className="card--text">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minus itaque ea quas?
								Tempore atque cupiditate
							</p>
						</div>
					</div>

					<div className="card col-12 col-md-3">
						<div className="icon">
							<IoLogoModelS />
						</div>
						<div className="card--title">
							<h2 className="h3">Livraison rapide</h2>
						</div>
						<div className="card--text">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minus itaque ea quas?
								Tempore atque cupiditate
							</p>
						</div>
					</div>

					<div className="card col-12 col-md-3">
						<div className="icon">
							<FaRegCreditCard />
						</div>
						<div className="card--title">
							<h3 className="h3">Facilité de paiement</h3>
						</div>
						<div className="card--text">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minus itaque ea quas?
								Tempore atque cupiditate
							</p>
						</div>
					</div>
					<div className="card col-12 col-md-3">
						<div className="icon">
							<BiReset />
						</div>
						<div className="card--title">
							<h4 className="h3">Retour facile</h4>
						</div>
						<div className="card--text">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minus itaque ea quas?
								Tempore atque cupiditate
							</p>
						</div>
					</div>
				</div>
			</div>


			
			<Panier />

			<div className="container border border-ligth p-4 article">
				<div className="row">
					<Articles />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Categories;
