const restify = require('restify');

const app = restify.createServer();
const PORT = 5000;

app.get('/', (req, res) => res.send({ hello: 'World' }));

app.listen(PORT);
