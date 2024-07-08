const React = require("react");
const Layout = require("./Layout");
const Categories = require("./Categoryes/Categoryes");

module.exports = function Main({ title, categories, user }) {
    return (
        <Layout title={title} user={user}>
            <div className="container mt-4">
                <Categories categories={categories} user={user} />
            </div>
        </Layout>
    );
};

//- <Layout> - Оборачивает весь компонент в некую
//  структуру, возможно, представляющую
//  общий макет страницы или раздела.
//  Это позволяет инкапсулировать повторяющиеся элементы
//   оформления.
