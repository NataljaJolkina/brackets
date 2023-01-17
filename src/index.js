module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsPairs = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsPairs[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for (let i = 0; i < str.length; i++) {
    if(bracketsPairs[stack[stack.length - 1]] == str[i]){
      stack.pop()
    } else {
      stack.push(str[i]);
    }
  }
  return stack == 0;
};
