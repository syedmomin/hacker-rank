function checkCharacter(s) {
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!vowel.includes(s[i])) {
      console.log(s[i]);
    }
  }
}

checkCharacter("javascriptloops");
