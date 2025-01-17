import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar"; // componente con export default
import { Footer } from "./Footer"; // componente con export const
import { Jumbotron } from "./Jumbotron"
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { Card } from "./Card.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Alert />
			<Spinner />
			<h1 className="text-center mt-5">Intro React</h1>
			<Card />
			{/* <Jumbotron /> */}
			{/*<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			*/}

			<Footer />
		</div>
	);
};

export default Home;
