const express = require("express");
const router = express.Router();

const ReactDOMServer = require("react-dom/server");
const React = require("react");

const ArticleCard = require("../components/views/articles/ArticleCard");
const { Article, Category } = require("../db/models");
const articlePermission = require("../middleware/articlePermission");
const authMiddleware = require("../middleware/authMiddleware");

//отрисовываем категории на главной странице
router.get("/", authMiddleware, async (req, res) => {
    try {
        // получаем массив данных из БД
        const data = await Article.findAll();
        //приводим массив к объетам без мета-данных
        const articleObj = JSON.parse(JSON.stringify(data));
        //создание Реакт элемента
        const articlesElement = React.createElement(ArticleCard, {
            articles: articleObj,
            article,
        });
        //отрисовываем Реакт компонент
        const html = ReactDOMServer.renderToStaticMarkup(articlesElement);
        res.write("<!DOCTYPE html>");
        res.end(html);
    } catch (error) {
        console.log(error);
    }
});

//отрисовывает карточки определенной категории
router.get(`/category/:id`, authMiddleware, async (req, res) => {
    try {
        // Получаем ID категории из параметров URL
        const { id } = req.params;

        // Ищем данные категории по ID в базе данных, выбираем только поле "title"
        const categoryData = await Category.findOne({
            where: { id: id },
            attributes: ["title"],
        });

        // Преобразуем полученные данные категории в JSON и парсим их обратно в объект
        const categoryTitle = JSON.parse(JSON.stringify(categoryData));

        // Ищем все статьи, принадлежащие данной категории (по ID категории)
        // Выбираем только поля "id", "title", "price", "desc" и "category_id"
        const articles = await Article.findAll({
            where: { category_id: Number(id) },
            attributes: ["id", "title", "price", "desc", "category_id"],
        });

        // Преобразуем полученные данные статей в JSON и парсим их обратно в массив объектов
        const articleData = JSON.parse(JSON.stringify(articles));

        // Создаем React элемент компонента ArticleCard, передавая ему данные категории и статьи
        const component = React.createElement(ArticleCard, {
            title: categoryTitle.title,
            articles: articleData,
            user: res.locals.user,
        });

        // Рендерим React элемент в статическую разметку HTML
        const html = ReactDOMServer.renderToStaticMarkup(component);

        // Отправляем полученный HTML в ответ клиенту
        res.send(html);
    } catch (error) {
        // В случае ошибки отправляем статус 500 и сообщение об ошибке в формате JSON
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
