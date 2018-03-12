var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    counter++
    storage[counter]=value
  };

  someInstance.pop = function() {
    var tmp='';
    if (counter===0) {
      return 0
    }
    tmp=storage[counter]
    delete storage[counter]
    counter--
    return tmp;
  };

  someInstance.size = function() {
        return counter;

  };

  return someInstance;
};
