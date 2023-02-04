for (let hori = 1; hori <= 10; hori++) {
  let s = "";
  for (let ver = 1; ver <= 10; ver++) {
    if (hori == 1 || hori == 10 || ver == 1 || ver == 10) {
      s = s + "*"
    }
    else {
      s = s + " "
    }
  }
  console.log(s)

}