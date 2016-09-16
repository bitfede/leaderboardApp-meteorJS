console.log('Hello world!');

var PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {

	//---------LEADERBOARD template

	Template.leaderboard.helpers( {
		//helper functions go here in JSON format
		'player' : function() {
			var currentUserId = Meteor.userId();
			return PlayersList.find({ createdBy: currentUserId }, { sort: {score: -1 , name: 1}});
		},
		'selectedClass': function() {
			var playerId = this._id;
			var selectedPlayer = Session.get('selectedPlayer');
			if (selectedPlayer == playerId) {
				return "selected";
			}
		},
		'selectedPlayer': function() {
			var selectedPlayer = Session.get('selectedPlayer');
			return PlayersList.findOne({ _id: selectedPlayer})
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
		},
		'click .remove': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    PlayersList.remove({ _id: selectedPlayer });
		}
	});

	//----------ADDPLAYERFORM template

	Template.addPlayerForm.events({
		'submit form': function(event) {
			event.preventDefault();
			var currentUserId = Meteor.userId();
			console.log(currentUserId + "submitted the form");
			var playerNameVar = event.target.playerName.value;
			PlayersList.insert({
				name: playerNameVar,
				score: 0,
				createdBy: currentUserId
			});
			event.target.playerName.value = "";
			}

	});
}

if (Meteor.isServer) {
	
}

















