function list_collapse(e) {
	console.log($( e.childNodes ).has( ".genericon-collapse",  ".genericon-expand" ).children());
$( $( e.childNodes ).has( ".drop").children()).toggleClass( "genericon-expand genericon-collapse", 1, "easeOutSine" );
$( e.parentNode ).toggleClass( "list-collapse", 500, "easeOutSine" );

}

