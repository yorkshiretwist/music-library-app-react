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
				<h1>Stats</h1>
				<p>It appears I like mid-nineties stuff a lot.</p>
				<EndBody />
			</body>
		</html>
	);
};

export default Home;