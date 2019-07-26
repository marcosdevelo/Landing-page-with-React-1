import React from "react";
//include images into your bundle

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Navbar />
				<Jumbotron />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}
