'use strict'

let db = require('../config/mongo');


let LivroModel = {
	find: function(query, callback){
		//livros é o nome da tabela criada na base de dados.
		db.collection('livros').find(query, callback);
	},

	findOne: function(query, callback){
		query._id = db.ObjectId(query._id);
		db.collection('livros').findOne(query, callback);
	},

	insert: function(data, callback){
		db.collection('livros').insert(data, callback);
	},


	update: function(query, data, callback){
		query._id = db.ObjectId(query._id);
		db.collection('livros').update(query,{ $set: data}, callback);
	},

	remove: function(query, callback){
		query._id = db.ObjectId(query._id);
		db.collection('livros').remove(query, callback);
	}
	
};


module.exports = LivroModel;