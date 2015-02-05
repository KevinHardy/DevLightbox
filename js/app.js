//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

$(document).ready(function() {
	//var $body = $('body');
	//var $list-items = $('ul').children();//now I can use my created variable instead of calling that big ul.children every single time
	var $img = $('<img>');
	var $overlay = $('<div id="overlay"></div>');
	var $caption = $('<p></p>');

	$('body').append($overlay);
	$($overlay).append($img);
	$($overlay).append($caption);
	//capture click event on image
	//prevent new page from opening on click
	$('#imageGallery a').on('click', function(event) {
		event.preventDefault();
		console.log('event prevented.');
		$($overlay).show();

		var location = $(this).attr('href');
		console.log(location);

		$img.attr('src', location);

		var captionText = $(this).children().attr('alt');
		console.log(captionText);

		$caption.text(captionText);
	});

	//make overlay disapear when click again
	$($overlay).on('click', function() {
		$($overlay).hide();
	});
});