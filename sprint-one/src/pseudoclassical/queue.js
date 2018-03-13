var Queue = function() {
  this.storage={}
  this.counter=0
  this.first=0
};


	Queue.prototype.enqueue=function(value){
    	this.storage[this.counter]=value;
    	this.counter++;

	}
	Queue.prototype.dequeue=function(){
		if(this.counter === 0){
      return 0;
    }
    
    var firstElement=this.storage[0];

    for(var key in this.storage){
      key=(Number(key)-1).toString();
      this.storage[key]=this.storage[(Number(key)+1).toString()]
    }
    this.counter--

    return firstElement;
    
	}
	Queue.prototype.size=function(){
		return this.counter;
	}

