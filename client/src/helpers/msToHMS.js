function msToHMS(s) {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  let secs = s % 60;
  s = (s - secs) / 60;
  let mins = s % 60;
  let hrs = (s - mins) / 60;

  if (hrs < 0) hrs = '00';
  if (mins < 0) mins = '00';
  if (secs < 0) secs = '00';

  if (mins < 10 && secs < 10) {
    return hrs + ':0' + mins + ':0' + secs;
  } else if (secs < 10) {
    return hrs + ':' + mins + ':0' + secs;
  } else if (mins < 10) {
    return hrs + ':0' + mins + ':' + secs;
  } else {
    return hrs + ':' + mins + ':' + secs;
  }
}

export default msToHMS;
