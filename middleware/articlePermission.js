const { Article } = require("../db/models");

// Middleware для проверки доступа к статье
const articlePermission = async (req, res, next) => {
    try {
        const { id } = req.body;

        const currentUser = req.session.user_sid;

        // Проверка наличия статьи
        const article = await Article.findByPk(id);
        if (!article) {
            return res.status(404).json({ message: "Статья не найдена" });
        }

        // Проверка соответствия пользователя
        if (article.user_id !== currentUser) {
            return res
                .status(403)
                .json({ message: "У вас нет прав на изменение этой статьи" });
        }

        // Передача управления следующему middleware
        next();
    } catch (error) {
        console.error("Permission error:", error);
        next(error);
    }
};

module.exports = articlePermission;
