document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 120,
		height      : 30,
    pagination  : false,
    arrows      : false,
		gap         : 10,
		cover       : true,
		isNavigation: true,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		}
	} ).mount();

	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
    video         : {
      autoplay    : true,
      muted       : true,
      loop        : true,
    }
	} ); // do not call mount() here.

	primarySlider.sync( secondarySlider ).mount( window.splide.Extensions );
} );
