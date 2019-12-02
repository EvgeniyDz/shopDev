import React, { Component } from 'react';

class CartItem  extends Component {

	removeProducts = () => {
		const data = this.props.id;			
		this.props.removeProductsToList(data);	
		// console.log(data);	
	}

	
	render(){		
		return (
			<tr>
				<td>
					<div className="media">
						<div className="d-flex">
							<img src={this.props.img} alt="" />
						</div>
						<div className="media-body">
							<p>{this.props.title}</p>
						</div>
					</div>
				</td>
				<td>
				</td>
				<td>
					<h5>${this.props.price}</h5>
				</td>
				<td>
					<button onClick={this.removeProducts} className="btn btn-danger">Remove</button>								
				</td>
			</tr>
		);
	}

}

export default CartItem;