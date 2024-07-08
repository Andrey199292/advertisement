const express = require("express");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const Main = require("../components/views/Main");
const { Category } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        //читаем из бд
        const dataDB = await Category.findAll();
        //приводим к объекту
        const categories = JSON.parse(JSON.stringify(dataDB));
        // создаем Реакт компонент
        const main = React.createElement(Main, {
            title: "Все категории",
            categories,
            user: res.locals.user,
        });
        //отрисовываем Реакт компонент
        const html = ReactDOMServer.renderToStaticMarkup(main);
        res.write("<!DOCTYPE html>");
        res.end(html);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
