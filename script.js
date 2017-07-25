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
  var scarcity = $(b).data('scarcity') * -1;
  if (isElementInViewport(b)) {
    setTimeout(function() {
      if (isElementInViewport(b)) {
        $(b).css({
          'background-position': scarcity + '% 0',
          'color': '#fff'
        });
      }
    }, 500);
  }
}

$(window).on('DOMContentLoaded load resize scroll', function() {
  bannerInView($('.banner')[0]);
  bannerInView($('.banner')[1]);
});
