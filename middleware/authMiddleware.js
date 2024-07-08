// authMiddleware.js

const authMiddleware = (req, res, next) => {
    if (req.session.user_sid) {
        // Если пользователь аутентифицирован, пропускаем запрос дальше
        next();
    } else {
        // Если пользователь не аутентифицирован, возвращаем ошибку 401 (Unauthorized)
        res.status(401).json({ message: "Не авторизован" });
    }
};

module.exports = authMiddleware;
