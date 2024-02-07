window.onload = function() {
    document.getElementById('run').addEventListener('click', function() {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>You start running towards the nearest bunker...</h1>';
    });

    document.getElementById('find').addEventListener('click', function() {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>You decide to call your family first...</h1>';
    });
}