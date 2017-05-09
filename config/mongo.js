'use strict';

let mongojs = require('mongojs');
let db = mongojs('localhost:27017/nodebook_db');


module.exports = db;