// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
  var count = 0;
  console.log(ch);
  console.log(ch.toUpperCase());
  console.log(ch.toLowerCase());

  for (var i = 0; i < word.length; i++) {
    if (
      word[i].indexOf(ch.toUpperCase()) != -1 ||
      word[i].indexOf(ch.toLowerCase()) != -1
    ) {
      count++;
    }
  }

  return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i].indexOf("A") != -1 || word[i].indexOf("a") != -1) {
      count++;
    }
  }
  return count;
}

// 테스트 코드
console.log(countCharacter("AbaCedEA", "E"));
console.log(countCharacter("AbaCedEA", "X"));
console.log(countA("AbaCedEA"));
