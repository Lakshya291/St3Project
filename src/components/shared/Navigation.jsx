import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "../../Styles/navigation.css";

export default class Navigation extends Component {
	render() {
		return (
			<Navbar fixedTop default collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">
							<h5 className="logo fa-2x">Trippy</h5>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} componentClass={Link} href="/" to="/">
							<h4>Home</h4>
						</NavItem>
						<NavItem
							eventKey={2}
							componentClass={Link}
							href="/about"
							to="/about"
						>
							<h4>About</h4>
						</NavItem>
						<NavItem
							eventKey={3}
							componentClass={Link}
							href="/services"
							to="/services"
						>
							<h4>Services</h4>
						</NavItem>
						<NavItem
							eventKey={4}
							componentClass={Link}
							href="/contact"
							to="/contact"
						>
							<h4>Contact</h4>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
