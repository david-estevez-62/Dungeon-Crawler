var World = function (imageUrl){
	this.imageUrl = imageUrl;
	this.players = [];
	this.rooms = [];
	this.items = [];
	this.monsters = [];
};
World.prototype.addPlayer = function(player){
  this.players.push(player);
  player.moveTo(this.$el);
  player.world = this;
} 

World.prototype.render = function(){
	this.$el = $("<div>")
		.addClass('world')
		.append(
			$('<img>')
			.attr('src', this.imageUrl)
			);

		return this.$el;
};
// World.prototype.findItem = function(item, room){
//   this.players[0]
// }


var Player = function(name, imageUrl){
	this.name =name;
	this.imageUrl = imageUrl;
	this.items = [];
};

Player.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('player')
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );
  return this.$el;
};

Player.prototype.startAt = function(domTarget, onComplete) {
  // The position() method will give you the top and left
  // coordinates of any element even if it isn't absolutely positioned.
  this.$el.animate({
    top: domTarget.position().top,
    left: domTarget.position().left
  }, {
    complete: onComplete
  }, 1000);
};

Player.prototype.goTo = function(rooms) {
 var player = this;

  this.startAt(rooms.$el, function(){

    
    });



var Items = function(contents){
  this.contents = contents;
}



    // Send the truck back home!
    player.startAt(players.World.$el);

};

Items.prototype.addItem = function(){
  this.items.push
}





















var Rooms = 0;


var Rooms = function(imageUrl) {
  this.imageUrl = imageUrl;
  this.adjRoom = [];
  this.items = [];

  // Retain a reference to the value of the current count
  this.index = roomsCount;

  // Increment the target count
  roomsCount++;
};

Rooms.prototype.pickupItem = function(){
  this.players
}












var world = new World('http://fc09.deviantart.net/fs71/i/2010/327/2/1/the_magi___space_port_by_bradwright-d33fe4m.jpg');

var player = new Player('Speedy', 'http://www.clker.com/cliparts/g/9/t/h/M/L/boy-stick-figure-hi.png');
var room1 = new Target('123 Street Name', 'https://mattsko.files.wordpress.com/2010/11/space-home.jpg');
var room2 = new Target('456 Main Road', 'http://www.designmeetscomfort.com/wp-content/uploads/2012/06/jetsons.jpg');


world.targets.push(room1);
world.targets.push(room2);


$(document).on('ready', function(){
  $('body').append(
    world.render(),
    players.render(),
    room1.render(),
    room2.render()
    );
  world.addPlayer(player);

})



// var Rooms
// var Items
// var Monsters

