bT = ((parent, $) => {

  /* get columns by thead */
  parent.getColumns = (id) => {
    return $('#' + id + ' thead tr th').map(function() {
      return $(this).text();
    });
  };

}(bT || {}, jQuery));
