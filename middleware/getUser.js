const { User } = require("../db/models");

const userSession = async (req, res, next) => {
    try {
        // Проверяем, существует ли в сессии свойство user_sid
        if (req.session?.user_sid) {
            // Если существует, ищем пользователя в базе данных по этому ID
            const user = await User.findByPk(req.session.user_sid);
            console.log("user", user);

            // Если пользователь найден, сохраняем его данные в res.locals.user
            // Если не найден, сохраняем null
            res.locals.user = user ? user.get() : null;
        } else {
            // Если user_sid в сессии нет, сохраняем null в res.locals.user
            res.locals.user = null;
        }
        // Вызываем следующий middleware
        next();
    } catch (error) {
        // Если произошла ошибка, выводим сообщение в консоль
        console.log("USER NOT FOUND: ", error);
        // Передаем ошибку следующему middleware
        next(error);
    }
};

module.exports = userSession;
