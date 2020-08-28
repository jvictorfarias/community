# Community

<div align="center" style="margin: 20px;">

[![The MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](http://github.com/jvictorfarias/community/LICENSE.md)
![GitHub last commit](https://img.shields.io/github/last-commit/jvictorfarias/community?color=green&style=flat-square)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/30e0ef7a3c2146498723e53c9fcaeda7)](https://www.codacy.com/manual/jvictorfarias/community_2?utm_source=github.com&utm_medium=referral&utm_content=jvictorfarias/community&utm_campaign=Badge_Grade)
![GitHub top language](https://img.shields.io/github/languages/top/jvictorfarias/community?style=flat-square)

<p align="center" >
  <a href="#fire-prévia-da-aplicação"> :fire: Prévia da Aplicação</a> |
  <a href="#rocket-tecnologias-usadas"> :rocket: Tecnologias Usadas</a> |
  <a href="#hammer-deploy-da-aplicação"> :hammer: Deploy da Aplicação</a> |
  <a href="#thinking-como-contribuir?"> :thinking: Como Contribuir?</a> |
  <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a>
</p>

</div>

## :rocket: O projeto

Aplicação para gerenciar famílias e indivíduos de comunidades, auxiliando o trabalho de ACSs.

### :Fire: Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io/)
  {...}

## :hammer: Deploy da Aplicação

[Heroku](https://cryptic-brook-95865.herokuapp.com/)

## :thinking: Como Contribuir?

**Faça um fork deste repositório**

```bash
# Clone o seu fork
$ git clone url-do-seu-fork && cd community

# Crie uma branch com sua feature ou correção de bugs
$ git checkout -b minha-branch

# Faça o commit das suas alterações
$ git commit -m 'feature/bugfix: minhas alterações'

# Faça o push para a sua branch
$ git push origin minha-branch
```

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :zap: Executando o Projeto

#### Clonando o projeto

```sh
$ git clone https://github.com/jvictorfarias/community.git
$ cd community
```

#### Iniciando a API

```sh
$ cd src
# Tenha certeza que possui o NodeJS e Yarn instalados
$ yarn install
# Criando a imagem Docker do banco de dados:
# Dentro do projeto, já existe uma arquivo docker-compose.yml que possui o
# PostgreSQL como banco de dados, basta ter o Docker instalado em sua máquina.
$ docker-compose up -d # Iniciará em background e não irá bloquear o shell
# *CONFIGURE UM ARQUIVO .ENV, COM SUAS ENTRADAS IGUAL A .ENV.EXAMPLE
# Rodando as migrations para o banco de dados e iniciando o projeto
$ yarn typeorm migration:run && yarn dev:server
```

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Community&uri=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1XuDjZbQt1hsVtRQ5fA-xMnnmJaMqIKhw%2Fview%3Fusp%3Dsharing)

### :memo: Licença

Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :purple_heart: by <strong> Joao Victor Farias</strong> </p>
