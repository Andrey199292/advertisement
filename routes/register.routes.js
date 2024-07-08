const express = require("express");
const router = express.Router();

const ReactDOMServer = require("react-dom/server");
const React = require("react");

const RegisterPage = require("../components/views/RegisterPage/RegisterPage");
const { User } = require("../db/models");

const bcrypt = require("bcrypt");

router.get("/register", (req, res) => {
    const component = React.createElement(RegisterPage, {
        user: res.locals.user,
    });
    const html = ReactDOMServer.renderToStaticMarkup(component);
    res.send(`<!DOCTYPE html>\n${html}`);
});

router.post("/api/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const findUser = await User.findOne({ where: { email } });

        // Хешируем пароль
        const hashedPassword = await bcrypt.hash(password, 6);

        if (!findUser) {
            const user = await User.create({
                name,
                email,
                password: hashedPassword,
            });

            res.sendStatus(200);
        } else
            res.status(403).json({ message: "Пользователь зарегистрирован" });
    } catch (error) {
        console.log("Error Register", error);
        res.status(503).json({ message: "Все плохо" });
    }
});

module.exports = router;
