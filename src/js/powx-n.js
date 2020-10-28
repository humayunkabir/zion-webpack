function xPn(x, n) {
  if (n === 1) return x;
  return x * xPn(x, n - 1);
}

const myPow = function(x, n) {
  let result = 1;

  if (n > 0) {
    result = xPn(x, n);
  }

  if (n < 0) {
    m = n * -1
    result = 1 / xPn(x, m);
  }

  return result.toFixed(5);
};

//2147483647
