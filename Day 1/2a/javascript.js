function calculate() {
    var age = 51;
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
