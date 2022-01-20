const btn = document.querySelector('.lang-btn');
const content = document.querySelector('.lang');
function language() {
  btn.addEventListener('click', () => {
    btn.classList.toggle('lang-btn-active');
    content.classList.toggle('lang-active');
  })
}
language();
