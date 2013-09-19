
function start() {
  $('#go-search').click(function() {
    findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
  });

  $('#search-results').on('click', 'img', function() {
    var url = $(this).data('url');
    var img = $("<img>").attr('src', url);
    $("#workspace").empty();
    $("#workspace").append(img);
  });

}

$(start);