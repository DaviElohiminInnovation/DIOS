/*
	DIOS - Davi Industrial & Operations Supply
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
	breakpoints({
		xlarge:   [ '1281px',  '1680px' ],
		large:    [ '981px',   '1280px' ],
		medium:   [ '737px',   '980px'  ],
		small:    [ '481px',   '736px'  ],
		xsmall:   [ null,      '480px'  ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);

		// Rolar suavemente para o ID se vier de outra página com hash
		if (window.location.hash) {
			var target = $(window.location.hash);
			if (target.length) {
				setTimeout(function() {
					$('html, body').animate({
						scrollTop: target.offset().top - $header.outerHeight() + 1
					}, 1000, 'swing');
				}, 250);
			}
		}
	});

	// Mobile?
	if (browser.mobile)
		$body.addClass('is-mobile');
	else {
		breakpoints.on('>medium', function() {
			$body.removeClass('is-mobile');
		});

		breakpoints.on('<=medium', function() {
			$body.addClass('is-mobile');
		});
	}

	// Scrolly (rolagem suave)
	$('.scrolly').scrolly({
		speed: 1500,
		offset: $header.outerHeight()
	});

	// Menu lateral
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-menu-visible'
		});

	// Header com efeito de scroll no banner
	if ($banner.length > 0 && $header.hasClass('alt')) {
		$window.on('resize', function() { $window.trigger('scroll'); });

		$banner.scrollex({
			bottom: $header.outerHeight() + 1,
			terminate: function() { $header.removeClass('alt'); },
			enter: function() { $header.addClass('alt'); },
			leave: function() { $header.removeClass('alt'); }
		});
	}

	// Rolagem suave para qualquer link com hash (ex: #contato)
	$('a[href*="#"]').on('click', function(e) {
		var target = $(this.hash);
		if (target.length) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - $header.outerHeight() + 1
			}, 1000, 'swing');
		}
	});

})(jQuery);
