var Stack = function() {

  var someInstance=Object.create(stackMethods);

  someInstance.storage={};
  someInstance.counter=0;

  return someInstance;
};

var stackMethods = {
	push:function(value){
		this.counter+=1
    this.storage[this.counter]=value
	},
	pop:function(){
		var tmp='';
    if (this.counter===0) {
      return 0;
    }
    tmp=this.storage[this.counter]
    delete this.storage[this.counter]
    this.counter--
    return tmp;
  
	},
	size:function(){
		return this.counter;

	}
};

