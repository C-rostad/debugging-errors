const input = process.argv[2];

const reverseList = function(original) {
  return original.split('').reverse().join('');
};

if (input) {
  console.log(reverseList(input));
}

