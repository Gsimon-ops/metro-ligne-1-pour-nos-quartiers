const buttons=[...document.querySelectorAll('[data-filter]')];
const cards=[...document.querySelectorAll('#question-grid .fact')];
buttons.forEach(button=>button.addEventListener('click',()=>{
 buttons.forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 cards.forEach(c=>{c.hidden=button.dataset.filter!=='Tous'&&c.dataset.topic!==button.dataset.filter;});
 const n=cards.filter(c=>!c.hidden).length;
 document.querySelector('.result-count').textContent=`${n} question${n>1?'s':''} affiché${n>1?'s':''}`;
}));
function reveal(){const c=document.getElementById(location.hash.slice(1));if(c?.classList.contains('fact')){if(c.hidden)buttons[0].click();c.querySelector('details').open=true;c.scrollIntoView({block:'start'});}}
window.addEventListener('hashchange',reveal);reveal();
