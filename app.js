'use strict'


//A primeira coisa que é preciso fazer é importar o módulo express
//e criar um app.
let express = require('express');
let app = express();

/*Nunjucks implementa um lexer completo e parser
que gera um AST, e um compilador que compila-lo a
javascript bruto.*/
let nunjucks = require('nunjucks');


/*O express.bodyParser() é uma função que facilita a construção de objetos
JSON apartir de uma submissão de dados de um formulário html.*/
let bodyParser = require('body-parser');
app.use(bodyParser());

//app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

nunjucks.configure('views',{
	autoescape: true,
	express: app,
	tags: ''
});

app.get('/',function(req, res){
	res.send('Servidor NodeJs está sendo executado com sucesso !');
});

app.use(function(request, response, next){
	console.log('middleware 1', request.method);
	next();

});


//Importa a camada de rotas para a aplicação
app.use(require('./routes'));

app.use(express.static('public/assets/css/'));
app.use(express.static('public/assets/fonts/'));
app.use(express.static('public/assets/js/'));
app.use(express.static('public/assets/sass/'));

app.use(express.static('public/assets/css/images/'));
app.use(express.static('public/images/'));

/*Em seguida temos que informar o servidor para escutar uma dada porta.
Abaixo foi chamado o método listen(3000) do nosso objeto app que tenta
criar um servidor e vinculá-lo à porta 3000. A porta pode ser qualquer
uma que você escolher, por exemplo a porta 80 padrão usando listen(80).*/


module.exports = app
