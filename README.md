# <div align="center">VUTTR</div>

## <div align="center">Very Useful Tools to Remember</div>

### <div align="center">A App that allow users to add, list and remove tools.</div>
#### <div align="center">[Visit this api here](https://bossaboxapi.herokuapp.com/docs/).</div>
#### ⚡️ TECHNOLOGIES

---

This project was developed for the Bossabox Backend Challenge with the following technologies:

- [NodeJs](https://github.com/nodejs/node)
- [Chai](https://github.com/chaijs/chai)
- [Postgres](https://github.com/postgres/postgres)
- [Docker](https://www.docker.com/)
- [Sequelize](https://github.com/sequelize/sequelize)
- [Sequelize-cli](https://github.com/sequelize/cli)
- [Swagger](https://swagger.io/)

For code formatter and padronization:

- [Eslint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [Husky](https://github.com/typicode/husky)
- [Lint-staged](https://github.com/okonet/lint-staged)

#### 💻 DEVELOPING

---

To run this applications, you need Git, Yarn, `Docker >= 17.12.0+` and `docker-compose`

```bash
    # To see a version of docker
    $ docker -v
    Docker version 19.03.8, build afacb8b7f0
    # To see a version of docker-compose
    $ docker-compose -v
    docker-compose version 1.25.4, build 8d51620a
```

Next step you must clone this repository:

```bash
    $ git clone https://github.com/ruanlinos/bossaboxapi.git
```

Inside the foder project, just run:

```bash
    # First, we need to ensure that the database is up to date:
    $ docker-compose up migration
    
    # And now we can seed the database:
    $ docker-compose up seed
    
    # So, we can start the server:
    $ docker-compose up api

    # Otherwise, you can run the api server detached:
    $ docker-compose up -d api
```

Well done! all your changes will be automatically read by the docker.
