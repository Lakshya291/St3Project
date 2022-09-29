import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Col, Image, Button, Row } from "react-bootstrap";
import TourPlace from "./TourPlace";
import "../Styles/home.css";
export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<Grid>
						<Jumbotron>
							<h1>Enjoy Your Dream Vacation</h1>
							<h3>
								Travel to the any corner of the world, without going around in
								circles.
							</h3>
							<Link to="/services">
								<Button bsStyle="primary">More</Button>
							</Link>
						</Jumbotron>
					</Grid>
				</div>
				<Grid>
					<div className="banner text-center">
						<h2>The best agency you can choose</h2>
						<p>
							We are committed to offering travel services of the highest
							quality, combining our energy and enthusiasm with years of
							experience.
						</p>
					</div>

					<TourPlace />

					<Row className="show-grid text-center">
						<div className="testimonial">
							<h1 className="text-center"> What Customers Say</h1>
							<h5 className="text-center">
								Our clients’ testimonials are the best proof of our high level
								of service
							</h5>
						</div>

						<Col xs={12} sm={4} className="person-wrapper">
							<Image
								src="/assets/img/testimony/p1.jpg"
								circle
								className="profile-pic"
							/>
							<h3>Avni Malhotra</h3>
							<p>
								“Trippy was an excellent Travel Companion for us and considered
								our unique needs as they planned our itinerary. Every suggestion
								they made was excellent.”{" "}
							</p>
						</Col>

						<Col xs={12} sm={4} className="person-wrapper">
							<Image
								src="/assets/img/testimony/p2.jpg"
								circle
								className="profile-pic"
							/>
							<h3>Vivek Oberoi</h3>
							<p>
								“I would highly recommend Trippy because everything on my month
								long trip to Europe went without a hitch.”
							</p>
						</Col>

						<Col xs={12} sm={4} className="person-wrapper">
							<Image
								src="/assets/img/testimony/p3.jpg"
								circle
								className="profile-pic"
							/>
							<h3>Navya Garg</h3>
							<p>
								“It was memorable and well managed trip. Thankyou Trippy for all
								the efforts for making this wonderful experience for us.”
							</p>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
