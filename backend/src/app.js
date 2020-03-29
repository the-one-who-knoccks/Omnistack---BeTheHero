const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());

// app.listen(3333);

module.exports = app;


 /**
  * Banco de dados
  * 
  * SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
  * 
  * Pacote de banco de dados para Node
  * 
  * Driver: SELECT * FROM users
  * Query Builder: JS - table('users').select('*').where()
  */



