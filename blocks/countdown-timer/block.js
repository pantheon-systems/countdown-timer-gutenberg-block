( function( wp ) {
	var el = wp.element.createElement;
	var __ = wp.i18n.__;
	var BlockControls = wp.blocks.BlockControls;
	var InspectorControls = wp.blocks.InspectorControls;

	var renderHtml = function( props ) {
		var label = props.attributes.label;
		return el( 'div', { className: 'countdown-timer' },
				el( 'h2', { className: 'countdown-timer-label' }, label )
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
			label: {
				type: 'array',
				source: 'children',
				selector: 'h2',
			},
		},

		edit: function( props ) {
			var label = props.attributes.label,
				focus = props.focus;
			return [
				el( InspectorControls,
					{
						key: 'inspector',
					},
					el(
						InspectorControls.TextControl,
						{
							label: __( 'Label' ),
							value: label,
							onChange: function( newValue ) {
								props.setAttributes({
									label: newValue,
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
