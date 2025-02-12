# API REST

Este repositório contém uma API REST desenvolvida para cadastro de usuarios. (projeto independente)

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas da API](#rotas-da-api)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)


## Instalação

Para instalar e configurar o ambiente, siga os passos abaixo:

```bash
git clone https://github.com/pedrohenriferreira/api-rest.git
cd api-rest
npm install
```

## Uso

Para iniciar o servidor, utilize o comando:

```bash
npm start
```

A API será executada em `http://localhost:3000/` (ou outra porta configurada).

## Rotas da API

Abaixo estão listadas as rotas disponíveis na API:

- **`GET /api/usuarios`**: Retorna a lista de usuários.
- **`POST /api/usuarios`**: Cria um novo usuário.
- **`GET /api/usuarios/:id`**: Retorna os detalhes de um usuário específico.
- **`PUT /api/usuarios/:id`**: Atualiza as informações de um usuário.
- **`DELETE /api/usuarios/:id`**: Remove um usuário.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express
- TypeScript
- MongoDB (ou outro banco de dados, caso aplicável)
