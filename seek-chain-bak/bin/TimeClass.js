var config = require('../config')
class TimeClass{
    constructor(){
        this.start_time = 0; 
        this.end_time = 0; 
        this.block_number = 0; 
    }
    async init(){
        let lastBlock = await config.blockTime.findOne({"block_number":this.block_number})   
        if(lastBlock){
            this.start_time = lastBlock.start_time;
            this.end_time = lastBlock.end_time;
            this.block_number = lastBlock.block_number;
        }
    }
    async start(){
        await this.init()
        let that = this;
        setInterval(async function(){
           let block_number =  await config.web3.eth.getBlockNumber();
           console.log("current block_number==",block_number);
           if(block_number>that.block_number){
               that.block_number = block_number;
                let end = new Date().getTime();
                await config.blockTime({
                    start_time:that.end_time,
                    end_time:end,
                    block_number : block_number
                }).save()
               that.end_time = end;
               that.block_number = block_number;
           }
        },1000)
    }
}
var timec = new TimeClass();
timec.start()