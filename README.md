# Ru

# Проект: Место (frontend + backend)

Учебный проект выполненный в рамках курса "Веб-разработчик" от Яндекс Практикум.
Проект представляет из себя веб-приложение в сборе, имеющие бэкенд часть, основой для которой послужил [проект](https://github.com/TsiNik2508/express-mesto-gha) также выполненный в рамках учебного курса, а также фронтенд часть, основой для которого послужил ещё один [проект](https://github.com/TsiNik2508/react-mesto-auth) выполненный в рамках указанного выше учебного курса.

## Оглавление

- [Обзор проекта](#обзор-проекта)
  - [Задачи проекта](#задачи-проекта)
  - [Функциональность проекта](#функциональность-проекта)
  - [Директории проекта](#директории-проекта)
  - [Запуск проекта](#запуск-проекта)
- [Ход выполнения проекта](#ход-выполнения-проекта)
  - [Используемые технологии](#используемые-технологии)
  - [Чему я научился работая над проектом](#чему-я-научился-работая-над-проектом)

## Обзор проекта

### Задачи проекта

Проект призван закрепить вре ранее полученные в рамках учебного курса знания. Создать полностью рабочее веб-приложение, и разместить его на хостинге.

### Функциональность проекта

- Backend:
  - В проекте созданы схемы и модели пользователей и карточек с контентом:
    - `card` — схема карточки с контентом
    - `user` — схема пользователя
  - В проекте созданы эндпоинты:
    - `/cards` — обрабатывает:
      - GET запросы — отдаёт все карточки из БД
      - POST запросы — создаёт новую карточку с контентом
    - `/cards/:cardId` — обрабатывает DELETE запросы, удаляет карточку по `cardId`
    - `/cards/:cardId/likes` — обрабатывает:
      - PUT запросы — добавляет лайк карточке с контентом
      - DELETE запросы — удаляет лайк карточке с контентом
    - `/signin` — обрабатывает POST запросы, производит аутентификацию пользователя
    - `/signup` — обрабатывает POST запросы, производит регистрацию пользователя
    - `/users` — обрабатывает:
      - GET запросы — отдаёт всех пользователей из БД
      - POST запросы — создаёт нового пользователя
    - `/users/:userId` — обрабатывает GET запросы, отдаёт пользователя по `userId`
    - `/users/me` — обрабатывает:
      - GET запросы — отдаёт информацию о текущем пользователе
      - PATCH запросы — обновляет информацию о пользователе
      - DELETE запросы — производит выход пользователя, с удалением JWT-токена из Cookie
    - `/users/me/avatar` — обрабатывает PATCH запросы, обновляет аватар пользователя
  - Созданы мидлвары:
    - Централизованной обработки ошибок
    - Авторизации пользователя
    - Ограничитель количества запросов (защита от DDoS атак)
    - Поддержки CORS запросов, включая обработку предварительных запросов
    - Логирования запросов и ошибок
  - Производится валидация поступающих данных:
    - до передачи информации контроллерам с помощью joi и celebrate
    - на уровне схем с помощью validator и встроенных методов mongoose
- Frontend:
  - Возможность регистрации и аутентификации пользователя
  - Возможность редактировать информацию о пользователе (установить имя пользователя, информацию «о себе», аватар)
  - Возможность создавать карточки мест (добавить\удалить карточку места, поставить\снять лайк карточке)
  - Возможность просматривать детальную фотографию карточки
  - Реализована валидация форм с помощью кастомного хука

### Директории проекта

- `/backend` — директория с файлами бэкенд части проекта
  - `/controllers` — директория с файлами контроллеров
  - `/errors` — директория с файлами кастомных ошибок
  - `/middlewares` — директория с мидлварами
  - `/models` — директория с файлами описания схем и моделей
  - `/routes` — директория с файлами роутера
  - `/utils` — директория со вспомогательными файлами
- `/frontend` — директория с файлами фронтенд части проекта
  - `src/blocks` — директория с CSS файлами
  - `src/components` — директория с компонентами
  - `src/contexts` — директория с элементами контекста
  - `src/fonts` — директория со шрифтами
  - `src/images` — директория с файлами изображений
  - `src/utils` — директория со вспомогательными файлами
  - `src/vendor` — директория с файлами библиотек

### Запуск проекта

- Backend:
  - `npm lint` — запускает проверку линтером
  - `npm run start` — запускает сервер
  - `npm run dev` — запускает сервер с hot-reload
- Frontend:
  - `npm run build` — запуск проекта в режиме продакшн, с формированием файлов подготовленных к деплою в директории `/build`
  - `npm start` — запуск проекта в режиме разработки

## Ход выполнения проекта

### Используемые технологии

- [Node.js](https://nodejs.org/ru)
- [nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [celebrate](https://www.npmjs.com/package/celebrate)
- [validator](https://www.npmjs.com/package/validator)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [helmet](https://helmetjs.github.io/)
- [winston](https://www.npmjs.com/package/winston)
- [express-winston](https://www.npmjs.com/package/express-winston)
- [ESLint](https://eslint.org/)

### Чему я научился работая над проектом

- Разворачивать сервер на Node.js
- Использовать в работе фреймворк Express
- Работать с БД MongoDB
- Использовать в работе с БД ODM mongoose
- Создавать схемы и модели для работы с БД
- Обрабатывать различные виды запросов
- Обрабатывать ошибки некорректных запросов
- Валидировать приходящую в запросе информацию
- Работать с JWT-токеном
- Работать с Cookies
- Базовой защите приложения
- Логированию
- Работе с CORS
- Деплою проекта на реальный хостинг

# En

# Project: Mesto (frontend + backend)

This is an educational project completed as part of the "Web Developer" course from Yandex Practicum. The project is a web application that includes both frontend and backend parts. The backend is based on the [project](https://github.com/TsiNik2508/express-mesto-gha) also completed as part of the course, while the frontend is based on another [project](https://github.com/TsiNik2508/react-mesto-auth) completed within the same educational program.

## Table of Contents

- [Project Overview](#project-overview)
  - [Project Goals](#project-goals)
  - [Project Functionality](#project-functionality)
  - [Project Directories](#project-directories)
  - [Project Setup](#project-setup)
- [Project Execution](#project-execution)
  - [Technologies Used](#technologies-used)
  - [What I Learned](#what-i-learned)

## Project Overview

### Project Goals

The project aims to reinforce the knowledge acquired during the educational course. It involves creating a fully functional web application and deploying it to a hosting service.

### Project Functionality

- Backend:
  - Schemas and models for users and cards with content are created in the project:
    - `card` — card schema with content
    - `user` — user schema
  - Endpoints are created in the project:
    - `/cards` — handles:
      - GET requests — retrieves all cards from the database
      - POST requests — creates a new card with content
    - `/cards/:cardId` — handles DELETE requests, deletes the card by `cardId`
    - `/cards/:cardId/likes` — handles:
      - PUT requests — adds a like to the card with content
      - DELETE requests — removes a like from the card with content
    - `/signin` — handles POST requests, authenticates the user
    - `/signup` — handles POST requests, registers the user
    - `/users` — handles:
      - GET requests — retrieves all users from the database
      - POST requests — creates a new user
    - `/users/:userId` — handles GET requests, retrieves the user by `userId`
    - `/users/me` — handles:
      - GET requests — retrieves information about the current user
      - PATCH requests — updates user information
      - DELETE requests — logs out the user, deleting the JWT token from the Cookie
    - `/users/me/avatar` — handles PATCH requests, updates the user's avatar
  - Middleware is created:
    - Error handling middleware
    - User authorization middleware
    - Request rate limiter middleware (DDoS attack protection)
    - CORS support middleware, including preflight requests handling
    - Request and error logging middleware
  - Data validation is performed:
    - Before passing information to controllers using joi and celebrate
    - At the schema level using validator and mongoose built-in methods
- Frontend:
  - User registration and authentication functionality
  - Ability to edit user information (set username, "about" information, avatar)
  - Ability to create place cards (add/delete a place card, like/unlike a card)
  - Ability to view a detailed photo of a card
  - Form validation is implemented using a custom hook

### Project Directories

- `/backend` — directory with backend project files
  - `/controllers` — directory with controller files
  - `/errors` — directory with custom error files
  - `/middlewares` — directory with middleware files
  - `/models` — directory with schema and model description files
  - `/routes` — directory with router files
  - `/utils` — directory with utility files
- `/frontend` — directory with frontend project files
  - `src/blocks` — directory with CSS files
  - `src/components` — directory with component files
  - `src/contexts` — directory with context element files
  - `src/fonts` — directory with font files
  - `src/images` — directory with image files
  - `src/utils` — directory with utility files
  - `src/vendor` — directory with library files

### Project Setup

- Backend:
  - `npm lint` — runs lint checks
  - `npm run start` — starts the server
  - `npm run dev` — starts the server with hot-reload
- Frontend:
  - `npm run build` — builds the project in production mode, creating deployment-ready files in the `/build` directory
  - `npm start` — starts the project in development mode

## Project Execution

### Technologies Used

- [Node.js](https://nodejs.org/)
- [nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [celebrate](https://www.npmjs.com/package/celebrate)
- [validator](https://www.npmjs.com/package/validator)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [helmet](https://helmetjs.github.io/)
- [winston](https://www.npmjs.com/package/winston)
- [express-winston](https://www.npmjs.com/package/express-winston)
- [ESLint](https://eslint.org/)

### What I Learned

- Setting up a Node.js server
- Using the Express framework in work
- Working with MongoDB
- Using mongoose as an ODM
- Creating schemas and models for working with the database
- Handling various types of requests
- Handling errors from incorrect requests
- Validating incoming request data
- Working with JWT tokens
- Working with Cookies
- Basic application security
- Logging
- CORS handling
- Deploying the project to a real hosting
