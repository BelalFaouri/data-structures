var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage={};
  someInstance.counter=0;
  someInstance.first=0;

  return someInstance;
};

var queueMethods = {
	enqueue:function(value){
		this.counter++;
    	this.storage[this.counter]=value;
	},
	dequeue:function(){
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
	},
	size:function(){
		return this.counter;
	}
};


