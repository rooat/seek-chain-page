
var mongoose = require('mongoose')
require('mongoose-double')(mongoose);
mongoose.Promise= require('bluebird')
mongoose.connect('mongodb://localhost:27017/seek_db',{"useMongoClient":true})


var schema1 = new mongoose.Schema({
      start_time : Number,
      end_time: Number,
      block_number: Number,
      block_avg: Number
});

var blockTime = mongoose.model('blocktime', schema1);

module.exports = {
	blockTime
}