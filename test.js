const db = require("./index.js");
const express = require('express')
const app = express();
const server = require("http").createServer(app);
app.get('/', function (req, res) {
  res.send('Merhaba Dünya!')
})
server.listen(3000, function () {
  console.log('Wow Modül Çalışıyor Port: 3000!')
});
//db.createWebview("1234", 8443, "custom", {"server": server, "request": app});

