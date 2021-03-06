function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 19;

  this.isEmpty = function() {
    if (this.stackControl == 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
    if (this.stackControl.length < this.stackControl.length + 1) {
      return this.stackControl;
    }
  };
  this.push = function(element) {
    if (!this.canPush()) {
      return "Stack Overflow";
    }

    this.stackControl.push(element);
    return this.stackControl;
  };
  this.pop = function() {
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } else {
      return "Stack Underflow";
    }
  };
}
