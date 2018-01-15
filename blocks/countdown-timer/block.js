( function() {
	var getTimeRemaining = function( endtime ) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {
			'total': t,
			'days': days >= 0 ? days : 0,
			'hours': hours >= 0 ? hours : 0,
			'minutes': minutes >= 0 ? minutes : 0,
			'seconds': seconds >= 0 ? seconds : 0
		};
	};

	var updateTimers = function() {
		var elements = document.getElementsByClassName('countdown-timer'),
			element,
			timeRemaining,
			innerHTML;
		for ( var i = elements.length - 1; i >= 0; i--) {
			element = elements[i];
			timeRemaining = getTimeRemaining( element.dataset.datetime );
			if ( timeRemaining ) {
				innerHTML = '<span class="countdown-timer-days">' + timeRemaining.days + ' days</span> '
					+ '<span class="countdown-timer-hours">' + timeRemaining.hours + ' hours</span> '
					+ '<span class="countdown-timer-minutes">' + timeRemaining.minutes + ' minutes</span> '
					+ '<span class="countdown-timer-seconds">' + timeRemaining.seconds + ' seconds</span>';
			} else {
				innerHTML = '';
			}
			element.innerHTML = innerHTML;
		}
	};

	updateTimers();
	setInterval( updateTimers, 1000 );

}());
