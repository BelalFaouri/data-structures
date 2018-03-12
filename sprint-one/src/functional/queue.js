var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var first=0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    storage[counter]=value;
  };

  someInstance.dequeue = function() {
    var tmp='';
    if(counter === 0){                                                        
      return 0;
    }else if(counter === 1){
      tmp=storage[counter];
    delete storage[counter];
    counter--

    return tmp;
    }
        first++; 

    tmp=storage[first];
    delete storage[first];
    counter--
    return tmp;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;

};
