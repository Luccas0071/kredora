# Adicionar Migration
npx typeorm migration:create migrations/CreateUser 

# Executar Migration
npx typeorm migration:run


![alt text](<ChatGPT Image 22 de nov. de 2025, 15_20_59.png>)


# Executar Migration no container
npx typeorm migration:run -d dist/shared/database/postgresql/datasource.js
