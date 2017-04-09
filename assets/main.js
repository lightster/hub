(function() {
  function makeHeaderAnchor(idFinderCallback) {
    return function() {
      var $a = $('<a class="header-anchor"><i class="fa fa-paragraph"></i></a>');
      $a.attr('href', '#' + idFinderCallback($(this)));

      return $a;
    };
  }

  $('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]').prepend(
    makeHeaderAnchor(function($header) {
      return $header.attr('id');
    })
  );
  $('.anchorable').prepend(
    makeHeaderAnchor(function($header) {
      return $header.parents('[id]').first().attr('id');
    })
  );
})();
