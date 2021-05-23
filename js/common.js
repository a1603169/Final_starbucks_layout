const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
  // logic 입력 
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', 'Search');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('.badges'); 
const toTopEl = document.querySelector('#to-top');

// footer


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //textContent 포함되어 있는 텍스트 데이터 2021