google.load("search", "1");

function findImagesOnGoogle(options) {  
  $(options.container).empty();
  $(options.container).append($("<p>").text("Searching..."));

  var imageSearch = new google.search.ImageSearch();
  imageSearch.setSearchCompleteCallback(this, function() {
    google.search.Search.getBranding('branding');
    $(options.container).empty();
    for (var i = 0; i < imageSearch.results.length; i++) {
      var result = imageSearch.results[i];      
      var img = $("<img>");
      img.attr('src', result.tbUrl);
      img.data('url', result.url);
      img.appendTo(options.container);
    }
  }, null);
  imageSearch.setResultSetSize(8);
  imageSearch.execute(options.keywords);  
}