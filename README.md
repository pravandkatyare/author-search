<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Prerequisite

- Postgresql
- Node

## Database script
Run create table script inorder to create a table in database.

```
CREATE TABLE author (
    _version_ INTEGER NOT NULL UNIQUE,
    key VARCHAR(255) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    work_count INTEGER DEFAULT 0,
    ratings_average DECIMAL(3,2) DEFAULT 0.00,
    ratings_sortable DECIMAL(3,2) DEFAULT 0.00,
    ratings_count INTEGER DEFAULT 0,
    ratings_count_1 INTEGER DEFAULT 0,
    ratings_count_2 INTEGER DEFAULT 0,
    ratings_count_3 INTEGER DEFAULT 0,
    ratings_count_4 INTEGER DEFAULT 0,
    ratings_count_5 INTEGER DEFAULT 0,
    want_to_read_count INTEGER DEFAULT 0,
    already_read_count INTEGER DEFAULT 0,
    currently_reading_count INTEGER DEFAULT 0,
    readinglog_count INTEGER DEFAULT 0,
    
    CONSTRAINT ratings_average_check CHECK (ratings_average >= 0 AND ratings_average <= 5),
    CONSTRAINT ratings_sortable_check CHECK (ratings_sortable >= 0 AND ratings_sortable <= 5),
    CONSTRAINT positive_counts CHECK (
        work_count >= 0 AND
        ratings_count >= 0 AND
        ratings_count_1 >= 0 AND
        ratings_count_2 >= 0 AND
        ratings_count_3 >= 0 AND
        ratings_count_4 >= 0 AND
        ratings_count_5 >= 0 AND
        want_to_read_count >= 0 AND
        already_read_count >= 0 AND
        currently_reading_count >= 0 AND
        readinglog_count >= 0
    )
);
```

## Project setup

```bash
$ npm install
```
## Compile and run the project

```bash
# development
$ npm run start
```

## Endpoints
```
GET http://localhost:{port}/api/search/author?name={authorName}          // This will return you author details and save it in database.
GET http://localhost:{port}/api/works/author/{key}                       // This will return all the details of works done by author.
```
