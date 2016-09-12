console.log('Hello world!');

PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
	Template.leaderboard.helpers( {
		//helper functions go here in JSON format
		'player' : function() {
			return PlayersList.find();
		}
	});

	Template.leaderboard.events({
		'click .player': function() {
			console.log('You clicked a player element!')
		}
	});
}

if (Meteor.isServer) {
	
}