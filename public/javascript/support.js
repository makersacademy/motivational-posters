//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function findImagesOnFlickr(options) {  
  $(options.container).empty();
  $(options.container).append($("<p>").text("Searching..."));
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: options.keyword.replace(' ', ','),
    tagmode: "all",
    format: "json"
  })
    .done(function( data ) {      
      data.items = shuffle(data.items);
      $(options.container).empty();
      if (data.items.length === 0) {
        $(options.container).append($("<p>").text("No images found"));
      }
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( options.container );
        if ( i === 3 ) {
          return false;
        }
      });
    });    
}
