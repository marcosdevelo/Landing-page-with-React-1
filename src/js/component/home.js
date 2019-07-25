import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
			</div><li class="nav-item">
							<a class="nav-link" href="#">
								Features
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link disabled"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
