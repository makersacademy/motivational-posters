
function start() {
  $('#go-search').click(function() {
    findImagesOnFlickr({keyword: $('#search-term').val(), container: '#search-results'})
  });
}

$(start);