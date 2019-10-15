$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) ||
			(val.bio.search(myExp) != -1)) {
				output += '<li>';
				output += '<h1>'+ val.shortname +'</h1>';	
			    output += '<a href="'+ val.github +'" target="_blank"> Open <i class="fa fa-github"></i> Github</a>';	
				output += '<p>'+ val.bio +'</p>';	
				output += '<h2>'+ val.tech + '</h2>';
				output += '<strong>'+ val.name + '</strong>';
				output += '<img width="52px" src="'+ val.image +'" />';
			    output += '<a href="'+ val.website +'" target="_blank"> Open <i class="fa fa-home"></i> Website</a>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});
