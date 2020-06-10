function dateToString() {
  let now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth();

  // '2000-01-01,01:01'
  return (
    now.getFullYear() +
    '-' +
    month +
    '-' +
    now.getDate() +
    ',' +
    now.getHours() +
    ':' +
    now.getMinutes()
  );
}
console.log(dateToString());
