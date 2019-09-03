export default{
	timeFormat:function(now){
		var   year=now.getFullYear();
	    var   month=now.getMonth()+1;
	    //var   date=now.getDate();
	    var   hour=now.getHours();
	    var   minute=now.getMinutes();
	    var   second=now.getSeconds();
			if(hour<10){
				hour="0"+hour;
			}
			if(minute<10){
				minute="0"+minute;
			}
			if(second<10){
				second="0"+second;
			}
	    return   hour+":"+minute+":"+second;
	}
}