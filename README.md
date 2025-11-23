📘 Kredora — Sistema de Controle Financeiro

Projeto criado para estudo da Arquitetura Hexagonal, GraphQL, Next.js, PostgreSQL, TypeORM, Docker e Migrations.

📚 Sobre o Projeto

O Kredora é um sistema de controle financeiro desenvolvido com foco em boas práticas arquiteturais e escalabilidade.
Ele utiliza Arquitetura Hexagonal (Ports & Adapters), com comunicação via GraphQL, e banco de dados PostgreSQL.

O projeto foi criado com o objetivo de praticar:

Arquitetura Hexagonal aplicada ao backend

GraphQL para queries e mutations

Next.js como camada de apresentação

Controle de estado e regras internas bem definidas

Migrations com TypeORM

Execução em containers Docker

🧱 Arquitetura

A aplicação segue o padrão Arquitetura Hexagonal, dividida em:

Domain — Regras de negócio, entidades, casos de uso

Application — Orquestra lógica, portas de entrada/saída

Infrastructure — Adapters, banco de dados, repositórios, drivers

Interface (Ports) — GraphQL (queries e mutations)

📌 Diagrama da Arquitetura

![alt text](image.png)

📌 Diagrama Geral do Sistema

![alt text](image.png)

🛠️ Tecnologias Utilizadas

Next.js

GraphQL

NestJS (se aplicável ao backend GraphQL)

TypeORM

Docker / Docker Compose

PostgreSQL

Arquitetura Hexagonal

🐘 Banco de Dados & Migrations

As migrations são geradas e executadas usando o TypeORM v0.3+.

➕ Criar nova migration
npx typeorm migration:create migrations/CreateUser

▶️ Executar migrations localmente
npx typeorm migration:run

▶️ Executar migrations dentro do container (modo build/produção)
npx typeorm migration:run -d dist/shared/database/postgresql/datasource.js

🐳 Docker

O projeto utiliza Docker para subir:

Aplicação Next.js

Backend GraphQL

PostgreSQL

Adminer/PGAdmin (opcional)

Para subir tudo:

docker-compose up -d

📁 Estrutura Básica (Hexagonal)
/src
 ├── domain
 │   ├── entities
 │   ├── repositories
 │   └── use-cases
 ├── application
 │   ├── services
 │   └── graphql
 ├── infrastructure
 │   ├── database
 │   ├── adapters
 │   └── config
 └── main.ts

🧩 GraphQL

Você pode ter arquivos separados contendo:

Queries

Mutations

Types / DTOs

Resolvers

Exemplo de mutation simples:

mutation {
  createOneUser(data: {
    name: "Lucas"
    email: "lucas@example.com"
  })
}

📦 Build & Execução
🔧 Desenvolvimento
npm install
npm run dev

🚀 Produção
npm run build
npm start

📑 Objetivo do Projeto

Este projeto não é apenas uma aplicação, mas também um estudo completo envolvendo:

Prática real com Hexagonal Architecture

Integração com GraphQL

Padrões profissionais de backend

Deploy containerizado

Banco relacional com migrations

🧑‍💻 Autor

Lucas Oliveira
Projeto criado para fins de estudo e aprimoramento de arquitetura backend + GraphQL.













O sistema tem como intuito estudo da arquitetura hexagonal e tambem uzo de graphql 

O sistema é de controle financeiro utiliza next banco de dados postgres e as outras tecnologias ja sitadas

tambem utilizamos docker e migrations para o banco de dados


#Arquitetura
![alt text](image.png)

# Diagrama
![alt text](image-1.png)

# Adicionar Migration
npx typeorm migration:create migrations/CreateUser 

# Executar Migration
npx typeorm migration:run

# Executar Migration no container
npx typeorm migration:run -d dist/shared/database/postgresql/datasource.js

![alt text](<ChatGPT Image 22 de nov. de 2025, 15_20_59.png>)
