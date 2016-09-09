console.log('Hello world!');

PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
	Template.leaderboard.helpers = function() {
		//helper functions go here in JSON format
		'player': function() {
			return "Some text";
		},
		'player2': function() {
			return "Some other text";
		}
	};
}

if (Meteor.isServer) {

}