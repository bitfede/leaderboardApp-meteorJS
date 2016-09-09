console.log('Hello world!');

PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
	Template.leaderboard.player = function() {
		return 'some text';
	};
}

if (Meteor.isServer) {

}