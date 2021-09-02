function random_article_elements() {
	//one set of values for further manipulation
	var wikiAPI_URL = 'https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts|info&inprop=url&exintro=&format=json&callback=?';
	
	//populate info from Wiki API JSON file
	function populate_info() {
		$.getJSON(wikiAPI_URL, function(data) {
			$.each(data.query.pages, function(i, item) {
				$("#wikipedia-article h2").empty().append(item.title);
				$("#wikipedia-article article").empty().append(item.extract);
				$("#wikipedia-article a").attr({ target:"_blank", href:item.fullurl });
			});
		});
	};
	populate_info();
	
	$('#generate-article').on('click', function () {
		populate_info();
	 });
};

//INITIALISE
function initialise() {
	random_article_elements();
};