import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";

const server = express();
server.use(express.static("dist"));

server.get("/", (req, res) => {
	const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`<!doctype html>${initialMarkup}`);
});

server.listen(4242, () => console.log("Server is running..."));
