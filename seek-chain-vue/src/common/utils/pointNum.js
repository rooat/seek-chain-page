export default{
	pointNum:function(numbers){
		numbers = Number(numbers);
	  if(numbers==0){
	    numbers = "0.0000";
	  }else{
	    numbers = numbers/1000000000000000000;
	    numbers = String(numbers);
	    let index = numbers.indexOf('.');
	    if(index!=-1){
	      numbers = numbers.substr(0,index+5)
	    }
	  }
	  return numbers
	},
	zeroNum:function(numbers){
		numbers = numbers*1000000;
		numbers = String(numbers)+"000000000000"
		return numbers;
	},
	savePoint:function(numbers){
		 numbers = String(numbers);
	    let index = numbers.indexOf('.');
	    if(index!=-1){
	      numbers = numbers.substr(0,index+5)
	    }
	    return numbers;
	}
}