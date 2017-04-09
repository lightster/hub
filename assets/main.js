(function() {
  $('h1,h2,h3,h4,h5,h6').prepend(function() {
    var $a = $('<a class="header-anchor"><i class="fa fa-paragraph"></i></a>');
    $a.attr('href', '#' + $(this).attr('id'));

    return $a;
  });
})();
