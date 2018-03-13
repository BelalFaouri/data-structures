  var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var first=0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter]=value;
    counter++;

  };

  someInstance.dequeue = function() {
    if(counter === 0){
      return 0;
    }
    
    var firstElement=storage[0];

    for(var key in storage){
      key=(Number(key)-1).toString();
      storage[key]=storage[(Number(key)+1).toString()]
    }
    counter--

    return firstElement;
    
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;

};
