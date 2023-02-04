let a=[1,2,3,-1,-2,-3,8];
let b=[];
for(let i=0;i<a.length;i++){
  if(a[i]>=0){
    b.push(1);
  }
  else{
    b.push(0);
  }
  
}
console.log(b)
