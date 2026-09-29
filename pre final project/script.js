const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
const theme=document.querySelector('.theme-toggle');
const saved=localStorage.getItem('portfolio-theme');
if(saved==='dark') document.body.classList.add('dark');
if(theme) theme.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('portfolio-theme',document.body.classList.contains('dark')?'dark':'light')});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
if(glow && matchMedia('(pointer:fine)').matches) document.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const form=document.querySelector('#contactForm');
if(form) form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.querySelector('#name').value.trim();
  const status=document.querySelector('#formStatus');
  status.textContent=`Thanks, ${name}! Your message has been prepared successfully.`;
  form.reset();
});
