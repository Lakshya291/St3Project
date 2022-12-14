import React, { Component } from "react";
import { Grid, Col, Image, Row } from "react-bootstrap";
import "../Styles/about.css";

export default class About extends Component {
	render() {
		return (
			<div>
				<div className="content-wrapper">
					<Image src="/assets/img/about.jpg" />
					<h2 className="heading">About Us </h2>
				</div>
				<Grid>
					<Col xs={12} sm={8} smOffset={2}>
						<Image src="/assets/img/travel.jpg" className="about-pc" rounded />
						<h3>Traveling. Tours. Adventure.</h3>

						<p>
							We are committed to offering travel services of the highest
							quality, combining our energy and enthusiasm, with our years of
							experience. Our greatest satisfaction comes in serving large
							numbers of satisfied clients who have experienced the joys and
							inspiration of travel.
						</p>

						<p>
							Behaviour we improving at something to. Evil true high lady roof
							men had open. To projection considered it precaution an melancholy
							or. Wound young you thing worse along being ham. Dissimilar of
							favourable solicitude if sympathize middletons at. Forfeited up if
							disposing perfectly in an eagerness perceived necessary. Belonging
							sir curiosity discovery extremity yet forfeited prevailed own off.
							Travelling by introduced of mr terminated. Knew as miss my high
							hope quit. In curiosity shameless dependent knowledge up. Whether
							article spirits new her covered hastily sitting her. Money witty
							books nor son add. Chicken age had evening believe but proceed
							pretend mrs. At missed advice my it no sister. Miss told ham dull
							knew see she spot near can. Spirit her entire her called.
						</p>
						<p>
							{" "}
							Particular unaffected projection sentiments no my. Music marry as
							at cause party worth weeks. Saw how marianne graceful dissuade new
							outlived prospect followed. Uneasy no settle whence nature narrow
							in afraid. At could merit by keeps child. While dried maids on he
							of linen in. In as name to here them deny wise this. As rapid
							woody my he me which. Men but they fail shew just wish next put.
							Led all visitor musical calling nor her. Within coming figure sex
							things are. Pretended concluded did repulsive education smallness
							yet yet described. Had country man his pressed shewing. No gate
							dare rose he. Eyes year if miss he as upon.{" "}
						</p>
					</Col>
				</Grid>

				<Grid fluid className="team">
					<h1 className="text-center"> Our team</h1>
					<h5 className="text-center">
						An experienced team of people passionate about traveling
					</h5>
					<Grid>
						<Row className="show-grid text-center">
							<Col xs={12} sm={4} className="person-wrapper">
								<Image
									src="/assets/img/person1.jpg"
									circle
									className="profile-pic"
								/>
								<h3>Saanvi Sharma</h3>
								<h5>Founder and Director</h5>
								<p>
									???Our Website is an companion that provides paid lodging on a
									short-term basis. Facilities provided inside a hotel room may
									range from a small room to large suites???{" "}
								</p>
							</Col>

							<Col xs={12} sm={4} className="person-wrapper">
								<Image
									src="/assets/img/person3.jpg"
									circle
									className="profile-pic"
								/>
								<h3>Daksh Mehta</h3>
								<h5>Senior Travel Agent</h5>
								<p>
									???I would highly recommend Trippy because we here consider
									every needs of our clients as we plan their trip so they can
									enjoy without any annoyance.???
								</p>
							</Col>

							<Col xs={12} sm={4} className="person-wrapper">
								<Image
									src="/assets/img/person2.jpg"
									circle
									className="profile-pic"
								/>
								<h3>Arush Kapoor</h3>
								<h5>Hotel Agent</h5>
								<p>
									???Booking from trippy always has been successful and all our
									clients enjoy to the fullest.???
								</p>
							</Col>
						</Row>
					</Grid>
				</Grid>
			</div>
		);
	}
}
