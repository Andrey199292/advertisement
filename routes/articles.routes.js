const express = require("express");
const router = express.Router();

const { Article } = require("../db/models");

const authMiddleware = require("../middleware/authMiddleware");
const articlePermission = require("../middleware/articlePermission");

// Обработчик POST запроса для сохранения данных формы
router.post("/api/new", authMiddleware, async (req, res) => {
    try {
        // Получаем данные из тела запроса
        const { title, price, desc, category_id } = req.body;

        const user_id = Number(req.session.user_sid);

        // Создаем новую статью (пример использования Sequelize)
        const newArticle = await Article.create({
            title,
            price,
            desc,
            category_id,
            user_id, // Устанавливаем user_id из сессии
        });

        // Извлекаем id из созданной статьи
        const { id } = newArticle;

        // Отправляем успешный ответ
        res.status(200).json({ message: "OK", id });
    } catch (error) {
        console.error("Error adding new card:", error);
        res.status(500).json({ error: "Failed to add new card" });
    }
});

// маршрут для редактирования карточки
router.put(`/api/upd`, articlePermission, authMiddleware, async (req, res) => {
    try {
        const { title, price, desc, id } = req.body;

        const newArticle = await Article.update(
            { title, price, desc },
            { where: { id: Number(id) } }
        );
        res.status(201).json({
            message: "Ok",
            updatedArticle: { id, title, price, desc },
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

//удаление карточки
router.delete(
    "/category/",
    articlePermission,
    authMiddleware,
    async (req, res) => {
        try {
            const { id } = req.body;

            await Article.destroy({ where: { id: Number(id) } });
            res.json({ message: "OK" });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
);

module.exports = router;
