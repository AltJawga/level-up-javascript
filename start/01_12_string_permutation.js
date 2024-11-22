// Write your code here
function stringPermutations(string) {
  if (string.length === 1) {
    return 1;
  }

  return string.length * stringPermutations(string.slice(1));
}

console.log(stringPermutations("hello"));