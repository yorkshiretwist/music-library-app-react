import React from "react";
import Head from "../structure/Head.js";
import StartBody from "../structure/StartBody.js";
import EndBody from "../structure/EndBody.js";

const Home = () => {
	return (
		<html>
			<Head title="Home" />
			<body>
				<StartBody />
				<h1>Welcome to the app</h1>
				<p>This is a simple music library app built with React</p>
				<EndBody />
			</body>
		</html>
	);
};

export default Home;