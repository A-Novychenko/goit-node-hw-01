CLI-додаток для роботи з колекцією котактів. Виводить список контактів у вигляді таблиці (console.table)

Команди:

# Отримати всі контакти

node index.js --action list

# Отримати контакт по id

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

# Додати контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Видалити контакт

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
