<template>
  <div class="bodys">
      <h1>Seek-Chain</h1>
      当前区块高度：{{blockNumber}}
      距离上一个块时间: {{count_time}}ms
      平均出块时间 ：{{avg_time}}
      <h2>账户余额:{{balance}}</h2>
      <div>
        区块高度：<input type="number" ref="searchnumber"/>
        <button @click="searchblockbtn">查询区块</button>
      </div>
      
  </div>
</template>

<script>
import Initial from '../common/utils/InitialData'
import axios from 'axios'
export default {
  name: 'MainScreen',
  components:{

  },
  data () {
    return {
      blockNumber:0,
      blockdetail:"",
      count_time :0,
      start_time : new Date().getTime(),
      avg_time:0,
      balance:0
    }
  },
  mounted() {
    Initial.Initial();
    this.blockNumberFun();
    this.balanceFun()
    this.setTimeToblockTime();
  },
  methods: {
    setTimeToblockTime(){
      let that = this;
      setInterval(function(){
       that.blockNumberFun();
       that.balanceFun() 
      },3000)
    },
    async balanceFun(){
      let balance = await this.$web3.eth.getBalance("0x626f4793d01786b47150d1134310a771d7731762")
      console.log("balance===",balance);
      this.balance = Number(balance)
    },
    blockNumberFun(){
      let that = this
      axios.post('/apis/api_block_time_detail',{}).then(function(res){
        let data = res.data.resp;
        if(data && data.length>0){
          that.blockNumber = data[0].block_number;
          that.count_time = Number(data[0].end_time)-Number(data[0].start_time);
          let cou_sum=0;
          for(var i =0;i<data.length;i++){
            cou_sum  += Number(data[i].end_time)-Number(data[i].start_time);
          }
          
          that.avg_time = parseInt(cou_sum/data.length);
        }
      })
    },
    async searchblockbtn(){
      let nums = this.$refs.searchnumber.value;
      let block = await this.$web3.eth.getBlock(nums);
      this.blockdetail=block
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
    border: 1px solid black;
    width:50%;
}
button{
  background-color:lightblue;
  color:black;
}
.Initialdiv{
  color:white;
  position: fixed;
  top:40%;
  left:35%;
  z-index: 10;
}
.ceng {
    position: fixed;
    z-index: 0;
    left: 0;
    top: 0;
    right: 0;
    background-color:black;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    text-align: center;
}
.timgclass{
  width: 70%;
}
</style>
