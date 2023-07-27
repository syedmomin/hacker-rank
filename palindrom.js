function palindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  if (reverseStr === str) return true;
  return false;
}

console.log(palindrome("eye"));
console.log(palindrome("eyed"));
