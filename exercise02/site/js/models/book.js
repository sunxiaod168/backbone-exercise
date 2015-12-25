var app = app || {};
app.Book = Backbone.Model.extend({
	idAttribute: '_id',
	defaults:{
		coverImage: 'img/cover.jpg',
		title: 'No Title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'None'
	}
});

