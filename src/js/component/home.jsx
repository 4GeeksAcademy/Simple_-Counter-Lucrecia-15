import React from "react";
import Counter from "./Counter";
import Button from "./Button";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center bg-dark text-white">
		  <Counter></Counter>
		</div>
		
	);
};

export default Home;
