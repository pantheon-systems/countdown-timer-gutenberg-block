<?php

function countdown_timer_enqueue_block_editor_assets() {
	$dir = dirname( __FILE__ );
	$index_js = 'countdown-timer/index.js';
	$editor_css = 'countdown-timer/editor.css';
	wp_enqueue_script( 'countdown-timer-index_js', plugins_url( $index_js, __FILE__ ), array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
	), filemtime( "$dir/$index_js" ) );
	wp_enqueue_style( 'countdown-timer-block', plugins_url( $editor_css, __FILE__ ), array(
		'wp-blocks',
	), filemtime( "$dir/$editor_css" ) );
}
add_action( 'enqueue_block_editor_assets', 'countdown_timer_enqueue_block_editor_assets' );
