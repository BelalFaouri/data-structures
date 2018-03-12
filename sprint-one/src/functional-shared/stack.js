var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance={};
  someInstance.storage = {};

  someInstance.counter=0;

  someInstance.push=_.extend({},stackMethods).push;
  someInstance.pop=_.extend({},stackMethods).pop;
  someInstance.size=_.extend({},stackMethods).size;


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


