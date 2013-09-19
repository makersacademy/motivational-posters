
function start() {
  $('#go-search').on('click', function() {
    findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
  });

  $('#search-results').on('click', 'img', function() {
    var url = $(this).data('url');
    var img = $("<img>").attr('src', url);
    $("#workspace img").remove();
    $("#workspace").append(img);
  });

  $('#text').on('input', function() {
    $("#caption").text($(this).val());
  });

  $('#left').on('change', function() {
    $("#caption").css("left", $(this).val());
  });

  $('#top').on('change', function() {
    $("#caption").css("top", $(this).val());
  });

  $('#width').on('change', function() {
    $("#caption").css("width", $(this).val());
  });

  $('#size').on('change', function() {
    $("#caption").css("font-size", $(this).val());
  });

  $('#colour').on('change', function() {
    $("#caption").css("color", $(this).val());
  });

  $('#align').on('change', function() {
    $("#caption").css("text-align", $(this).val());
  });

  $('#text').trigger("input");

}

$(start);