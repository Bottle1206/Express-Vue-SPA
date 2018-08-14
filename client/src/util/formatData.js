const formatData = (num) => {
  if (!Number(num)) return num
  num = num + '';
  if (!num.includes('.')) { // 整数
    num += '.'
  } else { // 带小数
    num = Number(num).toFixed(2) + '';
  }
  return num.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
    return $1 + ',';
  }).replace(/\.$/, '');
}

const formatInt = (num) => {
  if (!Number(num)) return num
  num = parseInt(num) + '.';
  return num.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
    return $1 + ',';
  }).replace(/\.$/, '');
}

export default {
  formatData,
  formatInt
};