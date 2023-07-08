function checkVowel(character) {
  switch (character.charAt(0)) {
    case "a" || "e" || "i" || "o" || "u":
      return true;
    default:
      return false;
  }
}

console.log(checkVowel("amkdmoiod"));
