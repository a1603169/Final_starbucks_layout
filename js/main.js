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

// window 는 프로젝트가 나타나있는 하나의 탭 즉 브라우저 창 화면 자체

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    // badgeEl.style.display = 'none'
    // gsap.to(요소, 지속시간 second 단위, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    //배지 보이기
    // badgeEl.style.display = 'block'
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));

// _.throttle(함수, 시간(밀리세컨드 단위))를 하여 스크롤 이벤트를 제한함 데이터를 줄여줌


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {

    // gsap.to(요소, 지속시간 second 단위, 옵션 => 객체데이터);
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7,
    // 순차적이기 위해서 인덱스 플러스 1 (인덱스는 제로베이스 넘버 페이드인이라는 요소는 4개니 한 개씩 하다보면 첫번째는 0.7 / 1.4 / 2.1 / 2.7) ***정말 중요한 로직이네...잘알아놓자
    opacity: 1
  });

});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  // autoplay: 자동 슬라이드
  autoplay: true,
  loop: true
  // 루프되는 것 4번째 슬라이드에서 다시 첫번째로 
});