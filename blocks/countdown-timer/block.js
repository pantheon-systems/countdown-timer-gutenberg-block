( function( wp ) {
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	// Visit https://wordpress.org/gutenberg/handbook/block-api/ to learn about Block API
	wp.blocks.registerBlockType( 'countdown-timer/countdown-timer', {
		title: __( 'Countdown timer', 'countdown-timer' ),

		category: 'widgets',

		// Remove to make block editable in HTML mode.
		supportHTML: false,

		edit: function( props ) {
			return el(
				'p',
				{ className: props.className },
				__( 'Replace with your content!', 'countdown-timer' )
			);
		},

		save: function() {
			return el(
				'p',
				{},
				__( 'Replace with your content!', 'countdown-timer' )
			);
		}
	} );
} )(
	window.wp
);
