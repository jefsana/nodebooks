'use strict'

let MainController = {
	home: function(request, response, next){
		response.send('Bem Vindo ao MainController !');
	}

};

module.exports = MainController;