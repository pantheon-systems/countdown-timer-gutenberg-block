( function( wp, moment ) {
	var el = wp.element.createElement;
	var __ = wp.i18n.__;
	var BlockControls = wp.blocks.BlockControls;
	var InspectorControls = wp.blocks.InspectorControls;

	var defaultDateTime = moment().add(8, 'days');
	var dateTimeFormat = 'YYYY-MM-DD HH:mm';

	var renderHtml = function( props ) {
		if ( typeof props.attributes.datetime === 'undefined' ) {
			return el( 'div', {
					className: 'countdown-timer'
				},
				el(
					'p',
					{},
					__( 'Please specify a date & time.' )
				),
			)
		}
		var date = moment( props.attributes.datetime );
		return el( 'div', {
				className: 'countdown-timer',
				'data-datetime': date.format( dateTimeFormat )
			},
			el(
				'p',
				{},
				'Countdown to ' + date.format( 'MMMM Do YYYY, h:mm:ss a' )
			),
		);
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
				default: defaultDateTime.format( dateTimeFormat )
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
	window.wp,
	window.moment
);
