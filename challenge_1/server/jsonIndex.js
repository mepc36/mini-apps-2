const jsonServer = require('json-server')
const express = require('express');
const path = require('path');

const router = jsonServer.router('db.json')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use('/static', express.static(path.join(__dirname, '../public')))
server.listen(3001, () => {
  console.log('JSON Server is running')
});
