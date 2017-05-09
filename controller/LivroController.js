'use strict'

let bluebird = require('bluebird');
let LivroModel = bluebird.promisifyAll(require('../model/LivroModel'));


let LivroController = {

	list: function(request, response, next){
		//let livro = "Java Book, Android Book, Mac Book";
		//response.send(livro);
		LivroModel.findAsync({})
			.then(function(data){
				response.json(data);
			})
			.catch(next);
	},

	byId: function(request, response, next){
		let _id = request.params.id;

		LivroModel.findOneAsync({ _id: _id })
		.then(function(data){
			response.json(data);
		})
		.catch(next);
	},

	create: function(request, response, next){
		let body = request.body;

		LivroModel.insert(body, function(err, data){
			if(err){return next(err);}
			response.status(201).json(data);
		});
	},

	update: function(request, response, next){
		let id = request.params.id;
		let body = request.body;

		LivroModel.update({_id: id}, body, function(err, data){
			if(err){return next(err);}
			response.json(data);
		});
	
	},

	remove: function(request, response, next){
		let id = request.params.id;

		LivroModel.remove({_id: id}, function(err, data){
			if(err){
				return next(err);
			}
			response.status(204).send('remove');
		});
	}

};

module.exports = LivroController