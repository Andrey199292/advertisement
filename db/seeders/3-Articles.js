"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Articles",
            [
                {
                    title: "1 комнатная квартира в СПБ",
                    price: 10,
                    desc: "Такая стоимость в хорошем районе Спб",
                    category_id: 1,
                    user_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "2 комнатная квартира в СПБ",
                    price: 15,
                    desc: "Такая стоимость в хорошем районе Спб",
                    category_id: 1,
                    user_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "3 комнатная квартира в СПБ",
                    price: 20,
                    desc: "Такая стоимость в хорошем районе Спб",
                    category_id: 1,
                    user_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Geely Atlas Pro",
                    price: 3.5,
                    desc: "Стоимость данной модели в салоне",
                    category_id: 2,
                    user_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Geely Atlas Pro",
                    price: 2.8,
                    desc: "Стоимость данной модель через год использования",
                    category_id: 2,
                    user_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Geely Atlas Pro",
                    price: 1,
                    desc: "Стоимость данной модели при утилизации",
                    category_id: 2,
                    user_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Руль",
                    price: 4000,
                    desc: "Новый, только купил",
                    category_id: 3,
                    user_id: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Колесо",
                    price: 5000,
                    desc: "Год в использование",
                    category_id: 3,
                    user_id: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Ноускат",
                    price: 30000,
                    desc: "Ноускат для Тойоты Королла с доставкой из Владивостока",
                    category_id: 3,
                    user_id: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
