class Queue {
  
  constructor() {
  	this.storage={};
  	this.counter=0;
  }

	enqueue(value){
    	this.storage[this.counter]=value;
    	this.counter++;

	}
	dequeue() {
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
	size(){
		return this.counter;
	}


}
