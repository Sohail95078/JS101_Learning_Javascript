let limit = 14
for (let i = 1; i <= limit; i++) {
  let cou = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      cou++;
    }
  }
  if (cou == 2) {
    console.log(i)
  }
}