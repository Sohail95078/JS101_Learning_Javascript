let arr = [23, 45, 12, 34, 89, 45];
let l = arr.length;
count = 0;
sum = 0;
for (let i = 0; i < l; i++) {
  if (arr[i] % 2 == 0) {
    sum = sum + arr[i];
    count++;
  }
}
console.log(sum / count);