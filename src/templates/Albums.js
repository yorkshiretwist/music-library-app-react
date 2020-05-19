import React from "react";
import Head from "../structure/Head.js";
import StartBody from "../structure/StartBody.js";
import EndBody from "../structure/EndBody.js";

const Home = () => {
	return (
		<html>
			<Head title="Albums" />
			<body>
				<StartBody />
				<h1>These are my albums</h1>
				<p>What a lot of tasty music.</p>
				<EndBody />
			</body>
		</html>
	);
};

export default Home;