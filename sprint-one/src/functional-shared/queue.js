var Queue = function() {
  var someInstance={};

  someInstance.storage={};

  someInstance.counter=0;

  someInstance.enqueue=queueMethods.enqueue;
  someInstance.dequeue=queueMethods.dequeue;
  someInstance.size=queueMethods.size;


  return someInstance;
};

var queueMethods = {
	enqueue:function(value){
    	this.storage[this.counter]=value;
    	this.counter++;

	},
	dequeue : function() {
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
    
  },
	size:function(){
		return this.counter;
	}
};


