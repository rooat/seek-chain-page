import Vue from 'vue'
import Web3 from 'web3'
import AddressData from '../configs/AddressData.json'
import EashABI from '../configs/EashABI.json'
import PledgeABI from '../configs/PledgeABI.json'
import PriceABI from '../configs/PriceABI.json'

function web3s(){
   let web3 = new Web3("http://etzrpc.org")
       let eash = new web3.eth.Contract( EashABI.abi,AddressData.eash);
        let pledge = new web3.eth.Contract(PledgeABI.abi,AddressData.pledge);
        Vue.prototype.$eash = eash;
        Vue.prototype.$pledge = pledge;
        Vue.prototype.$pledgeAddress = AddressData.pledge;
        Vue.prototype.$eashAddress = AddressData.eash;
        Vue.prototype.$web3 = web3
       return web3
//   if (typeof window.web3_etz !== 'undefined') {
//        let web3 = new Web3(window.web3_etz.currentProvider);
//         let eash = new web3.eth.Contract( EashABI.abi,AddressData.eash);
//         let pledge = new web3.eth.Contract(PledgeABI.abi,AddressData.pledge);
//         Vue.prototype.$eash = eash;
//         Vue.prototype.$pledge = pledge;
//         Vue.prototype.$pledgeAddress = AddressData.pledge;
//         Vue.prototype.$eashAddress = AddressData.eash;
//         Vue.prototype.$web3 = web3
//        return web3
//     } else if (typeof window.ethereum !== 'undefined') {
//        let web3 = new Web3(window.ethereum);
//         web3.enable();
//        let eash = new web3.eth.Contract( EashABI.abi,AddressData.eash);
//         let pledge = new web3.eth.Contract(PledgeABI.abi,AddressData.pledge);
//         Vue.prototype.$eash = eash;
//         Vue.prototype.$pledge = pledge;
//         Vue.prototype.$pledgeAddress = AddressData.pledge;
//         Vue.prototype.$eashAddress = AddressData.eash;
//         Vue.prototype.$web3 = web3
//        return web3
//     } else {
//        let web3 = new Web3("http://etzrpc.org")
//        let eash = new web3.eth.Contract( EashABI.abi,AddressData.eash);
//         let pledge = new web3.eth.Contract(PledgeABI.abi,AddressData.pledge);
//         Vue.prototype.$eash = eash;
//         Vue.prototype.$pledge = pledge;
//         Vue.prototype.$pledgeAddress = AddressData.pledge;
//         Vue.prototype.$eashAddress = AddressData.eash;
//         Vue.prototype.$web3 = web3
//        return web3
//     }
}
 export default web3s
