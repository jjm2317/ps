const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", (line) => {
  input.push(line);
  rl.close();
}).on("close", () => {
  const [n, k] = input[0].split(" ").map((v) => +v);
  const Queue = (function Queue() {
    function Queue(array) {
      this.array = [];
      if (array) this.array = array;
    }

    Queue.prototype.getBuffer = function () {
      return this.array.slice();
    };

    Queue.prototype.isEmpty = function () {
      return this.array.length == 0;
    };

    Queue.prototype.peek = function () {
      return this.array[0];
    };

    Queue.prototype.enqueue = function (value) {
      return this.array.push(value);
    };

    Queue.prototype.dequeue = function () {
      return this.array.shift();
    };

    return Queue;
  })();

  const q = new Queue();

  for (let i = 1; i <= n; i++) {
    q.enqueue(i);
  }

  while (!q.isEmpty()) {
    for (let i = 0; i < k - 1; i++) {
      q.enqueue(q.dequeue());
    }
    console.log(q.dequeue());
  }
});
