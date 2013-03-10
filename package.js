Package.describe({
	summary: "noUiSlider - minimal jQuery slider plugin"	
});

Package.on_use(function (api) {
	api.use('jquery','client');
	api.add_files([
		'noUiSlider.jquery.js',
		'noUiSlider.fox.css'
	],'client');
});