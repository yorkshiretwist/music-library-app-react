import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../app/App.js";

const server = express();
server.use(express.static("dist"));

const context = {};

server.get("*", (req, res) => {
	const initialMarkup = ReactDOMServer.renderToString(
<StaticRouter location={req.url} context={context}>
  <App />
</StaticRouter>
);

  res.send(`<!doctype html>${initialMarkup}`);
});

server.listen(4242, () => console.log("Server is running..."));
