let a=[1,2,3,4,5,6,7,9,56];
c=0;
s=0;
for(let i=0;i<a.length;i++){
  if (a[i]%2==0){
    c++;
  }
  else{
    s++;
  }
}
console.log("even :",c);
console.log("odd : ",s);