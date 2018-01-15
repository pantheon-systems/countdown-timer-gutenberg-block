( function( wp ) {
	var el = wp.element.createElement;
	var __ = wp.i18n.__;
	var BlockControls = wp.blocks.BlockControls;
	var InspectorControls = wp.blocks.InspectorControls;

	var renderHtml = function( props ) {
		return el( 'div', { className: 'countdown-timer' } );
	};

	// Visit https://wordpress.org/gutenberg/handbook/block-api/ to learn about Block API
	wp.blocks.registerBlockType( 'countdown-timer/countdown-timer', {
		title: __( 'Countdown Timer', 'countdown-timer' ),

		icon: 'clock',

		category: 'widgets',

		// Remove to make block editable in HTML mode.
		supportHTML: false,

		attributes: {
			datetime: {
				type: 'string',
			},
		},

		edit: function( props ) {
			return [
				el( InspectorControls,
					{
						key: 'inspector',
					},
					el(
						InspectorControls.TextControl,
						{
							label: __( 'Date & Time' ),
							value: props.attributes.datetime,
							onChange: function( newValue ) {
								props.setAttributes({
									datetime: newValue,
								});
							}
						}
					)
				),
				renderHtml( props )
			]
		},

		save: function( props ) {
			return (
				renderHtml( props )
			);
		}

	} );
} )(
	window.wp
);
