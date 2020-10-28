var shuffle = function (nums, n) {
  const shuffled = [];

  for (let i = 0; i < n; i++) {
    shuffled[i * 2] = nums[i];
    shuffled[i * 2 + 1] = nums[n + i];
  }

  return shuffled;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
