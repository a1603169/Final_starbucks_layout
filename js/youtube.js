// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // 이 값은 바꾸면 안댐
  new YT.Player('player', {
// div id player
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 id
    playerVars: {
      autoplay: true, // autoplay or not
      loop: true, // play again and again
      playList: 'An6LvWQuj_8'
    },
    events: {
      onReady: function(event) { // 영상이 준비되면 익명의 펑션이 제공됨
        event.target.mute() // target = 영상 , 음소거
      }
    }
  });
}