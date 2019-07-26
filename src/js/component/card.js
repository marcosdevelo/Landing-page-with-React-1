import React from "react";

//create your first component
export class Card extends React.Component {
	render() {
		return (
			<div className="col-3">
				<div className="card pupusito">
					<img
						src="http://placehold.it/500x325"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		);
	}
}
