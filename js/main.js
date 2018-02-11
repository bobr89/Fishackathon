$(document).ready(function(){
	//getMovies();
});

function getMovies(searchText){
	searchText = knight;

	axios.get('https://api.themoviedb.org/3/search/movie?api_key=7fa43255cc4168cfdf08da2a1b3eeafd&language=en-US&page=1&include_adult=false&query='+searchText)
		.then(function(response){
			console.log(response);
			let results = response.data.results;
			let output = '';
			$(response.data.results).each(function(index, movie){
				if (movie.poster_path != null){
					output += `
						<h1>123</h1>
					`;
				}

			});

			$('#ships').html(output);
		})
		.catch(function(error){
			console.log(error);
		});
}

function initMap() {
	var location = {lat: -25.363, lng: 131.044};
	var map = new google.maps>Maps(document.getElementById("map"), {
		zoom:4,
		center: location
	});
}



