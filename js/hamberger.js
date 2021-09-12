jQuery( function( $ ) {
	$( ".p-hamberger" ).on( "click", function() {
			$( ".p-frontside" ).toggleClass( "is-open" );
			$( ".p-workside" ).toggleClass( "is-open" );
			$( ".p-frontheader" ).toggleClass( "is-open" );
			$( ".p-hambergermanu" ).toggleClass( "is-open" );
			$( ".c-hambergerbackground" ).toggleClass( "is-open" );
      
	} );

	$( ".p-hambergermanu" ).on( "click", function() {
		$( ".p-hambergermanu" ).toggleClass( "is-open" );
		$( ".p-frontheader" ).toggleClass( "is-open" );
		$( ".p-frontside" ).toggleClass( "is-open" );
		$( ".p-workside" ).toggleClass( "is-open" );
		$( ".c-hambergerbackground" ).toggleClass( "is-open" );
} );


	
} );