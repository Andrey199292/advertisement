const React = require("react");

module.exports = function Categories({ categories }) {
    return (
        <div className="row">
            {categories.map((category) => (
                <div key={category.id} className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                            <h5 className="card-title">{category.title}</h5>
                            <a
                                data-id={category.id}
                                href={`/category/${category.id}`}
                                className="btn btn-primary w-100"
                            >
                                {category.title}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// - categories.map((category) => (...)) -
// Используется метод массива map для итерации по
// каждому элементу в массиве categories.
// Для каждого элемента создается новый элемент JSX,
//  представляющий карточку статьи.
