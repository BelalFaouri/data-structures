var Queue = function() {
  this.storage={}
  this.counter=0
  this.first=0
};


	Queue.prototype.enqueue=function(value){
		this.counter++;
    	this.storage[this.counter]=value;
	}
	Queue.prototype.dequeue=function(){
		var tmp='';
    if(this.counter === 0){                                                        
      return 0;
    }else if(this.counter === 1){
      tmp=this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--

    return tmp;
    }
        this.first++; 

    tmp=this.storage[this.first];
    delete this.storage[this.first];
    this.counter--
    return tmp;
	}
	Queue.prototype.size=function(){
		return this.counter;
	}

