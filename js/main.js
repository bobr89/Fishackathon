$(document).ready(function(){
	getInfo();
});

function getMovies(searchText){

	axios.get('https://api.themoviedb.org/3/search/movie?api_key=7fa43255cc4168cfdf08da2a1b3eeafd&language=en-US&page=1&include_adult=false&query='+searchText)
		.then(function(response){
			console.log(response);
			let results = response.data.results;
			let output = '';
			$(response.data.results).each(function(index, movie){
				if (movie.poster_path != null){
					output += `
						<div class="col-md-3">
							<div class="well text-center">
								<img src="https://image.tmdb.org/t/p/w640/${movie.poster_path}">
								<h5>${movie.title}</h5>
								<a onclick="getMovie(${movie})" class = "btn btn-primary" href="#">Movie Details</a>
							</div>
						</div>
					`;
				}
			});

			$('#movies').html(output);
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



