var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
    this.head= Node(value)
    this.tail= Node(value)
    } else {
    this.tail= Node(value)
    this.head.next=this.tail

}
  };

  list.removeHead = function() {
    if (this.head===null) {
      }else if(this.head===this.tail){
          this.head=null
          this.tail=null

      }else{
        var removed=this.head.value;
       this.head=this.head.next
       return removed;


      }
      
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};
