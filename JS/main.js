$( function() {
   $( check ).datepicker();
   $('.sixSliders').slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:false ,
   });
} );
function toggleVideo() {
   let video = document.querySelector(".video video")
   if (video.paused) {
      video.play();
      document.querySelector(".video i").classList.remove("fa-play")
      document.querySelector(".video i").classList.add("fa-pause")
   }else {
      video.pause();
      document.querySelector(".video i").classList.add("fa-play")
      document.querySelector(".video i").classList.remove("fa-pause")
   }
}
document.querySelector(".video i").addEventListener("click",toggleVideo)
