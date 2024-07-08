"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Categories",
            [
                {
                    title: "Недвижимость",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Авто",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    title: "Запчасти",
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
