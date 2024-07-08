require("@babel/register");
require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const bodyParser = require("body-parser");

const serverConfig = require("./config/serverConfig");

const indexRouter = require("./routes/index.routes");
const categoriesRouter = require("./routes/categories.routes");
const articleRouter = require("./routes/articles.routes");
const loginRouter = require("./routes/login.routes");
const registerRouter = require("./routes/register.routes");
const logoutRouter = require("./routes/logout.routes");

//middleware для првоерки создания сессий
const userSession = require("./middleware/getUser");

const PORT = 3000;

const sessionConfig = {
    store: new FileStore(), // настройка файлового хранилища
    name: "user_sid", // имя куки для хранения id сессии (НАЗВАНИЕ ЛЮБОЕ)
    secret: process.env.SESSION_SECRET ?? "123ewffasd3242", // для шифрования id сессии (ШИФР ЛЮБОЙ)
    resave: false, // не пересохранять куку при каждом запросе
    saveUninitialized: false, // не создавать сессию без записи в req.session
    cookie: {
        maxAge: 1000 * 60 * 60 * 12, // срок действия куки в миллисекундах
        httpOnly: true,
    },
};

serverConfig(app);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session(sessionConfig));
app.use(userSession);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", categoriesRouter);
app.use("/", articleRouter);
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", logoutRouter);

app.listen(PORT, () => {
    console.log(`Server started port: ${PORT}`);
});
