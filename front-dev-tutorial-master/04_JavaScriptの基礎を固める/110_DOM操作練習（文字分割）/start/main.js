document.addEventListener('DOMContentLoaded', function(){
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim();
  let concatStr = ''

  for(let c of str){
    concatStr = concatStr + `<span class = "char">${c}</span>`
  }
  el.innerHTML = concatStr;
  console.log(concatStr);
});