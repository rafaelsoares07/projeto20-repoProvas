# <p align="center">Projeto RepoProvas (API)</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Rafael_Soares-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/rafaelsoares07/projeto20-repoProvas?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição:
Sistema de compartilhamento de provas entre estudantes, no RepoProvas qualquer pessoa pode procurar provas antigas de suas disciplinas e professores e também
podem enviar as suas próprias provas para ajudar os demais estudantes.


## :computer: Tecnologias e Libs utilizadas:
- Node.js
- TypeScript
- Prisma ORM
- JWT
- Jest

## :rocket: Rotas
```yml
POST /signup
  - Rota para cadastrar novo usuário
  - headers: {}
  -body:{
     "email":"lorem@gmail.com",
     "password":"Lorem2ipsum$",
     "confirmPassword:"Lorem2ipsum$"
  }
```

```yml
POST /signin
  - Rota para logar usuário
  - headers: {}
  -body:{
     "email":"lorem@gmail.com",
     "password":"Lorem2ipsum$"
  }
```

```yml
POST /create/test
  - Rota para cadastrar prova
  - headers: {}
  -body:{
    "name":"lorem",
    "pdfUrl":"http://lorem.com.br",
    "categoryId":1,
    "teacherDisciplineId":1
  }
```
```yml
GET /get/allTests
  - Rota para pegar todas as provas
  - headers: {
    "authorization":"Bearer <JWT_TOKEN>"
  }
  -body:{}
```
```yml
GET /get/tests/teachers
  - Rota para pegar provas por professor
  - headers: {
    "authorization":"Bearer <JWT_TOKEN>"
  }
  -body:{}
```
## 🏁 Rodando a aplicação
Primeiro faça um clone desse repositório na sua máquina:
```
git clone https://github.com/rafaelsoares07/projeto20-repoProvas.git
```
Dentro da pasta raiz do projeto, execute o seguinte comando para instalar as depedencias necessarias:
```
npm install
```
Por fim, você pode usar o script de dev para colocar no ar o servidor
```
npm run dev
```

## :bookmark_tabs: Rodando os testes de integração
Para executar os testes de integração basta usar o script de test, ele irá criar um ambiente próprio para teste, onde teremos um banco de dados dedicado
exclusivamente para rodar todos os testes.
```
npm test
```
## Mais Informações do projeto:
[Link do Front-End](https://github.com/rafaelsoares07/projeto20-repoProvas-FRONT)

