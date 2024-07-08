const React = require("react");
const Layout = require("../Layout");

module.exports = function ArticleCard({ title, articles, user }) {
    return (
        <Layout user={user}>
            <div className="container">
                <div className="row">
                    <div class="col">
                        <h1>{title}</h1>
                        <a>
                            <button class="new-card btn btn-primary">
                                Добавить карточку
                            </button>
                        </a>
                    </div>
                </div>
                <div id="formContainer" class="mt-4">
                    <form name="add-card" class="add-card hidden">
                        <div class="mb-3">
                            <label htmlFor="title" class="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                class="form-control"
                                placeholder="Title"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">
                                Price
                            </label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                class="form-control"
                                placeholder="Price"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="desc" class="form-label">
                                Description
                            </label>
                            <textarea
                                id="desc"
                                name="desc"
                                class="form-control"
                                placeholder="Description"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">
                            Добавить
                        </button>
                    </form>
                </div>
                <div className="updateContainer">
                    <form name="upd-card" class="upd-card hidden">
                        <h2>Обновить карточку</h2>
                        <div class="mb-3">
                            <label htmlFor="title" class="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                class="form-control"
                                placeholder="Title"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">
                                Price
                            </label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                class="form-control"
                                placeholder="Price"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="desc" class="form-label">
                                Description
                            </label>
                            <textarea
                                id="desc"
                                name="desc"
                                class="form-control"
                                placeholder="Description"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">
                            Отправить
                        </button>
                    </form>
                </div>
                <div id="articlesContainer" className="row">
                    {articles.map((article) => {
                        return (
                            <div
                                key={article.id}
                                class="article-card col-lg-4 col-md-6 mb-4"
                                id={`article-${article.id}`} /* Уникальный идентификатор для каждой карточки */
                            >
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            {article.title}
                                        </h3>
                                        <p className="card-price">
                                            Цена: {article.price}
                                        </p>
                                        <p className="card-desc">
                                            {article.desc}
                                        </p>

                                        <button
                                            data-id={article.id}
                                            className="btn btn-outline-secondary upd mr-2"
                                        >
                                            Редактировать
                                        </button>

                                        <button
                                            data-id={article.id}
                                            className="btn btn-danger delBtn"
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

// - articles.map((article, index) => (...)) - Используется метод массива map
//  для итерации по каждому элементу в массиве articles.
//  Для каждого элемента создается новый элемент JSX, представляющий карточку статьи.

// - key={index} - key является уникальным идентификатором для каждого элемента списка.
// В данном случае, используется индекс элемента массива. Хотя использование индексов
//  как ключей не рекомендуется для динамических списков, здесь это демонстрационный код.

// - <div className="article-card"> - Внутренний контейнер для данных одной статьи.
//  Присваивается CSS-класс article-card.
