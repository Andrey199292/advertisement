let delBtns = document.getElementsByClassName("delBtn"); // Получение всех кнопок удаления
let updCards = document.querySelectorAll(".btn-outline-secondary"); // Получение кнопок редактирования

const updateForm = document.querySelector(".upd-card"); // Получение формы редактирования по имени формы

const addForm = document.querySelector(".add-card"); // Получение формы добавления по классу
const addBtn = document.querySelector(".new-card"); // Получение кнопки добавления новой карточки по классу
const formContainer = document.getElementById("articlesContainer"); // Получение контейнера для карточек по ID

document.addEventListener("DOMContentLoaded", () => {
    // Добавление обработчика события для загрузки DOM
    const addDeleteButtonHandler = (btn) => {
        // Функция для добавления обработчика события удаления к кнопке
        btn.addEventListener("click", async (event) => {
            // Асинхронный обработчик клика на кнопку удаления
            event.preventDefault(); // Предотвращение стандартного действия кнопки
            try {
                const { id } = event.target.dataset; // Получение ID карточки из атрибута data-id кнопки

                const res = await fetch(`/category/`, {
                    // Отправка запроса на сервер для удаления категории
                    method: "DELETE", // Метод HTTP-запроса
                    headers: { "Content-Type": "application/json" }, // Заголовки запроса
                    body: JSON.stringify({ id }), // Тело запроса с ID карточки
                });

                const data = await res.json(); // Ожидание и парсинг ответа в формате JSON

                if (data.message === "OK") {
                    // Проверка, успешен ли запрос
                    btn.parentNode.parentNode.parentNode.remove(); // Удаление карточки из DOM
                } else {
                    alert(
                        "Походу карточка не твоя или ты не зарегистрирован!!!"
                    ); // Вывод сообщения об ошибке
                }
            } catch (error) {
                console.log(error); // Вывод ошибки в консоль
            }
        });
    };

    //Array.from(delBtns).forEach(addDeleteButtonHandler); // Добавление обработчиков событий для всех кнопок удаления

    const updButtonHandler = (btn) => {
        btn.addEventListener("click", async (event) => {
            event.preventDefault();
            updateForm.classList.toggle("upd-card");

            currentEditId = btn.getAttribute("data-id");
            const article = btn.closest(".card-body");

            if (article) {
                const titleElement = article.querySelector(".card-title");
                const priceElement = article.querySelector(".card-price");
                const descElement = article.querySelector(".card-desc");

                if (titleElement && priceElement && descElement) {
                    const title = titleElement.textContent;
                    const price = priceElement.textContent.split(": ")[1];
                    const desc = descElement.textContent;

                    updateForm.querySelector('[name="title"]').value = title;
                    updateForm.querySelector('[name="price"]').value = price;
                    updateForm.querySelector('[name="desc"]').value = desc;
                } else {
                    console.error(
                        "One or more elements not found in the card."
                    );
                }
            }
        });
    };

    const addEventHandlers = () => {
        Array.from(delBtns).forEach(addDeleteButtonHandler);
        Array.from(updCards).forEach(updButtonHandler);
    };

    addEventHandlers(); // Initial event handlers

    updateForm.addEventListener("submit", async (event) => {
        // Асинхронный обработчик отправки формы редактирования
        event.preventDefault(); // Предотвращение стандартного действия формы
        try {
            const formData = {
                // Формирование данных для отправки
                id: currentEditId,
                title: updateForm.title.value, // Получение значения поля title
                price: updateForm.price.value, // Получение значения поля price
                desc: updateForm.desc.value, // Получение значения поля desc
            };

            const res = await fetch(`/api/upd`, {
                // Отправка запроса на сервер для обновления категории
                method: "PUT", // Метод HTTP-запроса
                headers: { "Content-type": "application/json" }, // Заголовки запроса
                body: JSON.stringify(formData), // Тело запроса с данными формы
            });

            const data = await res.json(); // Ожидание и парсинг ответа в формате JSON

            if (data.message === "Ok") {
                // Обновление карточки на клиенте без перезагрузки страницы
                const articleElement = document.getElementById(
                    `article-${currentEditId}`
                );
                if (articleElement) {
                    articleElement.querySelector(".card-title").textContent =
                        formData.title;
                    articleElement.querySelector(
                        ".card-price"
                    ).textContent = `Цена: ${formData.price}`;
                    articleElement.querySelector(".card-desc").textContent =
                        formData.desc;

                    // Скрыть форму редактирования после успешного обновления
                    updateForm.classList.add("upd-card");
                } else {
                    console.error(
                        `Статья с ID ${currentEditId} не найдена в DOM`
                    );
                }
            } else {
                console.error("Ошибка при обновлении статьи на сервере");
            }
        } catch (error) {
            console.error("Ошибка при отправке запроса на сервер", error);
        }
    });

    if (addBtn) {
        // Проверка существования кнопки добавления
        addBtn.addEventListener("click", (event) => {
            // Обработчик клика на кнопку добавления
            event.preventDefault(); // Предотвращение стандартного действия кнопки
            addForm.classList.toggle("add-card"); // Переключение видимости формы добавления
        });
    } else {
        console.error("Кнопка не найдена"); // Вывод ошибки в консоль, если кнопка не найдена
    }

    addForm.addEventListener("submit", async (event) => {
        // Асинхронный обработчик отправки формы добавления
        event.preventDefault(); // Предотвращение стандартного действия формы
        try {
            const formData = new FormData(addForm); // Создание объекта FormData из формы

            const data = Object.fromEntries(formData.entries()); // Преобразование FormData в объект

            const { title, price, desc } = data; // Деструктуризация данных из формы

            const categoryIdFromUrl = window.location.pathname.split("/").pop(); // Получение ID категории из URL

            const res = await fetch(`/api/new`, {
                // Отправка запроса на сервер для создания новой карточки
                method: "POST", // Метод HTTP-запроса
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    price,
                    desc,
                    category_id: categoryIdFromUrl,
                }),
            });

            const response = await res.json(); // Ожидание и парсинг ответа в формате JSON

            const { id } = response; // Получение ID новой карточки из ответа

            if (response.message === "OK") {
                // Проверка, успешен ли запрос
                const card = document.createElement("div"); // Создание нового элемента div для карточки
                card.classList.add("card"); // Добавление классов Bootstrap к карточке
                card.id = `article-${id}`;
                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">${title}</h3>
                            <p class="card-price">Цена: ${price}</p>
                            <p class="card-desc">${desc}</p>
                            <a data-id="${id}" class="btn btn-outline-secondary mr-2">Редактировать</a>
                            <button data-id="${id}" class="btn btn-danger delBtn">Удалить</button>
                        </div>
                    </div>`;
                formContainer.append(card); // Добавление новой карточки в контейнер
                console.log("Card added:", card); // Вывод информации о добавленной карточке в консоль

                // Скрыть форму ввода после добавления карточки
                addForm.classList.add("add-card");

                // Очистить форму после добавления
                addForm.reset();

                // Добавить обработчик события для новой кнопки удаления/обновления
                // Update the collections
                delBtns = document.getElementsByClassName("delBtn");
                updCards = document.querySelectorAll(".btn-outline-secondary");

                addEventHandlers();
            } else {
                console.error("Failed to add card:", response); // Вывод ошибки в консоль, если запрос не успешен
            }
        } catch (error) {
            console.error("Ошибка при добавлении карточки:", error); // Вывод ошибки в консоль
        }
    });
});
