(function(){
  var links=[].slice.call(document.querySelectorAll('.ph')),lb=document.getElementById('lb'),img=lb.querySelector('img'),cnt=lb.querySelector('.lb-count'),i=0,sx=null;
  function show(n){i=(n+links.length)%links.length;img.src=links[i].getAttribute('href');cnt.textContent=(i+1)+' / '+links.length}
  function open(n){show(n);lb.hidden=false;document.body.style.overflow='hidden'}
  function close(){lb.hidden=true;img.removeAttribute('src');document.body.style.overflow=''}
  links.forEach(function(a,n){a.addEventListener('click',function(e){e.preventDefault();open(n)})});
  lb.querySelector('.lb-close').onclick=close;
  lb.querySelector('.lb-prev').onclick=function(e){e.stopPropagation();show(i-1)};
  lb.querySelector('.lb-next').onclick=function(e){e.stopPropagation();show(i+1)};
  lb.addEventListener('click',function(e){if(e.target===lb)close()});
  document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
  lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  lb.addEventListener('touchend',function(e){if(sx===null)return;var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(i+(d<0?1:-1));sx=null});
  var v=document.querySelector('.hero video');if(v){var p=v.play();if(p&&p.catch)p.catch(function(){})}
})();
