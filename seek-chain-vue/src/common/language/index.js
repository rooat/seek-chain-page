import Vue from 'vue'
import VueI18n from 'vue-i18n'
import trans from '../utils/trans'

Vue.use(VueI18n)

const messages = {
    zh: require('./zh.js'),
    en: require('./en.js'),
}

const i18n = new VueI18n({
	locale:'zh',
	messages:messages
})

export default i18n