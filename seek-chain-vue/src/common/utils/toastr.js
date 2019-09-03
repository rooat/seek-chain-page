import vue from 'vue'
import toastComponent from '../../components/template/toast'

const ToastConstructor = vue.extend(toastComponent)

function showToast(text,duration = 3000){
	console.log("toast....")
	const toastDom = new ToastConstructor({
		el:document.createElement('div'),
		data(){
			return{
				text:text,
				showWrap :true,
				showContent:true
			}
		}
	})
	document.body.appendChild(toastDom.$el)
	setTimeout(()=>{toastDom.showContent = false},duration-1200)
	setTimeout(()=>{toastDom.showWrap = false},duration)
}

function registryToast(){
	vue.prototype.$toast = showToast
}

export default registryToast