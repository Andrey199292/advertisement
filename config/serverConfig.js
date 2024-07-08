const path = require("path");

const express = require("express");
const morgan = require("morgan");

const serverConfig = (app) => {
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
};

module.exports = serverConfig;
