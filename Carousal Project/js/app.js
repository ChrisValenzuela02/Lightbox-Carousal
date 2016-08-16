var $filterList;


// Checks minimum width of device to determine which form of slick and lightbox to display.
if ( $(window).width() < 768) {
// Search for and remove attribute that enables lightbox plugin
$(".picture-gallery a").removeAttr("data-lightbox");
$(".picture-gallery").append('<p>Swipe to slide</p><br><p>Touch to open</p>');
// Enable single/mobile screen slick appearance
$(".picture-gallery ul").slick({
  arrows: false,
  fade: true,
  speed: 500,
  infinite: true,
  cssEase: 'linear'
});

// If display is mobile, then produce single element lightbox vs default plugin setting. For example, removing the options to cycle on mobile.
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p");

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

$(".picture-gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $overlay.show();
  var captionText = $(this).attr("data-title");
  $caption.text(captionText);
  $caption.append('<br><br><p>Tap again to close</p>');
});
$overlay.click(function(){
$overlay.hide();
});

} 

// If display is not mobile, does not enable slick slideshow and enable lightbox plugins with defaults.
// If display is desktop, enable search box to filter images via jquery.
$( "input" ).keyup(function() {
  $filterList  = $( this ).val();
  if($filterList){
    $filterList = $filterList.toLowerCase();
    $("#search_list").find("a:not(:contains(" + $filterList + "))").parent().fadeOut("slow");
    $("#search_list").find("a:contains(" + $filterList + ")").parent().fadeIn("slow");
  }
  else{
    $("#search_list").find("li").fadeIn();
  }
}).keyup();

