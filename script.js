function isElementInViewport (el) {

  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

function bannerInView(b) {
  // Needs to be a negative value as we need a minus percentage for the background-position css attribute to work properly.
  var scarcity = $(b).data('scarcity') * -1;
  if (isElementInViewport(b)) {
    setTimeout(function() {
      if (isElementInViewport(b)) {
        $(b).css({
          'background-position': scarcity + '% 0',
          'color': '#fff'
        });
      }
    }, 500); // Changes how long the banner must be in view for it to load in.
  }
}

$(window).on('DOMContentLoaded load resize scroll', function() {
  bannerInView($('.banner')[0]);
  bannerInView($('.banner')[1]);
});
