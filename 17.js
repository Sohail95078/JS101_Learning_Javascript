let n=131;
if (n<=50){
  n=n*3+80;
  console.log(n);
  
}
else if(n>50&&n<=150){
  n=(50*3)+((n-50)*5)+80;
  console.log(n);
}
else if(n>150){
  n=(50*3)+(100*5)+((n-150)*10)+80;
  console.log(n);
}
