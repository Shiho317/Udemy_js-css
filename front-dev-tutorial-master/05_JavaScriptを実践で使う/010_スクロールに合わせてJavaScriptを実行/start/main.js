const child = document.querySelector('.child');
const cb = function(entries, observer){
  alert('intersecting');
}
const io = new IntersectionObserver(cb);
io.observe(child);
io.observe(child1);
io.observe(child2);
