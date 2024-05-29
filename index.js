const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

server.use((req, res, next) => {
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    next();
});

server.use(router);

server.listen(port);