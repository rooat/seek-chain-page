<template>
  <div class="bodys">
    <div>
      <button @click="balancebtn">查看余额</button>
      <br/>
      <button @click="blockNumberbtn">当前区块高度</button>
      <br/>
      <button @click="createAccount">创建地址</button>
      <p>
        地址:<input type="text" ref="inputaddress" />
        <br/>
        私钥:<input type="text" ref="inputprivatekey" />
        <br/>
        密码:<input type="text" ref="inputpassword"/>
        <br/>
        <button @click="savelocalbtn">保存到本地</button>
      </p>
      <p>
        private_key:<input type="text" ref="privatekey"/>
        <button @click="recoveraddress">恢复地址</button>
      </p>
      <p>
        金额：<input type="number" ref="transferamount"/>
        <br/>
        To:<input type="text" ref="transferaddress"/>
        <br/>
        密码:<input type="text" ref="transferpwd"/>
        <br/>
        <button @click="transferbtn">转账</button>
      </p>
    </div>
    <div>{{balance}}</div>
    <div>{{blockNumber}}</div>
    <div>Address:<span>{{address}}</span></div>
    <div>private_key:<span>{{private_key}}</span></div>

    <div class="Initialdiv" v-show="isShowIntialdiv">
      <img class='timgclass' src="static/images/timg.gif"/>
      <h1>发送中...</h1>
    </div>
    <div class="ceng" v-show="isShowCeng"></div>
  </div>
</template>

<script>
import Initial from '../common/utils/InitialData'

export default {
  name: 'MainScreen',
  components:{

  },
  data () {
    return {
      blockNumber:0,
      address:"",
      private_key:"",
      balance :0,
      isShowIntialdiv:false,
      isShowCeng:false
    }
  },
  mounted() {
    Initial.Initial();
   // this.blockNumber();
  },
  methods: {
    savelocalbtn :  function(){
      let address = this.$refs.inputaddress.value;
      let private_key = this.$refs.inputprivatekey.value;
      let pasd = this.$refs.inputpassword.value;
      localStorage.setItem(pasd+"localpwd",private_key);
      localStorage.setItem("defaultaddress",address);
    },
    balancebtn: async function () {
      let addr = localStorage.getItem("defaultaddress")
      let bal = await this.$web3.eth.getBalance(addr)
      this.balance = Number(bal/10**18).toFixed(4);
    },
    blockNumberbtn: async function(){
      let block = await this.$web3.eth.getBlockNumber();
      this.blockNumber = block;
    },
    createAccount:async function(){
      let account = await this.$web3.eth.accounts.create(this.$web3.utils.randomHex(32)); 
      this.address = account.address;
      this.private_key = account.privateKey;
    },
    recoveraddress:async function(){
      let priv = this.$refs.privatekey.value;
      let account = await this.$web3.eth.accounts.privateKeyToAccount(priv);
      this.address = account.address;
      this.private_key = account.privateKey;
    },
    transferbtn:async function(){
      let amount = this.$refs.transferamount.value;
      let to = this.$refs.transferaddress.value;
      let pwd = this.$refs.transferpwd.value;
      let private_keys = localStorage.getItem(pwd+"localpwd");
      let addr = localStorage.getItem("defaultaddress")
      let signed = await this.$web3.eth.accounts.signTransaction({
          from:addr,
          to: to,
          value: amount*10**18,
          gas: 2000000
      }, private_keys);
      this.isShowIntialdiv = true;
      this.isShowCeng = true;
      this.$web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', (res)=>{
            this.isShowIntialdiv = false;
            this.isShowCeng = false; 
        });
    },
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
