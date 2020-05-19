import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../templates/Home.js";
import Albums from "../templates/Albums.js";
import Artists from "../templates/Artists.js";
import Stats from "../templates/Stats.js";

const App = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/albums" component={Albums} />
		<Route exact path="/artists" component={Artists} />
		<Route exact path="/stats" component={Stats} />
	</Switch>
);

export default App;