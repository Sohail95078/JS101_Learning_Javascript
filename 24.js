let p = num;
let r;
let sum = 0;
console.log()
while (num >= 1) {
  r = num % 10;
  sum = sum * 10 + r;
  num = Math.floor(num / 10);

}
if (sum === p) {
  console.log("Yes");
}
else {
  console.log("No");
}