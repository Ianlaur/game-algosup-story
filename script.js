
window.onload = function() {
    var inventory = []; // Declare and initialize the inventory array

    document.getElementById('run').addEventListener('click', function() {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>Where will you run?</h1>';

        var choices = ['grocery store', 'weapon store', 'drug store', 'the white house'];

        choices.forEach(function(choice) {
            var button = document.createElement('button');
            button.innerHTML = choice;
            // choice of where to go
            button.addEventListener('click', function() {
                document.body.innerHTML = ''; // Clear the screen
                document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                // choice of what to take
                if (choice === 'grocery store') {
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                    groceryChoices.forEach(function(groceryChoice) {
                        var groceryButton = document.createElement('button');
                        groceryButton.innerHTML = groceryChoice;
                        groceryButton.addEventListener('click', function() {
                            inventory.push(groceryChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                            document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen

                            // Ask if the player wants to take anything else in the grocery store
                            var takeAnythingElseButton = document.createElement('button');
                            takeAnythingElseButton.innerHTML = 'Take anything else?';
                            takeAnythingElseButton.addEventListener('click', function() {
                                document.body.innerHTML = ''; // Clear the screen
                                document.body.innerHTML += '<h2>What else will you take?</h2>';
                                
                                var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                additionalChoices.forEach(function(additionalChoice) {
                                    var additionalButton = document.createElement('button');
                                    additionalButton.innerHTML = additionalChoice;
                                    additionalButton.addEventListener('click', function() {
                                        inventory.push(additionalChoice); // Add the chosen item to the inventory
                                        document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    });
                                    document.body.appendChild(additionalButton);
                                });
                            });

                            document.body.appendChild(takeAnythingElseButton);
                        });
                        document.body.appendChild(groceryButton);
                    });
                }
                // what to take weapon store
                if (choice === 'weapon store') {
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var weaponChoices = ['knife', 'grenade', 'gun'];
                    weaponChoices.forEach(function(weaponChoice) {
                        var weaponButton = document.createElement('button');
                        weaponButton.innerHTML = weaponChoice;
                        weaponButton.addEventListener('click', function() {
                            inventory.push(weaponChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p>You chose to take: ' + weaponChoice + '</p>';
                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                            // Ask if the player wants to take anything else in the weapon store
                            var takeAnythingElseButton = document.createElement('button');
                            takeAnythingElseButton.innerHTML = 'Take anything else?';
                            takeAnythingElseButton.addEventListener('click', function() {
                                document.body.innerHTML = ''; // Clear the screen
                                document.body.innerHTML += '<h2>What else will you take?</h2>';

                                var additionalChoices = ['scope', 'munitions', 'cleaning kit', 'Poster'];
                                additionalChoices.forEach(function(additionalChoice) {
                                    var additionalButton = document.createElement('button');
                                    additionalButton.innerHTML = additionalChoice;
                                    additionalButton.addEventListener('click', function() {
                                        inventory.push(additionalChoice); // Add the chosen item to the inventory
                                        document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    });
                                    document.body.appendChild(additionalButton);
                                });
                            });

                            document.body.appendChild(takeAnythingElseButton);
                        });
                        document.body.appendChild(weaponButton);
                    });
                }
                // what to take drug store
                if (choice === 'drug store') {
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var drugChoices = ['painkillers', 'antibiotics', 'cough syrup', 'bandages'];
                    drugChoices.forEach(function(drugChoice) {
                        var drugButton = document.createElement('button');
                        drugButton.innerHTML = drugChoice;
                        drugButton.addEventListener('click', function() {
                            inventory.push(drugChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                        });
                        document.body.appendChild(drugButton);
                    });
                }
                // what happens if you choose the white house
                if (choice === 'the white house') {
                    document.body.innerHTML += '<p>You chose to go to the White House...</p>';
                    setTimeout(function() {
                        document.body.innerHTML += '<p>Unfortunately, you were caught by the guards and got killed.</p>';
                    }, 3000); // 3 seconds
                }
            });
            document.body.appendChild(button);
        });
    });

    document.getElementById('find').addEventListener('click', function() {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>You decide to call your family first...</h1>';
    });
}