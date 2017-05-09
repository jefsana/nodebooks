--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
### NODEJS ###
--- --- --- ---- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
1) A primeira coisa que é preciso fazer é importar o módulo express, utilizando o camando: npm install express
2) Instalação do bluebird: $ npm install --save bluebird
3) Istabação para manipulação json: npm install -g json

Nodemon: PAcote que reestarta o servidor a cada alteação de código.


--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
### MONGODB ###
--- --- --- ---- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
1) sudo service mongodb start
2) sudo service mongodb stop
3) sudo service mongodb restart

> $ mogo
> use nodebook_db
> db.series.find();


//Inserindo Dados na Tabela: LIVROS
db.livros.insert({titulo: 'Aplicações NodeJs',paginas: 214, categoria: 'Informática', autor: 'WBruno', editora: 'Novatec', ano:2017})


--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
### MONGOJS ###
--- --- --- ---- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
MongoJS é um pacote pequeno brilhante de Node.js que o deixa alcançar MongoDB usando uma API que seja extremamente similar ao shell de Javascript de MongoDB.

Instalando o MongoJS
Uma vez que o Node.js foi configurado corretamente em sua máquina, você pode usar seu gerenciador de pacotes interno NPM para instalar o MongoJS:

 
$ npm install mongojs 
 
Agora podemos começar a construir nossa aplicação JavaScript e conectar ao nosso servidor MongoDB: