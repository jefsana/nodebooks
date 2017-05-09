'use strict'

let express = require('express');
let router = express.Router();

let MainController = require('../controller/MainController');
let LivroController = require('../controller/LivroController');

let LivroModel = require('../model/LivroModel');


/*--- --- --- --- --- --- --- --- --- --- --- ---
### Rotas das APIs ###
--- --- --- --- --- --- --- --- --- --- --- ---*/
router.get('/api/livros/',LivroController.list);
router.get('/api/livros/:id',LivroController.byId);
router.post('/api/livros/create',LivroController.create);
router.post('/api/livros/alter/:id',LivroController.update);
router.get('/api/livros/remove/:id',LivroController.remove);


/*--- --- --- --- --- --- --- --- --- --- --- ---
### Rotas HTML ###
--- --- --- --- --- --- --- --- --- --- --- ---*/

//Início
router.get('/nodebooks',function(req, res){
	res.render('index',{title: 'SISTEMA NODEBOOKS'});
});


//Listagem de Livros
router.get('/nodebooks/lista', function(request, response, next){
	LivroModel.find({},function(err, data){
		if(err){ return next(err);}

		response.render('ListaLivros',{
			"title": 'Sistema de NodeBooks',
			livros: data
		});

	});

});


//Cadastro de Livros
router.get('/nodebooks/cadastro',function(req, res){
	res.render('CadastroLivro',{title: 'SISTEMA CRUD DE LIVROS'});
});


//Alteração de Livros
router.get('/nodebooks/alteracao/:id',function(request, response, next){
	
	let _id = request.params.id;

	LivroModel.findOneAsync({ _id: _id },function(err, data){
		if(err){ return next(err);}

		response.render('AlteraLivro',{
			"title": 'Sistema de NodeBooks',
			livros: data
		});

	});
	
});


module.exports = router;