# Настройка приложения

## Ипорт БД 

### `test.sql`

Импортировать БД в phpmyadmin

### `Запуск сервера`

cd server | npm start 
Адрес сервера: http://localhost:3002

### `Запуск клиента`

cd client | npm start
Адрес клиента: http://localhost:3000
Логин - Пусто
Пароль - Пусто

## Добавление данных в БД (информация о студенте)
` INSERT INTO `user`(`name`, `surname`, `patronymic`, `university`) VALUES ('Васильев','Александр','Владимирович','ВФ МАДИ') `
