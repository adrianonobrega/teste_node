🎯 Desafio: Sistema de Tarefas (API Backend)
Este documento detalha a implementação do Backend do sistema de lista de tarefas, desenvolvido com foco rigoroso em qualidade de código, arquitetura modular e testes de unidade.

✨ Visão Geral da Solução
O Backend é uma API RESTful completa que gerencia o ciclo de vida das tarefas (CRUD). A solução é estruturada no padrão de arquitetura modular, separando responsabilidades entre Controller, Service e Model.

<img width="689" height="315" alt="image" src="https://github.com/user-attachments/assets/b1a50163-cf31-4d7d-b783-cb142a911727" />

📚 Tech Stack (Backend)

<img width="441" height="205" alt="image" src="https://github.com/user-attachments/assets/91e5fc0b-b883-4ba1-b010-eba569658e0a" />

⚙️ Guia de Ambientação e Execução

⚙️ Guia de Ambientação e Execução
Pré-requisitos
Git

Node.js (v18+)

npm

Passo 1: Clonar e Acessar o Projeto
Clone o repositório e navegue para a pasta do Backend:

git clone https://github.com/adrianonobrega/teste_node.git

cd teste_node/backend

Passo 2: Instalar Dependências

Instale todas as dependências necessárias para a API e o ambiente de testes:

npm install

Passo 3: Rodar a API

Inicie o servidor em modo de desenvolvimento (o npm start usa ts-node e node --loader ts-node/esm):

npm run start

5. ✅ Validação da Funcionalidade (Postman/Insomnia)

A URL base para todos os endpoints é: http://localhost:3001/api/tasks.

<img width="687" height="276" alt="image" src="https://github.com/user-attachments/assets/cfb39a1a-718a-4977-acb4-9e36ac1b41ad" />


