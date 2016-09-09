console.log('Hello world!');

PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
	console.log('Hello Client!');
}

if (Meteor.isServer) {
	console.log('Hello Server');
}