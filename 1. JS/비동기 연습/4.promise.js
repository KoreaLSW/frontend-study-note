// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(), seconds * 1000);
  });
}

runInDelay(2)
  .then(() => {
    console.log("타이머 완료");
  }) // 성공 시 실행
  .catch() //
  .finally(console.log("무조건 출력"));
