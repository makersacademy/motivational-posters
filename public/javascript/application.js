
function start() {
  $('#go-search').click(function() {
    findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
  });
}

$(start);