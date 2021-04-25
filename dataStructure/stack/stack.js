const Stack = (function () {
  function Stack(capacity = 1) {
    this.top = -1;
    this.capacity = capacity;
    this.array = [];
  }

  Stack.prototype.push = function (item) {
    try {
      if (this.isFullStack()) throw Error; // this.capacity *= 2; dynamic array
      this.top === -1 ? (this.top = 0) : this.top++;
      this.array[this.top] = item;
    } catch (e) {
      console.log(e);
    }
  };

  Stack.prototype.pop = function () {
    if (this.isEmptyStack()) console.log("isEmptyStack");
    return this.array[this.top--];
  };

  Stack.prototype.isEmptyStack = function () {
    return this.top === -1 ? true : false;
  };

  Stack.prototype.isFullStack = function () {
    return this.top + 1 === this.capacity ? true : false;
  };
  return Stack;
})();

let s = new Stack(4);

s.push(1);
s.push(2);
console.log(s.pop());
