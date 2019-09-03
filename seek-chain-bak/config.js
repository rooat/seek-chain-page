var Web3 = require('web3')
var web3 = new Web3("http://159.65.133.190:8545")
var {blockTime} = require("./mongoConfig")
module.exports = {
	blockTime,web3
}