google.load("search", "1");
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function findImagesOnGoogle(options) {  
  $(options.container).empty();
  $(options.container).append($("<p>").text("Searching..."));

  var imageSearch = new google.search.ImageSearch();
  imageSearch.setSearchCompleteCallback(this, function() {
    google.search.Search.getBranding('branding');
    $(options.container).empty();
    for (var i = 0; i < imageSearch.results.length; i++) {
      var result = imageSearch.results[i];      
      $("<img>").attr('src', result.tbUrl).appendTo(options.container);
    }
  }, null);
  imageSearch.setResultSetSize(8);
  imageSearch.execute(options.keywords);  
}


