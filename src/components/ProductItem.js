import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import CartBanner from './CartBanner';

class ProductItemDesc  extends Component{
	render() {
		const Container = posed.div({
			enter: { staggerChildren: 50 }
		});
		const P = posed.p({
			enter: { x: 0, opacity: 1 },
			exit: { x: 50, opacity: 0 }
		});
		return(
			<Container id="home" role="tabpanel" aria-labelledby="home-tab">
			<P>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes
				and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in
				Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to
				London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an
				officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a
				job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
				showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a
				child’s painting set for her birthday and it was with this that she produced her first significant work, a
				half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly
				named ‘Hangover’ by Beryl’s husband and</P>
			<P>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing
				more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and
				the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for
				more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a
				streamlined plan of cooking that is more efficient for one person creating less</P>
			</Container>
		)
	}
}
class ProductItemSpec  extends Component{
	render() {
		return(
			<div id="profile" role="tabpanel" aria-labelledby="profile-tab">
			<div className="table-responsive">
				<table className="table">
					<tbody>
						<tr>
							<td>
								<h5>Width</h5>
							</td>
							<td>
								<h5>128mm</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Height</h5>
							</td>
							<td>
								<h5>508mm</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Depth</h5>
							</td>
							<td>
								<h5>85mm</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Weight</h5>
							</td>
							<td>
								<h5>52gm</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Quality checking</h5>
							</td>
							<td>
								<h5>yes</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Freshness Duration</h5>
							</td>
							<td>
								<h5>03days</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>When packeting</h5>
							</td>
							<td>
								<h5>Without touch of hand</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Each Box contains</h5>
							</td>
							<td>
								<h5>60pcs</h5>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>	
		)
	}
}
// render product item
class ProductItem  extends Component{

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	addProducts = () => {	
		this.props.addProductsToList({
			...this.props.product,
			img: `/${this.props.product.images}`
		});
	}

	render() {
		const lincTo = this.props.match.url;
		return (
				<div>
					<CartBanner title="Shop Single" />
					{
						!this.props.product ?
						null :						
						<div>
							<div className="product_image_area">
							<div className="container">
								<div className="row s_product_inner">
									<div className="col-lg-6">
										<img src={`/${this.props.product.images}`} alt="" />
									</div>
									<div className="col-lg-5 offset-lg-1">
										<div className="s_product_text">
											<h3>{this.props.product.title}</h3>
											<h2>${this.props.product.price}</h2>
											<ul className="list">
												<li><a className="active" href="index.html"><span>Category</span> : {this.props.product.category}</a></li>
												<li><a href="index.html"><span>Availibility</span> : {this.props.product.Availibility}</a></li>
											</ul>
											<p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
												something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
												during the winter.</p>
																
											<button className="button primary-btn" onClick={this.addProducts} disabled = {this.props.alreadyAdded}>Add to Cart</button>               
											
											</div>
										</div>
									</div>
								</div>
							</div>
							<section className="product_description_area">
								<div className="container">
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item">
											<NavLink activeClassName="active" className="nav-link" to={lincTo + "/description"}>Description</NavLink>
										</li>
										<li className="nav-item">
											<NavLink activeClassName="active" className="nav-link" to={lincTo + "/specification"}>Specification</NavLink>
										</li>
									</ul>
									<div className="tab-content" id="myTabContent">
										<PoseGroup>											
											<Route exact path={lincTo + "/description"} component={ProductItemDesc} key="home"/ >
											<Route path={lincTo + "/specification"} component={ProductItemSpec} key="home2"/>										
										</PoseGroup>
									</div>
								</div>						
							</section>
					</div>
					}
				</div>
		); 
	}
}

export default ProductItem;