// 범위의 시작 지점(start), 끝 지점(end), 그리고 증가폭(step)을
function range(start, end, step) {
  var arr = [];
  // 시작지점에서 시작 + 증가폭으로 더해주며 배열에 넣는다.
  // 시작+증가폭의 값이 끝지점보다 높을경우 끝낸다.

  if (end > start) {
    for (let i = start; i < end; i) {
      arr.push(i);
      i += step;
    }
  } else {
    for (let i = start; i > end; i) {
      arr.push(i);
      i += step;
    }
  }

  return arr;
}
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));
