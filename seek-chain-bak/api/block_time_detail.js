var config = require('../config');
block_time_detail =async (req, res, next) => {
	let blockTimeList = await config.blockTime.find().sort({"block_number":-1}).limit(50);
	
	return res.send({"resp":blockTimeList})
}

module.exports = 
{
	block_time_detail
}
