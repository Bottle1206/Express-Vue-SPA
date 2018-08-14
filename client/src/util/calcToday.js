Number.prototype.addZero = function() {
  return this < 10 ? '0' + this : this
}

const calcToday = (n) => { // n为天数 +1 -1
  const now = new Date();
  let milliSec = now.getTime();
  milliSec += n * 1000 * 60 * 60 * 24;
  now.setTime(milliSec);
  return now.getFullYear().addZero() + '/' + (now.getMonth() + 1).addZero() + '/' + now.getDate().addZero()
}

export default calcToday