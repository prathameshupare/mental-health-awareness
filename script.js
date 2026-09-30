// MindCare interactions

// Mobile navigation
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
if(menuBtn && nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('show'));}
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>nav&&nav.classList.remove('show')));

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question=>{
  question.addEventListener('click',()=>{
    const item=question.parentElement;
    const answer=item.querySelector('.faq-answer');
    document.querySelectorAll('.faq-item').forEach(other=>{
      if(other!==item){other.classList.remove('active');const a=other.querySelector('.faq-answer');if(a)a.style.maxHeight=null;}
    });
    item.classList.toggle('active');
    answer.style.maxHeight=item.classList.contains('active') ? answer.scrollHeight+'px' : null;
  });
});

// Warning signs toggle
const signsButton=document.querySelector('.warning .primary-btn');
const signsBox=document.querySelector('.signs-box');
if(signsButton && signsBox){
 signsButton.addEventListener('click',()=>{
  signsBox.classList.toggle('show');
  signsButton.textContent=signsBox.classList.contains('show')?'Hide warning signs':'View warning signs';
 });
}
