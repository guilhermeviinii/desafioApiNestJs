<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>



## Description

Api Nestjs + MongoDB + NodeJS.

## Running the app

```bash
# development
$ npm run start:dev

```

## Test

```bash
http://localhost:3000/usuarios -> Get, Post, Put, Delete
http://localhost:3000/auth/login -> for Login


User Admin
 -> User: admin
 -> Passoword: admin
 *Obs: Apenas esse user tem direitos para deletar e atualizar cadastros

 JSON for Login
      {
        "usuario": "admin",
        "senha": "admin,
      }

Após efetuar o login usar o acess_token gerado para ter autorização para os outros caminhos referencia -> http://localhost:3000/usuarios


-> GET: http://localhost:3000/usuarios

-> POST: http://localhost:3000/usuarios
          JSON for criar uma nova conta
    {
                "nome": "",
                "idade": ,
                "cidade": "",
                "estado": "",
                "usuario": "",
                "senha": ""
    }

-> PUT: http://localhost:3000/usuarios/:id 

> DELETE: http://localhost:3000/usuarios/:id


```
## Note
 <p> É necessário criar uma conta primeiro, role default = "user" (Não possui direitos para deletar, atulizar. Apenas visualizar). </p>

<p>Para devidos testes usar conta de administrador!</p>
