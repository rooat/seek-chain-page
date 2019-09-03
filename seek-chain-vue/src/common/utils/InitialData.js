import Vue from 'vue'
import Web3 from 'web3'
import AddressData from '../configs/AddressData.json'
import EashABI from '../configs/EashABI.json'
import PledgeABI from '../configs/PledgeABI.json'
import PriceABI from '../configs/PriceABI.json'

import trans from './trans'

export default {
	Initial:function(){
		let web3;
		if (typeof window.web3_etz !== 'undefined') {
       		 web3 = new Web3(window.web3_etz.currentProvider);
   		}else{
			   let  provider = new Web3.providers.HttpProvider('http://159.65.133.190:8545')
			  // let  provider = new Web3.providers.HttpProvider('http://etzrpc.org')
      		 web3 = new Web3(provider)
   		}
      	let eash = new web3.eth.Contract( EashABI.abi,AddressData.eash);
	    let pledge = new web3.eth.Contract(PledgeABI.abi,AddressData.pledge);
	    Vue.prototype.$eash = eash;
		Vue.prototype.$pledge = pledge;
		Vue.prototype.$web3 = web3
		Vue.prototype.$pledgeAddress = AddressData.pledge;
	    Vue.prototype.$eashAddress = AddressData.eash;
		// let flat = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
		// if(flat){
		// 	Vue.prototype.$mobile = flat
		// 	setTimeout(()=>{
		// 		let address = easyetz.getAddress()
		// 		trans.$emit("init",{"index":"ok","address":address.toLowerCase()})
		// 	},1000)
		// }
		// setTimeout(async ()=>{
		// 	let flat = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
		// 	//flat=false
		// 	let address;
		// 	if(flat){
		// 		 address = easyetz.getAddress()
		// 	}else{
		// 		 address = await web3.eth.getCoinbase()
		// 	}
		//    // address = await web3.eth.getCoinbase()
		// 	Vue.prototype.$mobile = flat	
		// 	trans.$emit("init",{"index":"ok","address":address.toLowerCase()})
		// },1000)
	}
}

