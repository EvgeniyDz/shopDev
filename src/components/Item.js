import React, { Component } from 'react';
import {Link} from "react-router-dom";

// render product item
class Item  extends Component{

	addProducts = () => {
		const data ={
			id: this.props.id,
			img: this.props.img,
			type: this.props.type,
			title: this.props.title,
			price: this.props.price,
		}
		// console.log(this.props.length);
		this.props.addProductsToList(data);		
	}

	render() {
		const LinkTo = "/product/" + this.props.id + "/description";
		return (
			<div className="card text-center card-product">
				<div className="card-product__img">
					<img className="card-img" src={this.props.img} alt="" />
					<ul className="card-product__imgOverlay">						
					<li><button onClick={this.addProducts} disabled = {this.props.alreadyAdded}><i className="ti-shopping-cart"></i></button></li>
					<li><button><i className="ti-heart"></i></button></li>
					</ul>
				</div>
				<div className="card-body">
					<p>{this.props.type}</p>
					<h4 className="card-product__title">
						<Link to = {LinkTo}>{this.props.title}</Link>
					</h4>
					<p className="card-product__price">${this.props.price}</p>
				</div>
			</div>
		); 
	}
}

export default Item;