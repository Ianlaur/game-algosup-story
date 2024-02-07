// Create a function to handle the button click event
window.onload = function() {
    document.getElementById('run').addEventListener('click', function() {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>Who will you call?</h1>';
        var choices = ['Joe', 'Mama', 'Freddy', 'Brother'];

        function choice(person) {
            console.log('Calling ' + person);
            // Add your code here to handle the logic for each person the player can call
        }

        choices.forEach(function(person) {
            choice(person);
        });
    });
}