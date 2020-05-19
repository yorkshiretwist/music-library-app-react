import React from "react";
import { Link } from "react-router-dom";

const StartBody = () => <>
    <ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/artists">Artists</Link></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/stats">Stats</Link></li>
	</ul>
</>;

export default StartBody;