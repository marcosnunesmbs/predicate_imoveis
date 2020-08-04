const express = require('express');
const app = express();

app.use('/arquivos', express.static(__dirname + '/arquivos'));

app.listen(3000);
console.log('servidor rodando em: localhost:3000');

app.get('/', function(req, res) {
	res.set('Content-Type', 'text/html');
	const fs = require('fs');
	const data = fs.readFileSync('./index.html', 'utf8');
	res.send(data);
});
