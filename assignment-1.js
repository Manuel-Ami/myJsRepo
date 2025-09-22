function capitalizeWords(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  return words.join(" ");
}

console.log(capitalizeWords("the seniordevship nor easy man"));


