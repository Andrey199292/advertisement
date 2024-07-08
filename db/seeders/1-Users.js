"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    id: 1,
                    name: "Андрей",
                    email: "andrey92@gmail.com",
                    password: "123",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: "Юрий",
                    email: "ura@gmail.com",
                    password: "123",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    id: 3,
                    name: "Seny",
                    email: "seny@gmail.com",
                    password: "123",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    name: "Valera",
                    email: "valera@gmail.com",
                    password: "123",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    name: "Ula",
                    email: "ula@gmail.com",
                    password: "123",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    name: "Oly",
                    email: "oly@gmail.com",
                    password: "123",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 7,
                    name: "Elizaveta",
                    email: "elizaveta@gmail.com",
                    password: "123",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 8,
                    name: "Vova",
                    email: "Vova@gmail.com",
                    password: "123",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 9,
                    name: "Sasha",
                    email: "sasha@gmail.com",
                    password: "123",
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
