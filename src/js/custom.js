// custom js file
// import Vue from 'vue'

var vue = require('vue');
var axios = require('axios');
var newsapi = require('newsapi');

(function(){

	console.log(vue);
	console.log(axios);
	console.log(newsapi);

	var app = new Vue({
  		el: '#app',
  		data: {
			aboutPage: 'About Us',
			homePage: 'Home',
    		news: false,
			newsData: false,
			display: true,
			searchQuery: false
  		},
		methods: {
			goAboutPage: function () {
				console.log('working switch')
				this.display = false;
			},
			goHomePage: function () {
				console.log('working switch')
				this.display = true;
			},
			search: function () {
				var searchQuery = document.getElementById("searchBar").value
				app.searchQuery = searchQuery
				console.log(searchQuery)
				if (searchQuery != null) {
					console.log('search working')
					axios({
						method: 'get',
						url: 'http://newsapi.org/v2/everything?domains=wsj.com&q='+ app.searchQuery + '&apiKey=557ae4d31b5a4ef59cfe08919181c390'
					})
						.then(function (response) {
							app.newsData = response;
							app.news = response.data.articles;
						}); // Request ENDS
				} // If ENDS
			} // Search Functuin ENDS
		}

	});

	// function goSearch (word) {
	// 	axios({
	// 		method: 'get',
	// 		url: 'http://newsapi.org/v2/everything?domains=wsj.com&q=' + word + '&apiKey=557ae4d31b5a4ef59cfe08919181c390'
	// 	})
	// 	.then(function (response){
	// 		console.log(response.data);
	// 		app.news = response.data;
	// 	});
	// }



	axios({
		method: 'get',
		url: 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=557ae4d31b5a4ef59cfe08919181c390'
	})
	.then(function (response){
		app.news = response;
		console.log(response);
	});

	console.log(app);




})(); // iffe ENDS
