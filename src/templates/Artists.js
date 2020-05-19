import React from "react";
import Head from "../structure/Head.js";
import StartBody from "../structure/StartBody.js";
import EndBody from "../structure/EndBody.js";

const Home = () => {
	return (
		<html>
			<Head title="Artists" />
			<body>
				<StartBody />
				<h1>Here be artists</h1>
				<p>Aren't they beautiful?</p>
				<EndBody />
			</body>
		</html>
	);
};

export default Home;