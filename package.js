Package.describe({
	summary: "noUiSlider - minimal jQuery slider plugin"	
});

Package.on_use(function (api) {
	api.use('jquery','client');
	api.add_files([
		'jquery.nouislider.min.js',
		'jquery.nouislider.min.css'
	],'client');
});