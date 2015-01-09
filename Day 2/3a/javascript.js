
var newDiv = $('<div id="msgid"></div>');
$("body").html(newDiv);
$("#msgid").html('<p>Howdy! My site Where All the Code is in a Script file!</p>');
$("body").append('<p><a href="#" onclick="calculate()"> Calculate life time supply </a></p>');
$("body").append('<p><a href="#" onclick="favoriteThings()"> What are my favorite things?</a></p>');
$("body").append('<p><a href="#" onclick="myFriends()"> Who are my friends?</a></p>');

function calculate() {
    var age = 29;
    var max_age = 101;
    var avg = 1; // bottle of soda
    var amount = (max_age - age) * 365 * avg;
    var answer = "You will need " + amount + " bottles of soda to last you until an old age of " + max_age + ".";
    if (amount > 40000) {
        answer += "\nWow! That's a lot!";
    } else {
        answer += "\nYou seem pretty reasonable!"
    }
    alert(answer);
}

function favoriteThings() {
    var favThings = ['My Mom', 'Jackie', 'Glinda the Cat', 'Programming', 'Playing Online Games'];

    var answer = "My favorite things are ";
    for (i=0; i<favThings.length; i++) {
        answer += favThings[i];
        if (i == (favThings.length - 1)) {
            answer += ".";
         } else  if (i == (favThings.length - 2)) { // Bonus Answer
            answer += " and ";
         } else {
            answer += ", ";
         }
    }
    alert(answer);
}

function myFriends() {
    var friends = [
    {name:'Jackie', hair:'blonde'},
    {name:'Glinda', hair:'black'},
    {name:'Grandma', hair:'gray'}
    ];

    var answer = "My Friends: \n";
    for (var i = 0; i < friends.length; i++) {
        answer += describeFriend(friends[i]);
    }
    alert(answer);
}

// Bonus function
function describeFriend(friend) {
    var description = friend.name + " has " + friend.hair + " hair.\n";
    return description;
}
