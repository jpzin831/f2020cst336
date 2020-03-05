let buildGallery = function(){
	var keyData = "#isbn";
$.ajax({
  url: "https://openlibrary.org/api/books?bibkeys=ISBN:" + keyData + "&jscmd=details&callback=mycallback",
  dataType: "jsonp",
  success: function(data) {
    var getData = data["ISBN:" + keyData];
    var title = getData.details.title,
      author = getData.details.authors[0].name;
    $('.title').text(title);
    $('.author').text(author);
		$('.publisheryear').text(publisheryear);
		$('.publisher').text(publisher);
		$('.isbn').text(isbn)
		$('.pages').text(pages)

  }
});
}
