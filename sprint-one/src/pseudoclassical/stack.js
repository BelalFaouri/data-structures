var Stack = function() {
 	this.storage={}
 	this.counter=0

	};

	Stack.prototype.push=function(value){
		this.counter+=1
    this.storage[this.counter]=value
	}


	Stack.prototype.pop=function(){
		var tmp='';
    if (this.counter===0) {
      return 0;
    }
    tmp=this.storage[this.counter]
    delete this.storage[this.counter]
    this.counter--
    return tmp;
  
	}

	Stack.prototype.size=function(){
		return this.counter;

	}



