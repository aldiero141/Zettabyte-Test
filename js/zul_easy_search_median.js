// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const middle = (input.length + 1) / 2;
  const sorted = [...input].sort((a, b) => a - b);
  const isEven = sorted.length % 2 === 0;
  return isEven ? (sorted[middle - 1.5] + sorted[middle - 0.5]) / 2 : sorted[middle - 1];
}

console.log(result(input));
