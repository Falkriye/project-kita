/* Animasi: muncul saat di-scroll + bayangan header. Dimuat setelah script.js */
(function(){
  var header=document.getElementById('site-header');
  function onScroll(){if(header)header.classList.toggle('scrolled',window.scrollY>8)}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
  var els=document.querySelectorAll('main .hero h1,main .hero p,main .acts,main .head,main .card,main .steps li,main .cta,main .scroll,main .faq details');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){
    var i=Array.prototype.indexOf.call(el.parentElement.children,el);
    el.style.setProperty('--dl',Math.min(i,6)*90+'ms');
    el.classList.add('rv');io.observe(el);
  });
  setTimeout(function(){els.forEach(function(el){el.classList.add('in')})},3000);
})();
