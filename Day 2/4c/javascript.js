$(document).ready(function() {
    var newDiv = $('<div id="msgid"></div>');
    $("body").prepend(newDiv);
    $("#msgid").html('<p>Welcome to My site Where All the Code is in a Script file!</p>');

    $("body").append('<p><a href="#" id="link1">Calculate life time supply</a></p>');
    $("#link1").bind({
        click: function() {
            calculate();
        }
    });
    $("body").append('<p><a href="#" id="link2">What are my favorite things?</a></p>');
    $("#link2").bind({
        click: function() {
            favoriteThings();
        }
    });
    $("body").append('<p><a href="#" id="link3">Who are my friends?</a></p>');
    $("#link3").bind({
        click: function() {
            myFriends();
        }
    });
    var boxDiv = $('<div id="mybox" style="width:100px;height:200px;"></div>');
    $("body").append(boxDiv);
    $("#mybox").bind({
        click: function() {
            $(this).html('green');
            $(this).css('background-color', 'green')
        },
        mouseenter: function() {
            $(this).html('purple');
            $(this).css('background-color', 'purple')
        },
        mouseleave: function() {
            $(this).html('orange');
            $(this).css('background-color', 'orange')
        }
    });

    $('#form1').submit(function(event) {
        var name = $('#name').val();
        var age = $('#age').val();
        var max_age = $('#max_age').val();
        var snack = $('#snack').val();
        var avg = $('#avg').val();
        var answer = calculateForm(name, age, max_age, snack, avg);
        var display = '<p>' + answer + '</p>';
        $("#calc_msg").html(display);
        return false; // don't submit to server
    });

    var newDiv = $('<div id="events"><p><a href="#" id="get_events">Where are the meetups?</a></p></div>');
    $("body").append(newDiv);
    $("#events").bind({
        click: function() {
            meetupOpenEvents('80528', '1.0');
        }
    });

    $('#form2').submit(function(event) {
        var zipcode = $('#zip').val();
        var radius = $('#radius').val();
        meetupOpenEvents(zipcode, radius);
        return false; // don't submit to server
    });
});

function meetupOpenEvents(zipcode, radius) {
    $.ajax({
        url: 'https://api.meetup.com/2/open_events',
        data: {
            "zip": zipcode,
            "radius": radius,
            "key": 'put your api key here'
        },
        crossDomain: true,
        dataType: 'jsonp',
        type: "GET",
        success: function(data) {
            console.log(data);
            var descrip = "Size of results is " + data.results.length;
            console.log(descrip);
            listEvents(data);

        },
        error: function(data) {
            // code with error returned
        }
    });
}

function listEvents(data) {
    for (var i = 0; i < data.results.length; i++) {
        descrip = 
        '<div><p><h2>' 
        + data.results[i].group.name + ':' 
        + ' ' + data.results[i].name 
        + '</h2></p><p>' 
        + data.results[i].description 
        + '</p></div>';
        var newDiv = $(descrip);
        $("body").append(newDiv);
    }
}

function calculateForm(name, age, max_age, snack, avg) {
    var amount = (max_age - age) * 365 * avg;
    var answer = name + " you will need " + amount + " " + snack + " to last you until an old age of " + max_age + ".";
    if (amount > 40000) {
        answer += "\nWow! That's a lot!";
    } else {
        answer += "\nYou seem pretty reasonable!"
    }
    return answer;
}

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
    for (var i = 0; i < favThings.length; i++) {
        answer += favThings[i];
        if (i == (favThings.length - 1)) {
            answer += ".";
        } else if (i == (favThings.length - 2)) { // Bonus Answer
            answer += " and ";
        } else {
            answer += ", ";
        }
    }
    alert(answer);
}

function myFriends() {
    var friends = [{
        name: 'Jackie',
        hair: 'blonde'
    }, {
        name: 'Glinda',
        hair: 'black'
    }, {
        name: 'Grandma',
        hair: 'gray'
    }];

    var answer = "My Friends: \n";
    for (var i = 0; i < friends.length; i++) {
        answer += describeFriend(friends[i]);
    }
    alert(answer);
}

function describeFriend(friend) {
    var description = friend.name + " has " + friend.hair + " hair.\n";
    return description;
}
