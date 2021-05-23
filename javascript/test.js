const input = [1, "A", 2, "B", 3, "C", 4, "A", 5, "C", 6, "D"];
const process = (input) =>
  Object.fromEntries(
    input.reduce((pre, cur, i, arr) => {
      if (typeof cur === "string")
        pre.set(
          cur,
          pre.has(cur) ? pre.get(cur).concat(arr[i - 1]) : [arr[i - 1]]
        );
      return pre;
    }, new Map())
  );
console.log(process(input));
// Object.fromEntries(
//   input.reduce((pre, cur, i, arr) => {
//     if (typeof cur === "string")
//       pre.has(cur)
//         ? pre.set(cur, pre.get(cur).concat(arr[i - 1]))
//         : pre.set(cur, [arr[i - 1]]);
//     return pre;
//   }, new Map())
// );
async function main() {
  const [a, b] = await Promise.all([f1(), f2()]);
  const c = await f3(b);
  const d = await f4(a, c);
  return d;
}
