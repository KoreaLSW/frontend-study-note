// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (seconds < 0) {
    return new Error("seconds가 0보다 작습니다.");
  }
  setTimeout(callback, seconds * 1000);
}

runInDelay(() => console.log("3초 뒤에 실행"), 3);
