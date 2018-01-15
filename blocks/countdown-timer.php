<?php

function countdown_timer_enqueue_scripts() {
	$dir = dirname( __FILE__ );
	$block_js = 'countdown-timer/block.js';
	wp_enqueue_script( 'countdown-timer-block', plugins_url( $block_js, __FILE__ ), array(), filemtime( "$dir/$block_js" ) );
}
add_action( 'wp_enqueue_scripts', 'countdown_timer_enqueue_scripts' );

function countdown_timer_enqueue_block_editor_assets() {
	$dir = dirname( __FILE__ );
	$index_js = 'countdown-timer/index.js';
	$block_js = 'countdown-timer/block.js';
	$editor_css = 'countdown-timer/editor.css';
	wp_enqueue_script( 'countdown-timer-block', plugins_url( $block_js, __FILE__ ), array(), filemtime( "$dir/$block_js" ) );
	wp_enqueue_script( 'countdown-timer-index', plugins_url( $index_js, __FILE__ ), array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'countdown-timer-block',
	), filemtime( "$dir/$index_js" ) );
	wp_enqueue_style( 'countdown-timer-block', plugins_url( $editor_css, __FILE__ ), array(
		'wp-blocks',
	), filemtime( "$dir/$editor_css" ) );
}
add_action( 'enqueue_block_editor_assets', 'countdown_timer_enqueue_block_editor_assets' );
