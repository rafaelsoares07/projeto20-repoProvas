# <p align="center">Projeto RepoProvas</p>


## :clipboard: Descrição:
Sistema de compartilhamento de provas entre estudantes, no RepoProvas qualquer pessoa pode procurar provas antigas de suas disciplinas e professores e também
podem enviar as suas próprias provas para ajudar os demais estudantes.


## :computer: Tecnologias e Libs:
- Node.js
- TypeScript
- Prisma ORM
- ReactJS
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
