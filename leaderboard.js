console.log('Hello world!');

PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
	Template.leaderboard.helpers( {
		//helper functions go here in JSON format
		'player' : function() {
			return PlayersList.find();
		},
		'selectedClass': function() {
			var playerId = this._id;
			var selectedPlayer = Session.get('selectedPlayer');
			if (selectedPlayer == playerId) {
				return "selected";
			}
		}
	});

	Template.leaderboard.events({
		'click .player': function() {
			var playerID = this._id;
			Session.set('selectedPlayer', playerID);
		},
		'click .increment': function() {
			var playerID = Session.get('selectedPlayer');
			PlayersList.update({ _id: playerID }, {$inc: {score: 5}});
		},
		'click .decrement': function() {
			var playerID = Session.get('selectedPlayer');
			PlayersList.update({ _id: playerID }, {$inc: {score: -5}});
		}
	});
}

if (Meteor.isServer) {
	
}