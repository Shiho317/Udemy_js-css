const arry = [1,2,3,4,5];

arry.forEach(function(val, i, ary){
    console.log(val, i ,ary);
});

for(let i = 0; i < arry.length; i++){
  const val = arry[i];
  console.log(val);
}
