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

// window 는 프로젝트가 나타나있는 하나의 탭 즉 브라우저 창 화면 자체

window.addEventListener('scroll', _.throttle(function() { // lodash 꺼
  console.log(window.scrollY);
  if(window.scrollY > 500) { //500 px
    //배지 숨기기
    // badgeEl.style.display = 'none'
    // gsap.to(요소, 지속시간 second 단위, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    //버튼 보이기
    gsap.to(toTopEl, .2, {
    x:0
    })
  } else {
    //배지 보이기
    // badgeEl.style.display = 'block'
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));

// _.throttle(함수, 시간(밀리세컨드 단위))를 하여 스크롤 이벤트를 제한함 데이터를 줄여줌

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

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

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 기본값 입니다.
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백 px
  centeredSlides: true, // 1번 슬라이드가 가운데에 보이기
  loop: true,
  //  autoplay: {
  //    delay: 2000 // ms 단위 .5초
  //  }
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자가 페이지 번호 요소 클릭으로 제어 할 수 있는지 확인
  }, 
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal' = 기본값
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 30px 
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
// 다른 값으로 바뀔 수 있으니 let 으로 만듬

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // ! 의 기능은 값을 반대로 만들어줌 거짓 >> 트루 로 
  // false 에서 트루로 변환됨 클릭하면 처음은 팔스
  if (isHidePromotion) {
    // 숨김 처리 트루
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리 팔스
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1, //무한반복 이 라이브러리에서
    yoyo: true, // 한번 재생된 애니메이션을 다시 거꾸로 재생
    ease: "power1.inOut", // gsap easing 으로 알수 있음 구글 검색하세용
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 정함
    triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //textContent 포함되어 있는 텍스트 데이터 2021