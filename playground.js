function dateToString() {
  const RightNow = Date.now();
  console.log(RightNow);
  console.log(RightNow.getDate());
  console.log(RightNow.getMonth());
  console.log(RightNow.getFullYear());
  console.log(RightNow.getHours());
  console.log(RightNow.getMinutes());
  console.log(RightNow.getSeconds());

  const Date = RightNow.getDate();
  const Month = RightNow.getMonth();
  const FullYear = RightNow.getFullYear();
  const Hours = RightNow.getHours();
  const Minutes = RightNow.getMinutes();
  const Seconds = RightNow.getSeconds();
  // '2000-01-01,01:01'
  console.log(Date + '-' + Month + '-' + FullYear + ',' + Hours + ':' + Minutes);
}
console.log(dateToString());
