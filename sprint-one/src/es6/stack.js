class Stack {
  constructor() {
  	this.storage={};
  	this.counter=0;
  }
	push(value){
		this.counter+=1
    this.storage[this.counter]=value
	}

	pop(){
		var tmp='';
    	if (this.counter===0) {
      	return 0;
    	}

    	tmp=this.storage[this.counter]
    	delete this.storage[this.counter]
    	this.counter--
    	return tmp;
  
	}

	size(){
		return this.counter;

	}


}