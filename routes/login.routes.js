const express = require("express");
const router = express.Router();

const ReactDOMServer = require("react-dom/server");
const React = require("react");

const LoginPage = require("../components/views/LoginPage/LoginPage");
const { User } = require("../db/models");
const bcrypt = require("bcrypt");

router.get("/login", (req, res) => {
    const component = React.createElement(LoginPage, { user: res.locals.user });
    const html = ReactDOMServer.renderToStaticMarkup(component);
    res.send(`<!DOCTYPE html>\n${html}`);
});

router.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const findUser = await User.findOne({ where: { email } });

        const isSamePassword = await bcrypt.compare(
            password,
            findUser.password
        );
        if (findUser && isSamePassword) {
            req.session.user_sid = findUser.id;
            res.sendStatus(204);
        } else {
            res.status(403).json({ message: "Inncorect email or password" });
        }
    } catch (error) {
        console.log("ERROR LOGIN:", error);
        res.status(503).json({ message: "ERROR WHILE FIND USER" });
    }
});

module.exports = router;
