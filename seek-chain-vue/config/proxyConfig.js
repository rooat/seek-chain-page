module.exports = {
	proxy:{
		'/exchangeapi': {
	      target: 'http://localhost:9090/exchangeapi',
	      changeOrigin: true,
	      pathRewrite:{
	          '^/exchangeapi': ''
	      }
		}
	}
}