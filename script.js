window.onload = function () {
    var inventory = []; // Declare and initialize the inventory array

    var startTime = Date.now(); // Get the current time
    var duration = 30 * 1000; // 30 seconds in milliseconds

    function darkenScreen() {
        var currentTime = Date.now(); // Get the current time
        var elapsedTime = currentTime - startTime; // Calculate the elapsed time

        var darkness = Math.min(1, elapsedTime / duration); // Calculate the darkness level (between 0 and 1)

        var red = 10 + Math.round((0 - 10) * darkness); // Calculate the red component
        var green = 13 + Math.round((0 - 13) * darkness); // Calculate the green component
        var blue = 10 + Math.round((0 - 10) * darkness); // Calculate the blue component

        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Set the background color with the darkness level

        if (elapsedTime < duration) {
            requestAnimationFrame(darkenScreen); // Continue darkening the screen
        }

        if (elapsedTime == duration) {
            document.body.innerHTML = '';
            document.body.innerHTML += '<h1>Game Over</h1>';
            document.body.innerHTML += '<p>You ran out of time!</p>';
            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
            // Exit the game button
            const exitButton = document.createElement('button');
            exitButton.textContent = 'Exit Game';
            exitButton.addEventListener('click', function () {
                document.location.reload();
            });
            document.body.appendChild(exitButton);
        }
    }

    darkenScreen(); // Start darkening the screen


    document.getElementById('run').addEventListener('click', function () {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>Where will you run?</h1>';
        var choices = ['grocery store', 'weapon store', 'drug store', 'the white house'];

        choices.forEach(function (choice) {
            var button = document.createElement('button');
            button.innerHTML = choice;
            // choice of where to go
            button.addEventListener('click', function () {
                document.body.innerHTML = ''; // Clear the screen
                document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                // choice of what to take
                if (choice === 'grocery store') {
                    document.body.innerHTML += '<img src="Img/Grocery-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back

                    // Append the box to the body
                    document.body.appendChild(box);

                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var groceryChoices = ['milk', 'eggs', 'Canned food', ' Raw meat', 'bread', 'fresh fruits'];
                    groceryChoices.forEach(function (groceryChoice) {
                        var groceryButton = document.createElement('button');
                        groceryButton.innerHTML = groceryChoice;
                        groceryButton.addEventListener('click', function () {
                            document.body.innerHTML = '';
                            inventory.push(groceryChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                            document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen

                            // Ask if the player wants to take anything else in the grocery store
                            var takeAnythingElseButton = document.createElement('button');
                            takeAnythingElseButton.innerHTML = 'Take anything else?';
                            takeAnythingElseButton.addEventListener('click', function () {
                                document.body.innerHTML = ''; // Clear the screen
                                document.body.innerHTML += '<h2>What else will you take?</h2>';

                                var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                additionalChoices.forEach(function (additionalChoice) {
                                    var additionalButton = document.createElement('button');
                                    additionalButton.innerHTML = additionalChoice;
                                    additionalButton.addEventListener('click', function () {
                                        document.body.innerHTML = '';
                                        inventory.push(additionalChoice); // Add the chosen item to the inventory
                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                        //Leave  grocery3
                                        var simpleButton = document.createElement('button');
                                        simpleButton.innerHTML = 'Leave store';

                                        simpleButton.addEventListener('click', function () {
                                            document.body.innerHTML = '';
                                            document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                            var choices = ['Gun store', 'drug store', 'the white house'];
                                            choices.forEach(function (choice) {
                                                var button = document.createElement('button');
                                                button.innerHTML = choice;
                                                // choice of where to go
                                                button.addEventListener('click', function () {
                                                    document.body.innerHTML = ''; // Clear the screen
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                                    // choice of what to take
                                                    if (choice === 'Gun store') {
                                                        document.body.innerHTML += '<img src="Img/Weapon-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                                        // Create a box element
                                                        var box = document.createElement('div');
                                                        box.style.width = '400px';
                                                        box.style.height = '550px';
                                                        box.style.backgroundColor = 'black';
                                                        box.style.position = 'absolute';
                                                        box.style.top = '50%';
                                                        box.style.left = '50%';
                                                        box.style.transform = 'translate(-50%, -50%)';
                                                        box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                                        box.style.borderRadius = '10px';
                                                        box.style.zIndex = '-1'; // Send the box to the back

                                                        // Append the box to the body
                                                        document.body.appendChild(box);
                                                        document.body.innerHTML += '<h2>What will you take?</h2>';
                                                        var groceryChoices = ['knife', 'grenade', 'gun'];
                                                        groceryChoices.forEach(function (groceryChoice) {
                                                            var groceryButton = document.createElement('button');
                                                            groceryButton.innerHTML = groceryChoice;
                                                            groceryButton.addEventListener('click', function () {
                                                                document.body.innerHTML = '';
                                                                inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                                // Ask if the player wants to take anything else in the grocery store
                                                                var takeAnythingElseButton = document.createElement('button');
                                                                takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                takeAnythingElseButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                    var additionalChoices = ['FN Scar', 'G36', 'HK416', 'AK47'];
                                                                    additionalChoices.forEach(function (additionalChoice) {
                                                                        var additionalButton = document.createElement('button');
                                                                        additionalButton.innerHTML = additionalChoice;
                                                                        additionalButton.addEventListener('click', function () {
                                                                            inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                            document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<h1>What will you do now?</h1>';
                                                                            var button1 = document.createElement('button');
                                                                            button1.innerHTML = 'Go to bunker';
                                                                            button1.addEventListener('click', function () {
                                                                                document.body.innerHTML = '';
                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to go to the bunker</p>';
                                                                                if (inventory.includes('bread') && ('water')) {
                                                                                    document.body.innerHTML += '<p>You survived 2 weeks with bread and water however you started to feel lonely and commited suicide.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('bread') && ('flashlight')) {
                                                                                    document.body.innerHTML += '<p>You died of thirst...</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('bread') && ('rope')) {
                                                                                    document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('bread') && (' Raw meat')) {
                                                                                    document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You starved to death!</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You starved to death eggs were not nutritious enough.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('Canned food') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('Canned food') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('Canned food') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You had enough fruit for 3 days but the rest startedd to rot and you starved to death.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                            });
                                                                            document.body.appendChild(button1);
                                                                            var button2 = document.createElement('button');
                                                                            button2.innerHTML = 'Go to white house';
                                                                            button2.addEventListener('click', function () {
                                                                                document.body.innerHTML = '';
                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to go to the white house</p>';
                                                                                document.body.innerHTML += '<p>As you get there a guard stops you...</p>';
                                                                                setTimeout(function () {
                                                                                    document.body.innerHTML += '<p><b>Guard:</b>This is a restricted area, what are you doing here?</p>';
                                                                                    var answerButton = document.createElement('button');
                                                                                    document.body.appendChild(answerButton);
                                                                                    answerButton.innerHTML = 'Say that you are a friend of the president';
                                                                                    answerButton.addEventListener('click', function () {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p><b>Guard:</b> This is a restricted area! what are you doing here?</p>';
                                                                                        document.body.innerHTML += '<p><b>You:</b>I am a friend of the president</p>';
                                                                                        setTimeout(function () {
                                                                                            document.body.innerHTML += '<p><b>Guard:</b>I don\'t have any instructions from the president. This is your last warning to leave the area!</p>';


                                                                                            var answerButton = document.createElement('button');
                                                                                            document.body.appendChild(answerButton);
                                                                                            answerButton.innerHTML = 'Leave';
                                                                                            answerButton.addEventListener('click', function () {
                                                                                                document.body.innerHTML = '';
                                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                                                setTimeout(function () {
                                                                                                    document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                                    document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                                    document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                                    document.body.innerHTML += '<h1>Try again</h1>';
                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                    var restartButton = document.createElement('button');
                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                    });
                                                                                                    document.body.appendChild(restartButton);
                                                                                                }, 2000);
                                                                                            });
                                                                                            var answerButton = document.createElement('button');
                                                                                            document.body.appendChild(answerButton);
                                                                                            answerButton.innerHTML = 'Fight with him';
                                                                                            answerButton.addEventListener('click', function () {
                                                                                                document.body.innerHTML = '';
                                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to fight with the guard</p>';
                                                                                                setTimeout(function () {
                                                                                                    document.body.innerHTML += '<p>You lost and got killed</p>';
                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                    var restartButton = document.createElement('button');
                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                    });
                                                                                                    document.body.appendChild(restartButton);
                                                                                                }, 2000);

                                                                                            });
                                                                                        }, 2000);
                                                                                    });
                                                                                    var answerButton = document.createElement('button');
                                                                                    document.body.appendChild(answerButton);
                                                                                    answerButton.innerHTML = 'Leave';
                                                                                    answerButton.addEventListener('click', function () {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                                        setTimeout(function () {
                                                                                            document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                            document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                            document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                            document.body.innerHTML += '<h1>Try again</h1>';
                                                                                            document.body.style.backgroundColor = 'red';
                                                                                            var restartButton = document.createElement('button');
                                                                                            restartButton.innerHTML = 'Exit';
                                                                                            restartButton.addEventListener('click', function () {
                                                                                                location.reload(); // Reload the page to restart the file
                                                                                            });
                                                                                            document.body.appendChild(restartButton);
                                                                                        }, 2000);
                                                                                    });
                                                                                }, 3000);

                                                                            });
                                                                            document.body.appendChild(button2);
                                                                        });
                                                                        document.body.appendChild(additionalButton);
                                                                    });

                                                                    document.body.appendChild(goBackButton);
                                                                });

                                                                document.body.appendChild(takeAnythingElseButton);

                                                            });

                                                            document.body.appendChild(groceryButton);

                                                        });

                                                    }
                                                    if (choice === 'drug store') {
                                                        document.body.innerHTML += '<img src="Img/Drug-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back
                    
                    // Append the box to the body
                    document.body.appendChild(box);
                                                        document.body.innerHTML += '<h2>What will you take?</h2>';
                                                        var drugChoices = ['painkillers', 'antibiotics', '2 Anti-radiation mask'];
                                                        drugChoices.forEach(function (drugChoice) {
                                                            var drugButton = document.createElement('button');
                                                            drugButton.innerHTML = drugChoice;
                                                            drugButton.addEventListener('click', function () {
                                                                inventory.push(drugChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML = '';
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                // Ask if the player wants to take anything else in the drug store
                                                                var takeAnythingElseButton = document.createElement('button');
                                                                takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                takeAnythingElseButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                    var additionalChoices = ['medkit', '2 anti-radiation suit', 'prescription drugs'];
                                                                    additionalChoices.forEach(function (additionalChoice) {
                                                                        var additionalButton = document.createElement('button');
                                                                        additionalButton.innerHTML = additionalChoice;
                                                                        additionalButton.addEventListener('click', function () {
                                                                            inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                            //correct inventory
                                                                            if (inventory.includes('2 anti-radiation suit') && inventory.includes('2 Anti-radiation mask') && inventory.includes('Canned food') && inventory.includes('water')) {
                                                                                setTimeout(function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>As you leave the store, you receive a phone call...</p>';
                                                                                    setTimeout(function () {
                                                                                        document.body.innerHTML += '<p><b>Joe:</b><j> Hey! I retrieved all of your family, they are safe in the white house bunker! Come if you need</j></p>';

                                                                                        var button1 = document.createElement('button');
                                                                                        button1.innerHTML = 'Great! I\'ll head to the white house!';
                                                                                        button1.addEventListener('click', function () {
                                                                                            document.body.innerHTML = '';
                                                                                            document.body.innerHTML += '<p><b>You</b> Great I\'ll head to the white house!</p>';
                                                                                            document.body.innerHTML += '<p><b>Joe:</b><j> See you! </j></p>';
                                                                                            setTimeout(function () {
                                                                                                var newButton = document.createElement('button');
                                                                                                newButton.innerHTML = 'Go to white house';
                                                                                                newButton.addEventListener('click', function () {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p>As you go to the white house you enter the bunker...</p>';
                                                                                                    document.body.innerHTML += '<p>You get to see your family there, you feel releived.</p>';
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>A few days passes and you start to feel guilty about not saving your friends and your grilfriend...</p>';
                                                                                                    }, 2000);
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>Your guilt has taken over your mental state, you commited suicide...</p>';
                                                                                                        document.body.innerHTML += '<p>Try again.</p>';
                                                                                                    }, 4000);
                                                                                                });
                                                                                                document.body.appendChild(newButton);

                                                                                            }, 2000);
                                                                                        });
                                                                                        document.body.appendChild(button1);

                                                                                        // Button 2
                                                                                        var button2 = document.createElement('button');
                                                                                        button2.innerHTML = 'Thanks but I stil have somethings to do, we\'ll stay in touch!';
                                                                                        button2.addEventListener('click', function () {

                                                                                            document.body.innerHTML = '';
                                                                                            document.body.innerHTML += '<p>Joe: Stay safe!</p>';
                                                                                            setTimeout(function () {
                                                                                                document.body.innerHTML = '';
                                                                                                document.body.innerHTML += '<p> As you hang-up you see a car with the keys in it, you decide to take the car.';
                                                                                                document.body.innerHTML += '<h2>Where will you go?</h2>';
                                                                                                var goSomewhereElseButton = document.createElement('button');
                                                                                                goSomewhereElseButton.innerHTML = 'Go to girlfriend\'s house';
                                                                                                goSomewhereElseButton.addEventListener('click', function () {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to your girlfriend\'s house.</p>';
                                                                                                    document.body.innerHTML += '<p>As you walk to your girlfriend, you see her scared to death....</p>';
                                                                                                    document.body.innerHTML += '<p></p>';
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>You take her in your arms...</p>';
                                                                                                        document.body.innerHTML += '<p><b>You:</b>Thank god you\'re safe.</p>';
                                                                                                        document.body.innerHTML += '<p><b>Girlfirend:</b>Thank you for coming to save me.</p>';

                                                                                                        setTimeout(function () {
                                                                                                            document.body.innerHTML += '<h2>Time is running out, radiation is getting closer and closer... What will you do?</h2>';
                                                                                                            var choiceButton1 = document.createElement('button');
                                                                                                            choiceButton1.innerHTML = 'Wear anti-radiation suit and mask';
                                                                                                            choiceButton1.addEventListener('click', function () {
                                                                                                                document.body.innerHTML = '';
                                                                                                                document.body.innerHTML += '<p>As you both wear your anti-radiation suits and mask you get in the car.</p>';
                                                                                                                document.body.innerHTML += '<p>As you drive towards your bunker...</p>';

                                                                                                                document.body.innerHTML += '<h2>You receive a phone call</h2>';

                                                                                                                var answerButton = document.createElement('button');
                                                                                                                answerButton.innerHTML = 'Answer';
                                                                                                                answerButton.addEventListener('click', function () {
                                                                                                                    document.body.innerHTML = '';
                                                                                                                    document.body.innerHTML += '<p>As you try to pick up the phone you deviate from the road and crashed into a wall.</p>';
                                                                                                                    document.body.innerHTML += '<p>You killed yourself girlfriend... </p>';
                                                                                                                    document.body.innerHTML += '<p>Try again.</p>';
                                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                                    var restartButton = document.createElement('button');
                                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                                    });

                                                                                                                });
                                                                                                                document.body.appendChild(answerButton);

                                                                                                                var answerButton = document.createElement('button');
                                                                                                                answerButton.innerHTML = 'Ignore';
                                                                                                                answerButton.addEventListener('click', function () {
                                                                                                                    document.body.innerHTML = '';
                                                                                                                    document.body.innerHTML += 'You arrived safely to the bunker as you enter the bunker you see that Joe tried to call you while driving.';
                                                                                                                    document.body.innerHTML += '<p>You decide to call him back...</p>';

                                                                                                                    document.body.innerHTML += '<p><b>You:</b>Yo I was driving what\'s up?</p>';
                                                                                                                    document.body.innerHTML += '<p><b>Joe:</b>Man i just gathered all of our friends in my bunker are you safe?</p>';

                                                                                                                    document.body.innerHTML += '<p><b>You:</b>Yeah I went to pick up my girlfriend and just arrived in my bunker.</p>';
                                                                                                                    document.body.innerHTML += '<p><b>Joe:</b>Send me your coordinates I will send a team to come and retreive you as soon it\'s over!</p>';
                                                                                                                    document.body.innerHTML += '<p><b>You:</b>Okay I\'ll send it to you! Bye!</p>';
                                                                                                                    document.body.innerHTML += '<p><b>Joe:</b>Bye!<p>';



                                                                                                                    document.body.innerHTML += '<h1>Congratualations you completed the game!</h1>';
                                                                                                                    //GAME SUCCESS

                                                                                                                });
                                                                                                                document.body.appendChild(answerButton);


                                                                                                            });
                                                                                                            document.body.appendChild(choiceButton1);
                                                                                                            var choiceButton2 = document.createElement('button');
                                                                                                            choiceButton2.innerHTML = 'Get in the car';
                                                                                                            choiceButton2.addEventListener('click', function () {
                                                                                                                document.body.innerHTML = '';
                                                                                                                document.body.innerHTML += '<p>The radiation caught up to you</p>';
                                                                                                                document.body.innerHTML += '<p>Unfortunately you didn\'t have enough time time to run away.</p>';
                                                                                                                document.body.innerHTML += '<p>Try again.</p>'
                                                                                                                document.body.style.backgroundColor = 'red';
                                                                                                                // Create Restart Button
                                                                                                                var restartButton = document.createElement('button');
                                                                                                                restartButton.innerHTML = 'Exit';
                                                                                                                restartButton.addEventListener('click', function () {
                                                                                                                    location.reload(); // Reload the page to restart the file
                                                                                                                });

                                                                                                                document.body.appendChild(restartButton);
                                                                                                            });
                                                                                                            document.body.appendChild(choiceButton2);
                                                                                                            //



                                                                                                        }, 5000);

                                                                                                    }, 2000);


                                                                                                });

                                                                                                var takeAnythingElseButton = document.createElement('button');
                                                                                                takeAnythingElseButton.innerHTML = 'Go to friend\'s house';
                                                                                                takeAnythingElseButton.addEventListener('click', function () {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to your friend\'s house.</p>';
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>You\'re friend is not here, you decide to call him...</p>';
                                                                                                        document.body.innerHTML += '<p>He doesn\'t answer </p>';
                                                                                                        var choiceButton1 = document.createElement('button');
                                                                                                        choiceButton1.innerHTML = 'Go to girlfriends house';
                                                                                                        choiceButton1.addEventListener('click', function () {
                                                                                                            document.body.innerHTML = '';
                                                                                                            document.body.innerHTML += '<p style="color: grey;">You chose to go to your girlfriend\'s house.</p>';
                                                                                                            setTimeout(function () {
                                                                                                                document.body.innerHTML += '<p>As you drive to her place</p>';
                                                                                                                document.body.innerHTML += '<p>You get caught up by the radiation</p>';
                                                                                                                document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                                                document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                                                document.body.innerHTML += '<h1>Try again</h1>';
                                                                                                                document.body.style.backgroundColor = 'red';
                                                                                                                var restartButton = document.createElement('button');
                                                                                                                restartButton.innerHTML = 'Exit';
                                                                                                                restartButton.addEventListener('click', function () {
                                                                                                                    location.reload(); // Reload the page to restart the file
                                                                                                                });
                                                                                                                document.body.appendChild(restartButton);

                                                                                                            }, 2000);
                                                                                                        });
                                                                                                        document.body.appendChild(choiceButton1);

                                                                                                        var choiceButton2 = document.createElement('button');
                                                                                                        choiceButton2.innerHTML = 'Get in the car';
                                                                                                        choiceButton2.addEventListener('click', function () {
                                                                                                            document.body.innerHTML = '';
                                                                                                            document.body.innerHTML += '<p>The radiation caught up to you.</p>';
                                                                                                            document.body.innerHTML += '<p>Unfortunately, you didn\'t have enough time to run away.</p>';
                                                                                                            document.body.innerHTML += '<p>Try again.</p>';
                                                                                                            document.body.style.backgroundColor = 'red';
                                                                                                            // Create Restart Button
                                                                                                            var restartButton = document.createElement('button');
                                                                                                            restartButton.innerHTML = 'Exit';
                                                                                                            restartButton.addEventListener('click', function () {
                                                                                                                location.reload(); // Reload the page to restart the file
                                                                                                            });
                                                                                                            document.body.appendChild(restartButton);
                                                                                                        });
                                                                                                        document.body.appendChild(choiceButton2);

                                                                                                    }, 2000);
                                                                                                });

                                                                                                document.body.appendChild(goSomewhereElseButton);
                                                                                                document.body.appendChild(takeAnythingElseButton);

                                                                                            }, 2000);

                                                                                        });
                                                                                        document.body.appendChild(button2);


                                                                                    }, 3000);
                                                                                }, 2000);
                                                                            }
                                                                            else {
                                                                                document.body.innerHTML = '';
                                                                                document.body.innerHTML += '<h1>What will you do now?</h1>';
                                                                                var button1 = document.createElement('button');
                                                                                button1.innerHTML = 'Go to bunker';
                                                                                button1.addEventListener('click', function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to go to the bunker</p>';
                                                                                    if (inventory.includes('bread') && ('water')) {
                                                                                        document.body.innerHTML += '<p>You survived 2 weeks with bread and water however you started to feel lonely and commited suicide.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('bread') && ('flashlight')) {
                                                                                        document.body.innerHTML += '<p>You died of thirst...</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('bread') && ('rope')) {
                                                                                        document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('bread') && (' Raw meat')) {
                                                                                        document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('milk') && ('water')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>You starved to death!</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('milk') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('milk') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('milk') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes(' Raw meat') && ('water')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes(' Raw meat') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes(' Raw meat') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes(' Raw meat') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('eggs') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('eggs') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('eggs') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('eggs') && ('water')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You starved to death eggs were not nutritious enough.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('Canned food') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('Canned food') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('Canned food') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('fresh fruits') && ('water')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You had enough fruit for 3 days but the rest startedd to rot and you starved to death.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('fresh fruits') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('fresh fruits') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('fresh fruits') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                });

                                                                                document.body.appendChild(button1);

                                                                                var button2 = document.createElement('button');
                                                                                button2.innerHTML = 'Phone';
                                                                                document.body.appendChild(button2);

                                                                            }

                                                                        });
                                                                        document.body.appendChild(additionalButton);

                                                                    });


                                                                    document.body.appendChild(goSomewhereElseButton);


                                                                });
                                                                document.body.appendChild(takeAnythingElseButton);
                                                            });
                                                            document.body.appendChild(drugButton);

                                                        });

                                                    }//
                                                    if (choice === 'the white house') {
                                                        document.body.innerHTML += '<p>As you walk to the white house...</p>';

                                                        var intervalId;
                                                        var isBlue = true;
                                                        var toggleCount = 0;

                                                        function toggleSiren() {
                                                            if (isBlue) {
                                                                document.body.style.backgroundColor = 'red';
                                                                isBlue = false;
                                                            } else {
                                                                document.body.style.backgroundColor = 'blue';
                                                                isBlue = true;
                                                            }

                                                            toggleCount++;
                                                            if (toggleCount === 4) {
                                                                clearInterval(intervalId);
                                                            }
                                                        }

                                                        intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second

                                                        intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds

                                                        setTimeout(function () {

                                                            document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                            document.body.style.backgroundColor = 'red';
                                                        }, 6000); //7 seconds

                                                        setTimeout(function () {
                                                            // Exit the game button
                                                            const exitButton = document.createElement('button');
                                                            exitButton.textContent = 'Exit Game';
                                                            exitButton.addEventListener('click', function () {
                                                                document.location.reload();
                                                            });
                                                            document.body.appendChild(exitButton);
                                                        }, 9000); //7 seconds

                                                    }
                                                });
                                                document.body.appendChild(button);
                                            });
                                        });

                                        document.body.appendChild(simpleButton);



                                    });

                                    document.body.appendChild(additionalButton);

                                });
                                // Leave button grocery1
                                var simpleButton = document.createElement('button');
                                simpleButton.innerHTML = 'Leave the store';

                                // Add an event listener to the button
                                simpleButton.addEventListener('click', function () {
                                    // Perform some action when the button is clicked
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<p style="color: grey;">You chose to leave the store.</p>';
                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                    var choices = ['Gun store', 'drug store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'Gun store') {
                                                document.body.innerHTML += '<img src="Img/Weapon-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                                // Create a box element
                                                var box = document.createElement('div');
                                                box.style.width = '400px';
                                                box.style.height = '550px';
                                                box.style.backgroundColor = 'black';
                                                box.style.position = 'absolute';
                                                box.style.top = '50%';
                                                box.style.left = '50%';
                                                box.style.transform = 'translate(-50%, -50%)';
                                                box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                                box.style.borderRadius = '10px';
                                                box.style.zIndex = '-1'; // Send the box to the back

                                                // Append the box to the body
                                                document.body.appendChild(box);
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['knife', 'grenade', 'gun'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                        // Ask if the player wants to take anything else in the grocery store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                                                    //needs to be completed

                                                                });
                                                                document.body.appendChild(additionalButton);
                                                            });

                                                            document.body.appendChild(goBackButton);
                                                        });

                                                        document.body.appendChild(takeAnythingElseButton);

                                                    });

                                                    document.body.appendChild(groceryButton);

                                                });

                                            }
                                            if (choice === 'drug store') {
                                                document.body.innerHTML += '<img src="Img/Drug-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back
                    
                    // Append the box to the body
                    document.body.appendChild(box);
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        // Ask if the player wants to take anything else in the drug store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                    //Needs to be completed
                                                                });
                                                                document.body.appendChild(additionalButton);

                                                            });


                                                            document.body.appendChild(goSomewhereElseButton);


                                                        });
                                                        document.body.appendChild(takeAnythingElseButton);
                                                    });
                                                    document.body.appendChild(drugButton);

                                                });

                                            }//
                                            if (choice === 'the white house') {
                                                document.body.innerHTML += '<p>As you walk to the white house...</p>';

                                                var intervalId;
                                                var isBlue = true;
                                                var toggleCount = 0;

                                                function toggleSiren() {
                                                    if (isBlue) {
                                                        document.body.style.backgroundColor = 'red';
                                                        isBlue = false;
                                                    } else {
                                                        document.body.style.backgroundColor = 'blue';
                                                        isBlue = true;
                                                    }

                                                    toggleCount++;
                                                    if (toggleCount === 4) {
                                                        clearInterval(intervalId);
                                                    }
                                                }

                                                intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second

                                                intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds

                                                setTimeout(function () {

                                                    document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                    document.body.style.backgroundColor = 'red';
                                                }, 6000); //7 seconds

                                                setTimeout(function () {
                                                    // Exit the game button
                                                    const exitButton = document.createElement('button');
                                                    exitButton.textContent = 'Exit Game';
                                                    exitButton.addEventListener('click', function () {
                                                        document.location.reload();
                                                    });
                                                    document.body.appendChild(exitButton);
                                                }, 9000); //7 seconds

                                            }
                                        });
                                        document.body.appendChild(button);
                                    });
                                });

                                // Append the button to the document body
                                document.body.appendChild(simpleButton);
                            });




                            document.body.appendChild(takeAnythingElseButton);

                            //Leave button grocery 2
                            var simpleButton = document.createElement('button');
                            simpleButton.innerHTML = 'Leave the store';

                            // Add an event listener to the button
                            simpleButton.addEventListener('click', function () {
                                // Perform some action when the button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<p style="color: grey;">You chose to leave the store.</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                var choices = ['Gun store', 'drug store', 'the white house'];
                                choices.forEach(function (choice) {
                                    var button = document.createElement('button');
                                    button.innerHTML = choice;
                                    // choice of where to go
                                    button.addEventListener('click', function () {
                                        document.body.innerHTML = ''; // Clear the screen
                                        document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                        // choice of what to take
                                        if (choice === 'Gun store') {
                                            document.body.innerHTML += '<img src="Img/Weapon-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                            // Create a box element
                                            var box = document.createElement('div');
                                            box.style.width = '400px';
                                            box.style.height = '550px';
                                            box.style.backgroundColor = 'black';
                                            box.style.position = 'absolute';
                                            box.style.top = '50%';
                                            box.style.left = '50%';
                                            box.style.transform = 'translate(-50%, -50%)';
                                            box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                            box.style.borderRadius = '10px';
                                            box.style.zIndex = '-1'; // Send the box to the back

                                            // Append the box to the body
                                            document.body.appendChild(box);
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var groceryChoices = ['knife', 'grenade', 'gun'];
                                            groceryChoices.forEach(function (groceryChoice) {
                                                var groceryButton = document.createElement('button');
                                                groceryButton.innerHTML = groceryChoice;
                                                groceryButton.addEventListener('click', function () {
                                                    inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                    // Ask if the player wants to take anything else in the grocery store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
                                                                document.body.innerHTML = '';
                                                                inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                                                // Button to go to the bunker
                                                                var bunkerButton = document.createElement('button');
                                                                bunkerButton.innerHTML = 'Go to the bunker';
                                                                bunkerButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to the bunker.</p>';
                                                                    document.body.innerHTML += '<p>You died of starvation.</p>';
                                                                    document.body.style.backgroundColor = 'red';
                                                                    var restartButton = document.createElement('button');
                                                                    restartButton.innerHTML = 'Exit';
                                                                    restartButton.addEventListener('click', function () {
                                                                        location.reload(); // Reload the page to restart the file
                                                                    });
                                                                    document.body.appendChild(restartButton);
                                                                });
                                                                document.body.appendChild(bunkerButton);

                                                                // Button to go to the white house
                                                                var whiteHouseButton = document.createElement('button');
                                                                whiteHouseButton.innerHTML = 'Go to the white house';
                                                                whiteHouseButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to the white house.</p>';
                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to go to the white house</p>';
                                                                    document.body.innerHTML += '<p>As you get there a guard stops you...</p>';
                                                                    setTimeout(function () {
                                                                        document.body.innerHTML += '<p><b>Guard:</b>This is a restricted area, what are you doing here?</p>';
                                                                        var answerButton = document.createElement('button');
                                                                        document.body.appendChild(answerButton);
                                                                        answerButton.innerHTML = 'Say that you are a friend of the president';
                                                                        answerButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p><b>Guard:</b> This is a restricted area! what are you doing here?</p>';
                                                                            document.body.innerHTML += '<p><b>You:</b>I am a friend of the president</p>';
                                                                            setTimeout(function () {
                                                                                document.body.innerHTML += '<p><b>Guard:</b>I don\'t have any instructions from the president. This is your last warning to leave the area!</p>';


                                                                                var answerButton = document.createElement('button');
                                                                                document.body.appendChild(answerButton);
                                                                                answerButton.innerHTML = 'Leave';
                                                                                answerButton.addEventListener('click', function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                                    setTimeout(function () {
                                                                                        document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                        document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                        document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                        document.body.innerHTML += '<h1>Try again</h1>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }, 2000);
                                                                                });
                                                                                var answerButton = document.createElement('button');
                                                                                document.body.appendChild(answerButton);
                                                                                answerButton.innerHTML = 'Fight with him';
                                                                                answerButton.addEventListener('click', function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to fight with the guard</p>';
                                                                                    setTimeout(function () {
                                                                                        document.body.innerHTML += '<p>You lost and got killed</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }, 2000);

                                                                                });
                                                                            }, 2000);
                                                                        });
                                                                        var answerButton = document.createElement('button');
                                                                        document.body.appendChild(answerButton);
                                                                        answerButton.innerHTML = 'Leave';
                                                                        answerButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '< style="color: grey;"p>You decided to leave the area</p>';
                                                                            setTimeout(function () {
                                                                                document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                document.body.innerHTML += '<h1>Try again</h1>';
                                                                                document.body.style.backgroundColor = 'red';
                                                                                var restartButton = document.createElement('button');
                                                                                restartButton.innerHTML = 'Exit';
                                                                                restartButton.addEventListener('click', function () {
                                                                                    location.reload(); // Reload the page to restart the file
                                                                                });
                                                                                document.body.appendChild(restartButton);
                                                                            }, 2000);
                                                                        });
                                                                    }, 3000);




                                                                });
                                                                document.body.appendChild(whiteHouseButton);




                                                            });
                                                            document.body.appendChild(additionalButton);
                                                        });

                                                        document.body.appendChild(goBackButton);
                                                    });

                                                    document.body.appendChild(takeAnythingElseButton);

                                                    var leaveStoreButton = document.createElement('button');
                                                    document.body.appendChild(leaveStoreButton);
                                                    leaveStoreButton.innerHTML = 'Leave Store';
                                                    leaveStoreButton.addEventListener('click', function () {
                                                        document.body.innerHTML = '';
                                                        document.body.innerHTML += '<p style="color: grey;">You decided to leave the store</p>';
                                                        document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                                        var bunkerButton = document.createElement('button');
                                                        bunkerButton.innerHTML = 'Bunker';
                                                        bunkerButton.addEventListener('click', function () {
                                                            document.body.innerHTML = '';
                                                            document.body.innerHTML += '<p style="color: grey;">You decided to go to the bunker</p>';
                                                            setTimeout(function () {
                                                                document.body.innerHTML += '<p>You are safe in the bunker</p>';
                                                                document.body.innerHTML += '<p>However you don\'t have any water so you died of thirst.</p>';
                                                                document.body.style.backgroundColor = 'red';
                                                                var restartButton = document.createElement('button');
                                                                restartButton.innerHTML = 'Exit';
                                                                restartButton.addEventListener('click', function () {
                                                                    location.reload(); // Reload the page to restart the file
                                                                });
                                                                document.body.appendChild(restartButton);
                                                            }, 2000);
                                                        });
                                                        document.body.appendChild(bunkerButton);


                                                        var button2 = document.createElement('button');
                                                        button2.innerHTML = 'Go to white house';
                                                        button2.addEventListener('click', function () {
                                                            document.body.innerHTML = '';
                                                            document.body.innerHTML += '<p style="color: grey;">You decided to go to the white house</p>';
                                                            document.body.innerHTML += '<p>As you get there a guard stops you...</p>';
                                                            setTimeout(function () {
                                                                document.body.innerHTML += '<p><b>Guard:</b>This is a restricted area, what are you doing here?</p>';
                                                                var answerButton = document.createElement('button');
                                                                document.body.appendChild(answerButton);
                                                                answerButton.innerHTML = 'Say that you are a friend of the president';
                                                                answerButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = '';
                                                                    document.body.innerHTML += '<p><b>Guard:</b> This is a restricted area! what are you doing here?</p>';
                                                                    document.body.innerHTML += '<p><b>You:</b>I am a friend of the president</p>';
                                                                    setTimeout(function () {
                                                                        document.body.innerHTML += '<p><b>Guard:</b>I don\'t have any instructions from the president. This is your last warning to leave the area!</p>';


                                                                        var answerButton = document.createElement('button');
                                                                        document.body.appendChild(answerButton);
                                                                        answerButton.innerHTML = 'Leave';
                                                                        answerButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                            setTimeout(function () {
                                                                                document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                document.body.innerHTML += '<h1>Try again</h1>';
                                                                                document.body.style.backgroundColor = 'red';
                                                                                var restartButton = document.createElement('button');
                                                                                restartButton.innerHTML = 'Exit';
                                                                                restartButton.addEventListener('click', function () {
                                                                                    location.reload(); // Reload the page to restart the file
                                                                                });
                                                                                document.body.appendChild(restartButton);
                                                                            }, 2000);
                                                                        });
                                                                        var answerButton = document.createElement('button');
                                                                        document.body.appendChild(answerButton);
                                                                        answerButton.innerHTML = 'Fight with him';
                                                                        answerButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p style="color: grey;">You decided to fight with the guard</p>';
                                                                            setTimeout(function () {
                                                                                document.body.innerHTML += '<p>You lost and got killed</p>';
                                                                                document.body.style.backgroundColor = 'red';
                                                                                var restartButton = document.createElement('button');
                                                                                restartButton.innerHTML = 'Exit';
                                                                                restartButton.addEventListener('click', function () {
                                                                                    location.reload(); // Reload the page to restart the file
                                                                                });
                                                                                document.body.appendChild(restartButton);
                                                                            }, 2000);

                                                                        });
                                                                    }, 2000);
                                                                });
                                                                var answerButton = document.createElement('button');
                                                                document.body.appendChild(answerButton);
                                                                answerButton.innerHTML = 'Leave';
                                                                answerButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = '';
                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                    setTimeout(function () {
                                                                        document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                        document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                        document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                        document.body.innerHTML += '<h1>Try again</h1>';
                                                                        document.body.style.backgroundColor = 'red';
                                                                        var restartButton = document.createElement('button');
                                                                        restartButton.innerHTML = 'Exit';
                                                                        restartButton.addEventListener('click', function () {
                                                                            location.reload(); // Reload the page to restart the file
                                                                        });
                                                                        document.body.appendChild(restartButton);
                                                                    }, 2000);
                                                                });
                                                            }, 3000);

                                                        });
                                                        document.body.appendChild(button2);
                                                    }, 2000);




                                                });

                                                document.body.appendChild(groceryButton);

                                            });

                                        }
                                        if (choice === 'drug store') {
                                            document.body.innerHTML += '<img src="Img/Drug-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back
                    
                    // Append the box to the body
                    document.body.appendChild(box);
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                            drugChoices.forEach(function (drugChoice) {
                                                var drugButton = document.createElement('button');
                                                drugButton.innerHTML = drugChoice;
                                                drugButton.addEventListener('click', function () {
                                                    inventory.push(drugChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    // Ask if the player wants to take anything else in the drug store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
                                                                document.body.innerHTML = '';
                                                                inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                                                // Button to go to the bunker
                                                                var bunkerButton = document.createElement('button');
                                                                bunkerButton.innerHTML = 'Go to the bunker';
                                                                bunkerButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to the bunker.</p>';
                                                                    document.body.innerHTML += '<p>You died of starvation.</p>';
                                                                    document.body.style.backgroundColor = 'red';
                                                                    var restartButton = document.createElement('button');
                                                                    restartButton.innerHTML = 'Exit';
                                                                    restartButton.addEventListener('click', function () {
                                                                        location.reload(); // Reload the page to restart the file
                                                                    });
                                                                    document.body.appendChild(restartButton);
                                                                });
                                                                document.body.appendChild(bunkerButton);

                                                                // Button to go to the white house
                                                                var whiteHouseButton = document.createElement('button');
                                                                whiteHouseButton.innerHTML = 'Go to the white house';
                                                                whiteHouseButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to the white house.</p>';
                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to go to the white house</p>';
                                                                    document.body.innerHTML += '<p>As you get there a guard stops you...</p>';
                                                                    setTimeout(function () {
                                                                        document.body.innerHTML += '<p><b>Guard:</b>This is a restricted area, what are you doing here?</p>';
                                                                        var answerButton = document.createElement('button');
                                                                        document.body.appendChild(answerButton);
                                                                        answerButton.innerHTML = 'Say that you are a friend of the president';
                                                                        answerButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p><b>Guard:</b> This is a restricted area! what are you doing here?</p>';
                                                                            document.body.innerHTML += '<p><b>You:</b>I am a friend of the president</p>';
                                                                            setTimeout(function () {
                                                                                document.body.innerHTML += '<p><b>Guard:</b>I don\'t have any instructions from the president. This is your last warning to leave the area!</p>';


                                                                                var answerButton = document.createElement('button');
                                                                                document.body.appendChild(answerButton);
                                                                                answerButton.innerHTML = 'Leave';
                                                                                answerButton.addEventListener('click', function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                                    setTimeout(function () {
                                                                                        document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                        document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                        document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                        document.body.innerHTML += '<h1>Try again</h1>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }, 2000);
                                                                                });
                                                                                var answerButton = document.createElement('button');
                                                                                document.body.appendChild(answerButton);
                                                                                answerButton.innerHTML = 'Fight with him';
                                                                                answerButton.addEventListener('click', function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to fight with the guard</p>';
                                                                                    setTimeout(function () {
                                                                                        document.body.innerHTML += '<p>You lost and got killed</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }, 2000);

                                                                                });
                                                                            }, 2000);
                                                                        });
                                                                        var answerButton = document.createElement('button');
                                                                        document.body.appendChild(answerButton);
                                                                        answerButton.innerHTML = 'Leave';
                                                                        answerButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                            setTimeout(function () {
                                                                                document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                document.body.innerHTML += '<h1>Try again</h1>';
                                                                                document.body.style.backgroundColor = 'red';
                                                                                var restartButton = document.createElement('button');
                                                                                restartButton.innerHTML = 'Exit';
                                                                                restartButton.addEventListener('click', function () {
                                                                                    location.reload(); // Reload the page to restart the file
                                                                                });
                                                                                document.body.appendChild(restartButton);
                                                                            }, 2000);
                                                                        });
                                                                    }, 3000);




                                                                });
                                                                document.body.appendChild(whiteHouseButton);
                                                            });
                                                            document.body.appendChild(additionalButton);

                                                        });


                                                        document.body.appendChild(goSomewhereElseButton);


                                                    });

                                                    document.body.appendChild(takeAnythingElseButton);
                                                    var leaveStoreButton = document.createElement('button');
                                                    document.body.appendChild(leaveStoreButton);
                                                    leaveStoreButton.innerHTML = 'Leave Store';
                                                    leaveStoreButton.addEventListener('click', function () {
                                                        document.body.innerHTML = '';
                                                        document.body.innerHTML += '<p style="color: grey;">You decided to leave the store</p>';
                                                        document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                                        var bunkerButton = document.createElement('button');
                                                        bunkerButton.innerHTML = 'Bunker';
                                                        bunkerButton.addEventListener('click', function () {
                                                            document.body.innerHTML = '';
                                                            document.body.innerHTML += '<p style="color: grey;">You decided to go to the bunker</p>';
                                                            setTimeout(function () {
                                                                document.body.innerHTML += '<p>You are safe in the bunker</p>';
                                                                document.body.innerHTML += '<p>However you don\'t have any water so you died of thirst.</p>';
                                                                document.body.style.backgroundColor = 'red';
                                                                var restartButton = document.createElement('button');
                                                                restartButton.innerHTML = 'Exit';
                                                                restartButton.addEventListener('click', function () {
                                                                    location.reload(); // Reload the page to restart the file
                                                                });
                                                                document.body.appendChild(restartButton);
                                                            }, 2000);
                                                        });
                                                        document.body.appendChild(bunkerButton);


                                                        var button2 = document.createElement('button');
                                                        button2.innerHTML = 'Go to white house';
                                                        button2.addEventListener('click', function () {
                                                            document.body.innerHTML = '';
                                                            document.body.innerHTML += '< style="color: grey;">You decided to go to the white house</p>';
                                                            document.body.innerHTML += '<p>As you get there a guard stops you...</p>';
                                                            setTimeout(function () {
                                                                document.body.innerHTML += '<p><b>Guard:</b>This is a restricted area, what are you doing here?</p>';
                                                                var answerButton = document.createElement('button');
                                                                document.body.appendChild(answerButton);
                                                                answerButton.innerHTML = 'Say that you are a friend of the president';
                                                                answerButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = '';
                                                                    document.body.innerHTML += '<p><b>Guard:</b> This is a restricted area! what are you doing here?</p>';
                                                                    document.body.innerHTML += '<p><b>You:</b>I am a friend of the president</p>';
                                                                    setTimeout(function () {
                                                                        document.body.innerHTML += '<p><b>Guard:</b>I don\'t have any instructions from the president. This is your last warning to leave the area!</p>';


                                                                        var answerButton = document.createElement('button');
                                                                        document.body.appendChild(answerButton);
                                                                        answerButton.innerHTML = 'Leave';
                                                                        answerButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                            setTimeout(function () {
                                                                                document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                document.body.innerHTML += '<h1>Try again</h1>';
                                                                                document.body.style.backgroundColor = 'red';
                                                                                var restartButton = document.createElement('button');
                                                                                restartButton.innerHTML = 'Exit';
                                                                                restartButton.addEventListener('click', function () {
                                                                                    location.reload(); // Reload the page to restart the file
                                                                                });
                                                                                document.body.appendChild(restartButton);
                                                                            }, 2000);
                                                                        });
                                                                        var answerButton = document.createElement('button');
                                                                        document.body.appendChild(answerButton);
                                                                        answerButton.innerHTML = 'Fight with him';
                                                                        answerButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p>You decided to fight with the guard</p>';
                                                                            setTimeout(function () {
                                                                                document.body.innerHTML += '<p>You lost and got killed</p>';
                                                                                document.body.style.backgroundColor = 'red';
                                                                                var restartButton = document.createElement('button');
                                                                                restartButton.innerHTML = 'Exit';
                                                                                restartButton.addEventListener('click', function () {
                                                                                    location.reload(); // Reload the page to restart the file
                                                                                });
                                                                                document.body.appendChild(restartButton);
                                                                            }, 2000);

                                                                        });
                                                                    }, 2000);
                                                                });
                                                                var answerButton = document.createElement('button');
                                                                document.body.appendChild(answerButton);
                                                                answerButton.innerHTML = 'Leave';
                                                                answerButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = '';
                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                    setTimeout(function () {
                                                                        document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                        document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                        document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                        document.body.innerHTML += '<h1>Try again</h1>';
                                                                        document.body.style.backgroundColor = 'red';
                                                                        var restartButton = document.createElement('button');
                                                                        restartButton.innerHTML = 'Exit';
                                                                        restartButton.addEventListener('click', function () {
                                                                            location.reload(); // Reload the page to restart the file
                                                                        });
                                                                        document.body.appendChild(restartButton);
                                                                    }, 2000);
                                                                });
                                                            }, 3000);

                                                        });
                                                        document.body.appendChild(button2);
                                                    }, 2000); v
                                                });
                                                document.body.appendChild(drugButton);

                                            });

                                        }//
                                        if (choice === 'the white house') {
                                            document.body.innerHTML += '<p>As you walk to the white house...</p>';

                                            var intervalId;
                                            var isBlue = true;
                                            var toggleCount = 0;

                                            function toggleSiren() {
                                                if (isBlue) {
                                                    document.body.style.backgroundColor = 'red';
                                                    isBlue = false;
                                                } else {
                                                    document.body.style.backgroundColor = 'blue';
                                                    isBlue = true;
                                                }

                                                toggleCount++;
                                                if (toggleCount === 4) {
                                                    clearInterval(intervalId);
                                                }
                                            }

                                            intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second

                                            intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds

                                            setTimeout(function () {

                                                document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                document.body.style.backgroundColor = 'red';
                                            }, 6000); //7 seconds

                                            setTimeout(function () {
                                                // Exit the game button
                                                const exitButton = document.createElement('button');
                                                exitButton.textContent = 'Exit Game';
                                                exitButton.addEventListener('click', function () {
                                                    document.location.reload();
                                                });
                                                document.body.appendChild(exitButton);
                                            }, 9000); //7 seconds

                                        }
                                    });
                                    document.body.appendChild(button);
                                });

                            });

                            // Append the button to the document body
                            document.body.appendChild(simpleButton);

                        });


                        document.body.appendChild(groceryButton);

                    });

                }

                // what to take weapon store--
                if (choice === 'weapon store') {
                    document.body.innerHTML += '<img src="Img/Weapon-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back

                    // Append the box to the body
                    document.body.appendChild(box);
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var weaponChoices = ['knife', 'grenade', 'gun'];
                    weaponChoices.forEach(function (weaponChoice) {
                        var weaponButton = document.createElement('button');
                        weaponButton.innerHTML = weaponChoice;
                        weaponButton.addEventListener('click', function () {
                            inventory.push(weaponChoice); // Add the chosen item to the inventory
                            document.body.innerHTML = ''; // Clear the screen
                            document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + weaponChoice + '</p>';
                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                            // Ask if the player wants to take anything else in the weapon store
                            var takeAnythingElseButton = document.createElement('button');
                            takeAnythingElseButton.innerHTML = 'Take anything else?';
                            takeAnythingElseButton.addEventListener('click', function () {
                                document.body.innerHTML = ''; // Clear the screen
                                document.body.innerHTML += '<h2>What else will you take?</h2>';

                                var additionalChoices = ['scope', 'munitions', 'cleaning kit', 'Poster'];
                                additionalChoices.forEach(function (additionalChoice) {
                                    var additionalButton = document.createElement('button');
                                    additionalButton.innerHTML = additionalChoice;
                                    additionalButton.addEventListener('click', function () {
                                        inventory.push(additionalChoice); // Add the chosen item to the inventory
                                        document.body.innerHTML = '';
                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                        var simpleButton = document.createElement('button');
                                        simpleButton.innerHTML = 'Leave store';

                                        simpleButton.addEventListener('click', function () {
                                            document.body.innerHTML = '';
                                            document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                            var choices = ['grocery store', 'drug store', 'the white house'];
                                            choices.forEach(function (choice) {
                                                var button = document.createElement('button');
                                                button.innerHTML = choice;
                                                // choice of where to go
                                                button.addEventListener('click', function () {
                                                    document.body.innerHTML = ''; // Clear the screen
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                                    // choice of what to take
                                                    if (choice === 'grocery store') {
                                                        document.body.innerHTML += '<img src="Img/Grocery-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                                        // Create a box element
                                                        var box = document.createElement('div');
                                                        box.style.width = '400px';
                                                        box.style.height = '550px';
                                                        box.style.backgroundColor = 'black';
                                                        box.style.position = 'absolute';
                                                        box.style.top = '50%';
                                                        box.style.left = '50%';
                                                        box.style.transform = 'translate(-50%, -50%)';
                                                        box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                                        box.style.borderRadius = '10px';
                                                        box.style.zIndex = '-1'; // Send the box to the back

                                                        // Append the box to the body
                                                        document.body.appendChild(box);
                                                        document.body.innerHTML += '<h2>What will you take?</h2>';
                                                        var groceryChoices = [' Raw meat', 'bread', 'milk', 'eggs'];
                                                        groceryChoices.forEach(function (groceryChoice) {
                                                            var groceryButton = document.createElement('button');
                                                            groceryButton.innerHTML = groceryChoice;
                                                            groceryButton.addEventListener('click', function () {
                                                                document.body.innerHTML = '';
                                                                inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                                // Ask if the player wants to take anything else in the grocery store
                                                                var takeAnythingElseButton = document.createElement('button');
                                                                takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                takeAnythingElseButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                    var additionalChoices = ['rope', ' Raw meat', 'cheese', 'flashlight'];
                                                                    additionalChoices.forEach(function (additionalChoice) {
                                                                        var additionalButton = document.createElement('button');
                                                                        additionalButton.innerHTML = additionalChoice;
                                                                        additionalButton.addEventListener('click', function () {
                                                                            inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                            document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<h1>What will you do now?</h1>';
                                                                            var button1 = document.createElement('button');
                                                                            button1.innerHTML = 'Go to bunker';
                                                                            button1.addEventListener('click', function () {
                                                                                document.body.innerHTML = '';
                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to go to the bunker</p>';
                                                                                if (inventory.includes('bread') && ('water')) {
                                                                                    document.body.innerHTML += '<p>You survived 2 weeks with bread and water however you started to feel lonely and commited suicide.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('bread') && ('flashlight')) {
                                                                                    document.body.innerHTML += '<p>You died of thirst...</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('bread') && ('rope')) {
                                                                                    document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('bread') && (' Raw meat')) {
                                                                                    document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You starved to death!</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You starved to death eggs were not nutritious enough.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('Canned food') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('Canned food') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('Canned food') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You had enough fruit for 3 days but the rest startedd to rot and you starved to death.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                            });
                                                                            document.body.appendChild(button1);
                                                                            var button2 = document.createElement('button');
                                                                            button2.innerHTML = 'Go to white house';
                                                                            button2.addEventListener('click', function () {
                                                                                document.body.innerHTML = '';
                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to go to the white house</p>';
                                                                                document.body.innerHTML += '<p>As you get there a guard stops you...</p>';
                                                                                setTimeout(function () {
                                                                                    document.body.innerHTML += '<p><b>Guard:</b>This is a restricted area, what are you doing here?</p>';
                                                                                    var answerButton = document.createElement('button');
                                                                                    document.body.appendChild(answerButton);
                                                                                    answerButton.innerHTML = 'Say that you are a friend of the president';
                                                                                    answerButton.addEventListener('click', function () {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p><b>Guard:</b> This is a restricted area! what are you doing here?</p>';
                                                                                        document.body.innerHTML += '<p><b>You:</b>I am a friend of the president</p>';
                                                                                        setTimeout(function () {
                                                                                            document.body.innerHTML += '<p><b>Guard:</b>I don\'t have any instructions from the president. This is your last warning to leave the area!</p>';


                                                                                            var answerButton = document.createElement('button');
                                                                                            document.body.appendChild(answerButton);
                                                                                            answerButton.innerHTML = 'Leave';
                                                                                            answerButton.addEventListener('click', function () {
                                                                                                document.body.innerHTML = '';
                                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                                                setTimeout(function () {
                                                                                                    document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                                    document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                                    document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                                    document.body.innerHTML += '<h1>Try again</h1>';
                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                    var restartButton = document.createElement('button');
                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                    });
                                                                                                    document.body.appendChild(restartButton);
                                                                                                }, 2000);
                                                                                            });
                                                                                            var answerButton = document.createElement('button');
                                                                                            document.body.appendChild(answerButton);
                                                                                            answerButton.innerHTML = 'Fight with him';
                                                                                            answerButton.addEventListener('click', function () {
                                                                                                document.body.innerHTML = '';
                                                                                                document.body.innerHTML += '<p>You decided to fight with the guard</p>';
                                                                                                setTimeout(function () {
                                                                                                    document.body.innerHTML += '<p>You lost and got killed</p>';
                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                    var restartButton = document.createElement('button');
                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                    });
                                                                                                    document.body.appendChild(restartButton);
                                                                                                }, 2000);

                                                                                            });
                                                                                        }, 2000);
                                                                                    });
                                                                                    var answerButton = document.createElement('button');
                                                                                    document.body.appendChild(answerButton);
                                                                                    answerButton.innerHTML = 'Leave';
                                                                                    answerButton.addEventListener('click', function () {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                                        setTimeout(function () {
                                                                                            document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                            document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                            document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                            document.body.innerHTML += '<h1>Try again</h1>';
                                                                                            document.body.style.backgroundColor = 'red';
                                                                                            var restartButton = document.createElement('button');
                                                                                            restartButton.innerHTML = 'Exit';
                                                                                            restartButton.addEventListener('click', function () {
                                                                                                location.reload(); // Reload the page to restart the file
                                                                                            });
                                                                                            document.body.appendChild(restartButton);
                                                                                        }, 2000);
                                                                                    });
                                                                                }, 3000);

                                                                            });
                                                                            document.body.appendChild(button2);
                                                                        });
                                                                        document.body.appendChild(additionalButton);
                                                                    });

                                                                    document.body.appendChild(goBackButton);
                                                                });

                                                                document.body.appendChild(takeAnythingElseButton);

                                                            });

                                                            document.body.appendChild(groceryButton);

                                                        });

                                                    }
                                                    if (choice === 'drug store') {
                                                        document.body.innerHTML += '<img src="Img/Drug-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back
                    
                    // Append the box to the body
                    document.body.appendChild(box);
                                                        document.body.innerHTML += '<h2>What will you take?</h2>';
                                                        var drugChoices = ['painkillers', 'antibiotics', '2 Anti-radiation mask'];
                                                        drugChoices.forEach(function (drugChoice) {
                                                            var drugButton = document.createElement('button');
                                                            drugButton.innerHTML = drugChoice;
                                                            drugButton.addEventListener('click', function () {
                                                                inventory.push(drugChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML = '';
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                // Ask if the player wants to take anything else in the drug store
                                                                var takeAnythingElseButton = document.createElement('button');
                                                                takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                takeAnythingElseButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                    var additionalChoices = ['medkit', '2 anti-radiation suit', 'prescription drugs'];
                                                                    additionalChoices.forEach(function (additionalChoice) {
                                                                        var additionalButton = document.createElement('button');
                                                                        additionalButton.innerHTML = additionalChoice;
                                                                        additionalButton.addEventListener('click', function () {
                                                                            inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                            //correct inventory
                                                                            if (inventory.includes('2 anti-radiation suit') && inventory.includes('2 Anti-radiation mask')) {
                                                                                setTimeout(function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>As you leave the store, you receive a phone call...</p>';
                                                                                    setTimeout(function () {
                                                                                        document.body.innerHTML += '<p><b>Joe:</b><j> Hey! I retrieved all of your family, they are safe in the white house bunker! Come if you need</j></p>';

                                                                                        var button1 = document.createElement('button');
                                                                                        button1.innerHTML = 'Great! I\'ll head to the white house!';
                                                                                        button1.addEventListener('click', function () {
                                                                                            document.body.innerHTML = '';
                                                                                            document.body.innerHTML += '<p><b>You</b> Great I\'ll head to the white house!</p>';
                                                                                            document.body.innerHTML += '<p><b>Joe:</b><j> See you! </j></p>';
                                                                                            setTimeout(function () {
                                                                                                var newButton = document.createElement('button');
                                                                                                newButton.innerHTML = 'Go to white house';
                                                                                                newButton.addEventListener('click', function () {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p>As you go to the white house you enter the bunker...</p>';
                                                                                                    document.body.innerHTML += '<p>You get to see your family there, you feel releived.</p>';
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>A few days passes and you start to feel guilty about not saving your friends and your grilfriend...</p>';
                                                                                                    }, 2000);
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>Your guilt has taken over your mental state, you commited suicide...</p>';
                                                                                                        document.body.innerHTML += '<p>Try again.</p>';
                                                                                                    }, 4000);
                                                                                                });
                                                                                                document.body.appendChild(newButton);

                                                                                            }, 2000);
                                                                                        });
                                                                                        document.body.appendChild(button1);

                                                                                        // Button 2
                                                                                        var button2 = document.createElement('button');
                                                                                        button2.innerHTML = 'Thanks but I stil have somethings to do, we\'ll stay in touch!';
                                                                                        button2.addEventListener('click', function () {

                                                                                            document.body.innerHTML = '';
                                                                                            document.body.innerHTML += '<p>Joe: Stay safe!</p>';
                                                                                            setTimeout(function () {
                                                                                                document.body.innerHTML = '';
                                                                                                document.body.innerHTML += '<p> As you hang-up you see a car with the keys in it, you decide to take the car.';
                                                                                                document.body.innerHTML += '<h2>Where will you go?</h2>';
                                                                                                var goSomewhereElseButton = document.createElement('button');
                                                                                                goSomewhereElseButton.innerHTML = 'Go to girlfriend\'s house';
                                                                                                goSomewhereElseButton.addEventListener('click', function () {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to your girlfriend\'s house.</p>';
                                                                                                    document.body.innerHTML += '<p>As you walk to your girlfriend, you see her scared to death....</p>';
                                                                                                    document.body.innerHTML += '<p></p>';
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>You take her in your arms...</p>';
                                                                                                        document.body.innerHTML += '<p><b>You:</b>Thank god you\'re safe.</p>';
                                                                                                        document.body.innerHTML += '<p><b>Girlfirend:</b>Thank you for coming to save me.</p>';

                                                                                                        setTimeout(function () {
                                                                                                            document.body.innerHTML += '<h2>Time is running out, radiation is getting closer and closer... What will you do?</h2>';
                                                                                                            var choiceButton1 = document.createElement('button');
                                                                                                            choiceButton1.innerHTML = 'Wear anti-radiation suit and mask';
                                                                                                            choiceButton1.addEventListener('click', function () {
                                                                                                                document.body.innerHTML = '';
                                                                                                                document.body.innerHTML += '<p>As you both wear your anti-radiation suits and mask you get in the car.</p>';
                                                                                                                document.body.innerHTML += '<p>As you drive towards your bunker...</p>';

                                                                                                                document.body.innerHTML += '<h2>You receive a phone call</h2>';

                                                                                                                var answerButton = document.createElement('button');
                                                                                                                answerButton.innerHTML = 'Answer';
                                                                                                                answerButton.addEventListener('click', function () {
                                                                                                                    document.body.innerHTML = '';
                                                                                                                    document.body.innerHTML += '<p>As you try to pick up the phone you deviate from the road and crashed into a wall.</p>';
                                                                                                                    document.body.innerHTML += '<p>You killed yourself girlfriend... </p>';
                                                                                                                    document.body.innerHTML += '<p>Try again.</p>';
                                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                                    var restartButton = document.createElement('button');
                                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                                    });

                                                                                                                });
                                                                                                                document.body.appendChild(answerButton);

                                                                                                                var answerButton = document.createElement('button');
                                                                                                                answerButton.innerHTML = 'Ignore';
                                                                                                                answerButton.addEventListener('click', function () {
                                                                                                                    document.body.innerHTML = '';
                                                                                                                    document.body.innerHTML += '<p>You arrived safely to the bunker.</p>';
                                                                                                                    document.body.innerHTML += '<p>You managed to survive the night but you died of hunger and thirst...</p>'
                                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                                    // Create Restart Button
                                                                                                                    var restartButton = document.createElement('button');
                                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                                    });

                                                                                                                    document.body.appendChild(restartButton);
                                                                                                                });
                                                                                                                document.body.appendChild(answerButton);


                                                                                                            });
                                                                                                            document.body.appendChild(choiceButton1);
                                                                                                            var choiceButton2 = document.createElement('button');
                                                                                                            choiceButton2.innerHTML = 'Get in the car';
                                                                                                            choiceButton2.addEventListener('click', function () {
                                                                                                                document.body.innerHTML = '';
                                                                                                                document.body.innerHTML += '<p>The radiation caught up to you</p>';
                                                                                                                document.body.innerHTML += '<p>Unfortunately you didn\'t have enough time time to run away.</p>';
                                                                                                                document.body.innerHTML += '<p>Try again.</p>'
                                                                                                                document.body.style.backgroundColor = 'red';
                                                                                                                // Create Restart Button
                                                                                                                var restartButton = document.createElement('button');
                                                                                                                restartButton.innerHTML = 'Exit';
                                                                                                                restartButton.addEventListener('click', function () {
                                                                                                                    location.reload(); // Reload the page to restart the file
                                                                                                                });

                                                                                                                document.body.appendChild(restartButton);
                                                                                                            });
                                                                                                            document.body.appendChild(choiceButton2);
                                                                                                            //



                                                                                                        }, 5000);

                                                                                                    }, 2000);


                                                                                                });

                                                                                                var takeAnythingElseButton = document.createElement('button');
                                                                                                takeAnythingElseButton.innerHTML = 'Go to friend\'s house';
                                                                                                takeAnythingElseButton.addEventListener('click', function () {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to your friend\'s house.</p>';
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>You\'re friend is not here, you decide to call him...</p>';
                                                                                                        document.body.innerHTML += '<p>He doesn\'t answer </p>';
                                                                                                        var choiceButton1 = document.createElement('button');
                                                                                                        choiceButton1.innerHTML = 'Go to girlfriends house';
                                                                                                        choiceButton1.addEventListener('click', function () {
                                                                                                            document.body.innerHTML = '';
                                                                                                            document.body.innerHTML += '<p style="color: grey;">You chose to go to your girlfriend\'s house.</p>';
                                                                                                            setTimeout(function () {
                                                                                                                document.body.innerHTML += '<p>As you drive to her place</p>';
                                                                                                                document.body.innerHTML += '<p>You get caught up by the radiation</p>';
                                                                                                                document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                                                document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                                                document.body.innerHTML += '<h1>Try again</h1>';
                                                                                                                document.body.style.backgroundColor = 'red';
                                                                                                                var restartButton = document.createElement('button');
                                                                                                                restartButton.innerHTML = 'Exit';
                                                                                                                restartButton.addEventListener('click', function () {
                                                                                                                    location.reload(); // Reload the page to restart the file
                                                                                                                });
                                                                                                                document.body.appendChild(restartButton);

                                                                                                            }, 2000);
                                                                                                        });
                                                                                                        document.body.appendChild(choiceButton1);

                                                                                                        var choiceButton2 = document.createElement('button');
                                                                                                        choiceButton2.innerHTML = 'Get in the car';
                                                                                                        choiceButton2.addEventListener('click', function () {
                                                                                                            document.body.innerHTML = '';
                                                                                                            document.body.innerHTML += '<p>The radiation caught up to you.</p>';
                                                                                                            document.body.innerHTML += '<p>Unfortunately, you didn\'t have enough time to run away.</p>';
                                                                                                            document.body.innerHTML += '<p>Try again.</p>';
                                                                                                            document.body.style.backgroundColor = 'red';
                                                                                                            // Create Restart Button
                                                                                                            var restartButton = document.createElement('button');
                                                                                                            restartButton.innerHTML = 'Exit';
                                                                                                            restartButton.addEventListener('click', function () {
                                                                                                                location.reload(); // Reload the page to restart the file
                                                                                                            });
                                                                                                            document.body.appendChild(restartButton);
                                                                                                        });
                                                                                                        document.body.appendChild(choiceButton2);

                                                                                                    }, 2000);
                                                                                                });

                                                                                                document.body.appendChild(goSomewhereElseButton);
                                                                                                document.body.appendChild(takeAnythingElseButton);

                                                                                            }, 2000);

                                                                                        });
                                                                                        document.body.appendChild(button2);


                                                                                    }, 3000);


                                                                                }, 2000);

                                                                            }
                                                                            else {
                                                                                document.body.innerHTML = '';
                                                                                document.body.innerHTML += '<h1>What will you do now?</h1>';
                                                                                var button1 = document.createElement('button');
                                                                                button1.innerHTML = 'Go to bunker';
                                                                                button1.addEventListener('click', function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to go to the bunker</p>';
                                                                                    if (inventory.includes('bread') && ('water')) {
                                                                                        document.body.innerHTML += '<p>You survived 2 weeks with bread and water however you started to feel lonely and commited suicide.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('bread') && ('flashlight')) {
                                                                                        document.body.innerHTML += '<p>You died of thirst...</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('bread') && ('rope')) {
                                                                                        document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('bread') && (' Raw meat')) {
                                                                                        document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('milk') && ('water')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>You starved to death!</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('milk') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('milk') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('milk') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes(' Raw meat') && ('water')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes(' Raw meat') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes(' Raw meat') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes(' Raw meat') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('eggs') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('eggs') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('eggs') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('eggs') && ('water')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You starved to death eggs were not nutritious enough.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('Canned food') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('Canned food') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('Canned food') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('fresh fruits') && ('water')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You had enough fruit for 3 days but the rest startedd to rot and you starved to death.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('fresh fruits') && ('flashlight')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('fresh fruits') && ('rope')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('fresh fruits') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('cheese') && (' Raw meat')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('cheese') && (' bread')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                    else if (inventory.includes('cheese') && (' milk')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of lactose overdose!!</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }

                                                                                    else if (inventory.includes('cheese') && ('eggs')) {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                        document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                        document.body.innerHTML += '<p></p>';
                                                                                        document.body.innerHTML += '<p>You died of loneliness.</p>';
                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);

                                                                                    }
                                                                                    else {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                        document.body.innerHTML += '<p>You died the next day because you didn\'t have anything to eat or drink.</p>';

                                                                                        document.body.style.backgroundColor = 'red';
                                                                                        var restartButton = document.createElement('button');
                                                                                        restartButton.innerHTML = 'Exit';
                                                                                        restartButton.addEventListener('click', function () {
                                                                                            location.reload(); // Reload the page to restart the file
                                                                                        });
                                                                                        document.body.appendChild(restartButton);
                                                                                    }
                                                                                });

                                                                                document.body.appendChild(button1);

                                                                                var button2 = document.createElement('button');
                                                                                button2.innerHTML = 'Phone';
                                                                                document.body.appendChild(button2);

                                                                            }

                                                                        });
                                                                        document.body.appendChild(additionalButton);

                                                                    });


                                                                    document.body.appendChild(goSomewhereElseButton);


                                                                });
                                                                document.body.appendChild(takeAnythingElseButton);
                                                            });
                                                            document.body.appendChild(drugButton);

                                                        });

                                                    }//
                                                    if (choice === 'the white house') {
                                                        document.body.innerHTML += '<p>As you walk to the white house...</p>';

                                                        var intervalId;
                                                        var isBlue = true;
                                                        var toggleCount = 0;

                                                        function toggleSiren() {
                                                            if (isBlue) {
                                                                document.body.style.backgroundColor = 'red';
                                                                isBlue = false;
                                                            } else {
                                                                document.body.style.backgroundColor = 'blue';
                                                                isBlue = true;
                                                            }

                                                            toggleCount++;
                                                            if (toggleCount === 4) {
                                                                clearInterval(intervalId);
                                                            }
                                                        }

                                                        intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second

                                                        intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds

                                                        setTimeout(function () {

                                                            document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                            document.body.style.backgroundColor = 'red';
                                                        }, 6000); //7 seconds

                                                        setTimeout(function () {
                                                            // Exit the game button
                                                            const exitButton = document.createElement('button');
                                                            exitButton.textContent = 'Exit Game';
                                                            exitButton.addEventListener('click', function () {
                                                                document.location.reload();
                                                            });
                                                            document.body.appendChild(exitButton);
                                                        }, 9000); //7 seconds

                                                    }
                                                });
                                                document.body.appendChild(button);
                                            });
                                        });

                                        document.body.appendChild(simpleButton);
                                    });

                                    document.body.appendChild(additionalButton);
                                    // Leave button weapon1
                                });
                                var simpleButton = document.createElement('button');
                                simpleButton.innerHTML = 'Leave the store';

                                // Add an event listener to the button
                                simpleButton.addEventListener('click', function () {
                                    // Perform some action when the button is clicked
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<p style="color: grey;">You chose to leave the store.</p>';
                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                    var choices = ['grocery store', 'Gun store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'grocery store') {
                                                document.body.innerHTML += '<img src="Img/Grocery-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                                // Create a box element
                                                var box = document.createElement('div');
                                                box.style.width = '400px';
                                                box.style.height = '550px';
                                                box.style.backgroundColor = 'black';
                                                box.style.position = 'absolute';
                                                box.style.top = '50%';
                                                box.style.left = '50%';
                                                box.style.transform = 'translate(-50%, -50%)';
                                                box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                                box.style.borderRadius = '10px';
                                                box.style.zIndex = '-1'; // Send the box to the back

                                                // Append the box to the body
                                                document.body.appendChild(box);
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['milk', 'eggs', 'Canned food', ' Raw meat', 'bread', 'fresh fruits'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                        // Ask if the player wants to take anything else in the grocery store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                    //Leave weapon3 here:

                                                                });
                                                                document.body.appendChild(additionalButton);
                                                            });

                                                            document.body.appendChild(goBackButton);
                                                        });

                                                        document.body.appendChild(takeAnythingElseButton);

                                                    });

                                                    document.body.appendChild(groceryButton);

                                                });

                                            }
                                            if (choice === 'Gun store') {
                                                document.body.innerHTML += '<img src="Img/Weapon-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                                // Create a box element
                                                var box = document.createElement('div');
                                                box.style.width = '400px';
                                                box.style.height = '550px';
                                                box.style.backgroundColor = 'black';
                                                box.style.position = 'absolute';
                                                box.style.top = '50%';
                                                box.style.left = '50%';
                                                box.style.transform = 'translate(-50%, -50%)';
                                                box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                                box.style.borderRadius = '10px';
                                                box.style.zIndex = '-1'; // Send the box to the back

                                                // Append the box to the body
                                                document.body.appendChild(box);
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['Grenade', 'M6', 'AK47'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        // Ask if the player wants to take anything else in the drug store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['Flashbomb', 'Smokebomb', 'Munitions'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                                });
                                                                document.body.appendChild(additionalButton);

                                                            });


                                                            document.body.appendChild(goSomewhereElseButton);


                                                        });
                                                        document.body.appendChild(takeAnythingElseButton);

                                                    });
                                                    document.body.appendChild(drugButton);

                                                });

                                            }//
                                            if (choice === 'the white house') {
                                                document.body.innerHTML += '<p>As you walk to the white house...</p>';

                                                var intervalId;
                                                var isBlue = true;
                                                var toggleCount = 0;

                                                function toggleSiren() {
                                                    if (isBlue) {
                                                        document.body.style.backgroundColor = 'red';
                                                        isBlue = false;
                                                    } else {
                                                        document.body.style.backgroundColor = 'blue';
                                                        isBlue = true;
                                                    }

                                                    toggleCount++;
                                                    if (toggleCount === 4) {
                                                        clearInterval(intervalId);
                                                    }
                                                }

                                                intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second

                                                intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds

                                                setTimeout(function () {

                                                    document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                    document.body.style.backgroundColor = 'red';
                                                }, 6000); //7 seconds

                                                setTimeout(function () {
                                                    // Exit the game button
                                                    const exitButton = document.createElement('button');
                                                    exitButton.textContent = 'Exit Game';
                                                    exitButton.addEventListener('click', function () {
                                                        document.location.reload();
                                                    });
                                                    document.body.appendChild(exitButton);
                                                }, 9000); //7 seconds

                                            }
                                        }
                                        );
                                        document.body.appendChild(button);
                                    });
                                });

                                // Append the button to the document body
                                document.body.appendChild(simpleButton);







                            });
                            document.body.appendChild(takeAnythingElseButton);
                            //return button should be here
                            // Leave button weapon2
                            var simpleButton = document.createElement('button');
                            simpleButton.innerHTML = 'Leave the store';

                            // Add an event listener to the button
                            simpleButton.addEventListener('click', function () {
                                // Perform some action when the button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<p style="color: grey;">You chose to leave the store.</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                var choices = ['grocery store', 'drug store', 'the white house'];
                                choices.forEach(function (choice) {
                                    var button = document.createElement('button');
                                    button.innerHTML = choice;
                                    // choice of where to go
                                    button.addEventListener('click', function () {
                                        document.body.innerHTML = ''; // Clear the screen
                                        document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                        // choice of what to take
                                        if (choice === 'grocery store') {
                                            document.body.innerHTML += '<img src="Img/Grocery-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                            // Create a box element
                                            var box = document.createElement('div');
                                            box.style.width = '400px';
                                            box.style.height = '550px';
                                            box.style.backgroundColor = 'black';
                                            box.style.position = 'absolute';
                                            box.style.top = '50%';
                                            box.style.left = '50%';
                                            box.style.transform = 'translate(-50%, -50%)';
                                            box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                            box.style.borderRadius = '10px';
                                            box.style.zIndex = '-1'; // Send the box to the back

                                            // Append the box to the body
                                            document.body.appendChild(box);
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var groceryChoices = ['milk', 'eggs', 'Canned food', ' Raw meat', 'bread', 'fresh fruits'];
                                            groceryChoices.forEach(function (groceryChoice) {
                                                var groceryButton = document.createElement('button');
                                                groceryButton.innerHTML = groceryChoice;
                                                groceryButton.addEventListener('click', function () {
                                                    inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                    // Ask if the player wants to take anything else in the grocery store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
                                                                inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                            });
                                                            document.body.appendChild(additionalButton);
                                                        });

                                                        document.body.appendChild(goBackButton);
                                                    });

                                                    document.body.appendChild(takeAnythingElseButton);

                                                });

                                                document.body.appendChild(groceryButton);

                                            });

                                        }
                                        if (choice === 'drug store') {
                                            document.body.innerHTML += '<img src="Img/Drug-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back
                    
                    // Append the box to the body
                    document.body.appendChild(box);
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                            drugChoices.forEach(function (drugChoice) {
                                                var drugButton = document.createElement('button');
                                                drugButton.innerHTML = drugChoice;
                                                drugButton.addEventListener('click', function () {
                                                    inventory.push(drugChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    // Ask if the player wants to take anything else in the drug store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
                                                                inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                            });
                                                            document.body.appendChild(additionalButton);

                                                        });


                                                        document.body.appendChild(goSomewhereElseButton);


                                                    });
                                                    document.body.appendChild(takeAnythingElseButton);
                                                });
                                                document.body.appendChild(drugButton);

                                            });

                                        }//
                                        if (choice === 'the white house') {
                                            document.body.innerHTML += '<p>As you walk to the white house...</p>';

                                            var intervalId;
                                            var isBlue = true;
                                            var toggleCount = 0;

                                            function toggleSiren() {
                                                if (isBlue) {
                                                    document.body.style.backgroundColor = 'red';
                                                    isBlue = false;
                                                } else {
                                                    document.body.style.backgroundColor = 'blue';
                                                    isBlue = true;
                                                }

                                                toggleCount++;
                                                if (toggleCount === 4) {
                                                    clearInterval(intervalId);
                                                }
                                            }

                                            intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second

                                            intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds

                                            setTimeout(function () {

                                                document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                document.body.style.backgroundColor = 'red';
                                            }, 6000); //7 seconds

                                            setTimeout(function () {
                                                // Exit the game button
                                                const exitButton = document.createElement('button');
                                                exitButton.textContent = 'Exit Game';
                                                exitButton.addEventListener('click', function () {
                                                    document.location.reload();
                                                });
                                                document.body.appendChild(exitButton);
                                            }, 9000); //7 seconds

                                        }
                                    });
                                    document.body.appendChild(button);
                                });
                            });
                            // Append the button to the document body
                            document.body.appendChild(simpleButton);
                        });




                        document.body.appendChild(weaponButton);
                    });
                }



                //What to take in drug store--
                if (choice === 'drug store') {
                    document.body.innerHTML += '<img src="Img/Drug-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back
                    
                    // Append the box to the body
                    document.body.appendChild(box);
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                    drugChoices.forEach(function (drugChoice) {
                        var drugButton = document.createElement('button');
                        drugButton.innerHTML = drugChoice;
                        drugButton.addEventListener('click', function () {
                            inventory.push(drugChoice); // Add the chosen item to the inventory
                            document.body.innerHTML = '';
                            document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                            // Ask if the player wants to take anything else in the drug store
                            var takeAnythingElseButton = document.createElement('button');

                            takeAnythingElseButton.innerHTML = 'Take anything else?';
                            takeAnythingElseButton.addEventListener('click', function () {
                                document.body.innerHTML = ''; // Clear the screen
                                document.body.innerHTML += '<h2>What else will you take?</h2>';

                                var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                additionalChoices.forEach(function (additionalChoice) {
                                    var additionalButton = document.createElement('button');
                                    additionalButton.innerHTML = additionalChoice;
                                    additionalButton.addEventListener('click', function () {
                                        inventory.push(additionalChoice); // Add the chosen item to the inventory
                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                        // leave button for drug 3
                                        document.body.innerHTML = '';
                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                        var simpleButton = document.createElement('button');
                                        simpleButton.innerHTML = 'Leave store';

                                        simpleButton.addEventListener('click', function () {
                                            document.body.innerHTML = '';
                                            document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                            var choices = ['grocery store', 'Weapon store', 'the white house'];
                                            choices.forEach(function (choice) {
                                                var button = document.createElement('button');
                                                button.innerHTML = choice;
                                                // choice of where to go
                                                button.addEventListener('click', function () {
                                                    document.body.innerHTML = ''; // Clear the screen
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                                    // choice of what to take 
                                                    if (choice === 'grocery store') {
                                                        document.body.innerHTML += '<img src="Img/Grocery-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                                        // Create a box element
                                                        var box = document.createElement('div');
                                                        box.style.width = '400px';
                                                        box.style.height = '550px';
                                                        box.style.backgroundColor = 'black';
                                                        box.style.position = 'absolute';
                                                        box.style.top = '50%';
                                                        box.style.left = '50%';
                                                        box.style.transform = 'translate(-50%, -50%)';
                                                        box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                                        box.style.borderRadius = '10px';
                                                        box.style.zIndex = '-1'; // Send the box to the back

                                                        // Append the box to the body
                                                        document.body.appendChild(box);
                                                        document.body.innerHTML += '<h2>What will you take?</h2>';
                                                        var groceryChoices = [' Raw meat', 'bread', 'milk', 'eggs'];
                                                        groceryChoices.forEach(function (groceryChoice) {
                                                            var groceryButton = document.createElement('button');
                                                            groceryButton.innerHTML = groceryChoice;
                                                            groceryButton.addEventListener('click', function () {
                                                                document.body.innerHTML = '';
                                                                inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                                // Ask if the player wants to take anything else in the grocery store
                                                                var takeAnythingElseButton = document.createElement('button');
                                                                takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                takeAnythingElseButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                    var additionalChoices = ['rope', ' Raw meat', 'cheese', 'flashlight'];
                                                                    additionalChoices.forEach(function (additionalChoice) {
                                                                        var additionalButton = document.createElement('button');
                                                                        additionalButton.innerHTML = additionalChoice;
                                                                        additionalButton.addEventListener('click', function () {
                                                                            inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                            document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<h1>What will you do now?</h1>';
                                                                            var button1 = document.createElement('button');
                                                                            button1.innerHTML = 'Go to bunker';
                                                                            button1.addEventListener('click', function () {
                                                                                document.body.innerHTML = '';
                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to go to the bunker</p>';
                                                                                if (inventory.includes('bread') && ('water')) {
                                                                                    document.body.innerHTML += '<p>You survived 2 weeks with bread and water however you started to feel lonely and commited suicide.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('bread') && ('flashlight')) {
                                                                                    document.body.innerHTML += '<p>You died of thirst...</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('bread') && ('rope')) {
                                                                                    document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('bread') && (' Raw meat')) {
                                                                                    document.body.innerHTML += '<p>You had bread to eat however you had nothing to eat so died thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You starved to death!</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You starved to death.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('milk') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes(' Raw meat') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You ate a piece of raw meat you got from the grocery store and died from food poissoning.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thrist.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('eggs') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You starved to death eggs were not nutritious enough.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('Canned food') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('Canned food') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }
                                                                                else if (inventory.includes('Canned food') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && ('water')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You had enough fruit for 3 days but the rest startedd to rot and you starved to death.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && ('flashlight')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && ('rope')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                                else if (inventory.includes('fresh fruits') && (' Raw meat')) {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>';
                                                                                    document.body.innerHTML += '<p>A few days passed and you felt guilty to not save your friends or family...</p>';
                                                                                    document.body.innerHTML += '<p>You feel more and more lonely</p>';
                                                                                    document.body.innerHTML += '<p></p>';
                                                                                    document.body.innerHTML += '<p>You died of thirst.</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                }

                                                                            });
                                                                            document.body.appendChild(button1);
                                                                            var button2 = document.createElement('button');
                                                                            button2.innerHTML = 'Go to white house';
                                                                            button2.addEventListener('click', function () {
                                                                                document.body.innerHTML = '';
                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to go to the white house</p>';
                                                                                document.body.innerHTML += '<p>As you get there a guard stops you...</p>';
                                                                                setTimeout(function () {
                                                                                    document.body.innerHTML += '<p><b>Guard:</b>This is a restricted area, what are you doing here?</p>';
                                                                                    var answerButton = document.createElement('button');
                                                                                    document.body.appendChild(answerButton);
                                                                                    answerButton.innerHTML = 'Say that you are a friend of the president';
                                                                                    answerButton.addEventListener('click', function () {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p><b>Guard:</b> This is a restricted area! what are you doing here?</p>';
                                                                                        document.body.innerHTML += '<p><b>You:</b>I am a friend of the president</p>';
                                                                                        setTimeout(function () {
                                                                                            document.body.innerHTML += '<p><b>Guard:</b>I don\'t have any instructions from the president. This is your last warning to leave the area!</p>';


                                                                                            var answerButton = document.createElement('button');
                                                                                            document.body.appendChild(answerButton);
                                                                                            answerButton.innerHTML = 'Leave';
                                                                                            answerButton.addEventListener('click', function () {
                                                                                                document.body.innerHTML = '';
                                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                                                setTimeout(function () {
                                                                                                    document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                                    document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                                    document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                                    document.body.innerHTML += '<h1>Try again</h1>';
                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                    var restartButton = document.createElement('button');
                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                    });
                                                                                                    document.body.appendChild(restartButton);
                                                                                                }, 2000);
                                                                                            });
                                                                                            var answerButton = document.createElement('button');
                                                                                            document.body.appendChild(answerButton);
                                                                                            answerButton.innerHTML = 'Fight with him';
                                                                                            answerButton.addEventListener('click', function () {
                                                                                                document.body.innerHTML = '';
                                                                                                document.body.innerHTML += '<p style="color: grey;">You decided to fight with the guard</p>';
                                                                                                setTimeout(function () {
                                                                                                    document.body.innerHTML += '<p>You lost and got killed</p>';
                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                    var restartButton = document.createElement('button');
                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                    });
                                                                                                    document.body.appendChild(restartButton);
                                                                                                }, 2000);

                                                                                            });
                                                                                        }, 2000);
                                                                                    });
                                                                                    var answerButton = document.createElement('button');
                                                                                    document.body.appendChild(answerButton);
                                                                                    answerButton.innerHTML = 'Leave';
                                                                                    answerButton.addEventListener('click', function () {
                                                                                        document.body.innerHTML = '';
                                                                                        document.body.innerHTML += '<p style="color: grey;">You decided to leave the area</p>';
                                                                                        setTimeout(function () {
                                                                                            document.body.innerHTML += '<p>You got caught up by the radiation</p>';
                                                                                            document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                            document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                            document.body.innerHTML += '<h1>Try again</h1>';
                                                                                            document.body.style.backgroundColor = 'red';
                                                                                            var restartButton = document.createElement('button');
                                                                                            restartButton.innerHTML = 'Exit';
                                                                                            restartButton.addEventListener('click', function () {
                                                                                                location.reload(); // Reload the page to restart the file
                                                                                            });
                                                                                            document.body.appendChild(restartButton);
                                                                                        }, 2000);
                                                                                    });
                                                                                }, 3000);

                                                                            });
                                                                            document.body.appendChild(button2);
                                                                        });
                                                                        document.body.appendChild(additionalButton);
                                                                    });

                                                                    document.body.appendChild(goBackButton);
                                                                });

                                                                document.body.appendChild(takeAnythingElseButton);

                                                            });

                                                            document.body.appendChild(groceryButton);

                                                        });

                                                    }
                                                    if (choice === 'Weapon store') {
                                                        document.body.innerHTML += '<h2>What will you take?</h2>';
                                                        var drugChoices = ['knife', 'grenade', 'gun'];
                                                        drugChoices.forEach(function (drugChoice) {
                                                            var drugButton = document.createElement('button');
                                                            drugButton.innerHTML = drugChoice;
                                                            drugButton.addEventListener('click', function () {
                                                                inventory.push(drugChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML = '';
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                // Ask if the player wants to take anything else in the drug store
                                                                var takeAnythingElseButton = document.createElement('button');
                                                                takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                takeAnythingElseButton.addEventListener('click', function () {
                                                                    document.body.innerHTML = ''; // Clear the screen
                                                                    document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                    var additionalChoices = ['scope', 'munitions', 'cleaning kit', 'Poster'];
                                                                    additionalChoices.forEach(function (additionalChoice) {
                                                                        var additionalButton = document.createElement('button');
                                                                        additionalButton.innerHTML = additionalChoice;
                                                                        additionalButton.addEventListener('click', function () {
                                                                            inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                            document.body.innerHTML = '';
                                                                            document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                            document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                            //correct inventory
                                                                            if (inventory.includes('2 anti-radiation suit') && inventory.includes('2 Anti-radiation mask') && inventory.includes('Canned food') && inventory.includes('water')) {
                                                                                setTimeout(function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p>As you leave the store, you receive a phone call...</p>';
                                                                                    setTimeout(function () {
                                                                                        document.body.innerHTML += '<p><b>Joe:</b><j> Hey! I retrieved all of your family, they are safe in the white house bunker! Come if you need</j></p>';

                                                                                        var button1 = document.createElement('button');
                                                                                        button1.innerHTML = 'Great! I\'ll head to the white house!';
                                                                                        button1.addEventListener('click', function () {
                                                                                            document.body.innerHTML = '';
                                                                                            document.body.innerHTML += '<p><b>You</b> Great I\'ll head to the white house!</p>';
                                                                                            document.body.innerHTML += '<p><b>Joe:</b><j> See you! </j></p>';
                                                                                            setTimeout(function () {
                                                                                                var newButton = document.createElement('button');
                                                                                                newButton.innerHTML = 'Go to white house';
                                                                                                newButton.addEventListener('click', function () {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p>As you go to the white house you enter the bunker...</p>';
                                                                                                    document.body.innerHTML += '<p>You get to see your family there, you feel releived.</p>';
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>A few days passes and you start to feel guilty about not saving your friends and your grilfriend...</p>';
                                                                                                    }, 2000);
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>Your guilt has taken over your mental state, you commited suicide...</p>';
                                                                                                        document.body.innerHTML += '<p>Try again.</p>';
                                                                                                    }, 4000);
                                                                                                });
                                                                                                document.body.appendChild(newButton);

                                                                                            }, 2000);
                                                                                        });
                                                                                        document.body.appendChild(button1);

                                                                                        // Button 2
                                                                                        var button2 = document.createElement('button');
                                                                                        button2.innerHTML = 'Thanks but I stil have somethings to do, we\'ll stay in touch!';
                                                                                        button2.addEventListener('click', function () {

                                                                                            document.body.innerHTML = '';
                                                                                            document.body.innerHTML += '<p>Joe: Stay safe!</p>';
                                                                                            setTimeout(function () {
                                                                                                document.body.innerHTML = '';
                                                                                                document.body.innerHTML += '<p> As you hang-up you see a car with the keys in it, you decide to take the car.';
                                                                                                document.body.innerHTML += '<h2>Where will you go?</h2>';
                                                                                                var goSomewhereElseButton = document.createElement('button');
                                                                                                goSomewhereElseButton.innerHTML = 'Go to girlfriend\'s house';
                                                                                                goSomewhereElseButton.addEventListener('click', function () {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to your girlfriend\'s house.</p>';
                                                                                                    document.body.innerHTML += '<p>As you walk to your girlfriend, you see her scared to death....</p>';
                                                                                                    document.body.innerHTML += '<p></p>';
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>You take her in your arms...</p>';
                                                                                                        document.body.innerHTML += '<p><b>You:</b>Thank god you\'re safe.</p>';
                                                                                                        document.body.innerHTML += '<p><b>Girlfirend:</b>Thank you for coming to save me.</p>';

                                                                                                        setTimeout(function () {
                                                                                                            document.body.innerHTML += '<h2>Time is running out, radiation is getting closer and closer... What will you do?</h2>';
                                                                                                            var choiceButton1 = document.createElement('button');
                                                                                                            choiceButton1.innerHTML = 'Wear anti-radiation suit and mask';
                                                                                                            choiceButton1.addEventListener('click', function () {
                                                                                                                document.body.innerHTML = '';
                                                                                                                document.body.innerHTML += '<p>As you both wear your anti-radiation suits and mask you get in the car.</p>';
                                                                                                                document.body.innerHTML += '<p>As you drive towards your bunker...</p>';

                                                                                                                document.body.innerHTML += '<h2>You receive a phone call</h2>';

                                                                                                                var answerButton = document.createElement('button');
                                                                                                                answerButton.innerHTML = 'Answer';
                                                                                                                answerButton.addEventListener('click', function () {
                                                                                                                    document.body.innerHTML = '';
                                                                                                                    document.body.innerHTML += '<p>As you try to pick up the phone you deviate from the road and crashed into a wall.</p>';
                                                                                                                    document.body.innerHTML += '<p>You killed yourself girlfriend... </p>';
                                                                                                                    document.body.innerHTML += '<p>Try again.</p>';
                                                                                                                    document.body.style.backgroundColor = 'red';
                                                                                                                    var restartButton = document.createElement('button');
                                                                                                                    restartButton.innerHTML = 'Exit';
                                                                                                                    restartButton.addEventListener('click', function () {
                                                                                                                        location.reload(); // Reload the page to restart the file
                                                                                                                    });

                                                                                                                });
                                                                                                                document.body.appendChild(answerButton);

                                                                                                                var answerButton = document.createElement('button');
                                                                                                                answerButton.innerHTML = 'Ignore';
                                                                                                                answerButton.addEventListener('click', function () {
                                                                                                                    document.body.innerHTML = '';
                                                                                                                    document.body.innerHTML += '<p>You arrived safely to the bunker as you enter the bunker you see that Joe tried to call you while driving.</p>';
                                                                                                                    document.body.innerHTML += '<p>You get in the bunker</p>';

                                                                                                                });
                                                                                                                document.body.appendChild(answerButton);


                                                                                                            });
                                                                                                            document.body.appendChild(choiceButton1);
                                                                                                            var choiceButton2 = document.createElement('button');
                                                                                                            choiceButton2.innerHTML = 'Get in the car';
                                                                                                            choiceButton2.addEventListener('click', function () {
                                                                                                                document.body.innerHTML = '';
                                                                                                                document.body.innerHTML += '<p>The radiation caught up to you</p>';
                                                                                                                document.body.innerHTML += '<p>Unfortunately you didn\'t have enough time time to run away.</p>';
                                                                                                                document.body.innerHTML += '<p>Try again.</p>'
                                                                                                                document.body.style.backgroundColor = 'red';
                                                                                                                // Create Restart Button
                                                                                                                var restartButton = document.createElement('button');
                                                                                                                restartButton.innerHTML = 'Exit';
                                                                                                                restartButton.addEventListener('click', function () {
                                                                                                                    location.reload(); // Reload the page to restart the file
                                                                                                                });

                                                                                                                document.body.appendChild(restartButton);
                                                                                                            });
                                                                                                            document.body.appendChild(choiceButton2);
                                                                                                            //



                                                                                                        }, 5000);

                                                                                                    }, 2000);


                                                                                                });

                                                                                                var takeAnythingElseButton = document.createElement('button');
                                                                                                takeAnythingElseButton.innerHTML = 'Go to friend\'s house';
                                                                                                takeAnythingElseButton.addEventListener('click', function () {
                                                                                                    document.body.innerHTML = '';
                                                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to go to your friend\'s house.</p>';
                                                                                                    setTimeout(function () {
                                                                                                        document.body.innerHTML += '<p>You\'re friend is not here, you decide to call him...</p>';
                                                                                                        document.body.innerHTML += '<p>He doesn\'t answer </p>';
                                                                                                        var choiceButton1 = document.createElement('button');
                                                                                                        choiceButton1.innerHTML = 'Go to girlfriends house';
                                                                                                        choiceButton1.addEventListener('click', function () {
                                                                                                            document.body.innerHTML = '';
                                                                                                            document.body.innerHTML += '<p style="color: grey;">You chose to go to your girlfriend\'s house.</p>';
                                                                                                            setTimeout(function () {
                                                                                                                document.body.innerHTML += '<p>As you drive to her place</p>';
                                                                                                                document.body.innerHTML += '<p>You get caught up by the radiation</p>';
                                                                                                                document.body.innerHTML += '<p>You are contaminated by radiation!</p>';
                                                                                                                document.body.innerHTML += '<p>You die a few minutes later.</p>';
                                                                                                                document.body.innerHTML += '<h1>Try again</h1>';
                                                                                                                document.body.style.backgroundColor = 'red';
                                                                                                                var restartButton = document.createElement('button');
                                                                                                                restartButton.innerHTML = 'Exit';
                                                                                                                restartButton.addEventListener('click', function () {
                                                                                                                    location.reload(); // Reload the page to restart the file
                                                                                                                });
                                                                                                                document.body.appendChild(restartButton);

                                                                                                            }, 2000);
                                                                                                        });
                                                                                                        document.body.appendChild(choiceButton1);

                                                                                                        var choiceButton2 = document.createElement('button');
                                                                                                        choiceButton2.innerHTML = 'Get in the car';
                                                                                                        choiceButton2.addEventListener('click', function () {
                                                                                                            document.body.innerHTML = '';
                                                                                                            document.body.innerHTML += '<p>The radiation caught up to you.</p>';
                                                                                                            document.body.innerHTML += '<p>Unfortunately, you didn\'t have enough time to run away.</p>';
                                                                                                            document.body.innerHTML += '<p>Try again.</p>';
                                                                                                            document.body.style.backgroundColor = 'red';
                                                                                                            // Create Restart Button
                                                                                                            var restartButton = document.createElement('button');
                                                                                                            restartButton.innerHTML = 'Exit';
                                                                                                            restartButton.addEventListener('click', function () {
                                                                                                                location.reload(); // Reload the page to restart the file
                                                                                                            });
                                                                                                            document.body.appendChild(restartButton);
                                                                                                        });
                                                                                                        document.body.appendChild(choiceButton2);

                                                                                                    }, 2000);
                                                                                                });

                                                                                                document.body.appendChild(goSomewhereElseButton);
                                                                                                document.body.appendChild(takeAnythingElseButton);

                                                                                            }, 2000);

                                                                                        });
                                                                                        document.body.appendChild(button2);


                                                                                    }, 3000);


                                                                                }, 2000);

                                                                            }
                                                                            else {
                                                                                document.body.innerHTML = '';
                                                                                document.body.innerHTML += '<h1>What will you do now?</h1>';
                                                                                var button1 = document.createElement('button');
                                                                                button1.innerHTML = 'Go to bunker';
                                                                                button1.addEventListener('click', function () {
                                                                                    document.body.innerHTML = '';
                                                                                    document.body.innerHTML += '<p style="color: grey;">You decided to go to the bunker</p>';
                                                                                    document.body.innerHTML += '<p>You didn\'t take any food or anything to drink so you died the next day...</p>';
                                                                                    document.body.style.backgroundColor = 'red';
                                                                                    var restartButton = document.createElement('button');
                                                                                    restartButton.innerHTML = 'Exit';
                                                                                    restartButton.addEventListener('click', function () {
                                                                                        location.reload(); // Reload the page to restart the file
                                                                                    });
                                                                                    document.body.appendChild(restartButton);
                                                                                });


                                                                                document.body.appendChild(button1);

                                                                                var button2 = document.createElement('button');
                                                                                button2.innerHTML = 'Phone';
                                                                                document.body.appendChild(button2);

                                                                            }

                                                                        });
                                                                        document.body.appendChild(additionalButton);

                                                                    });


                                                                    document.body.appendChild(goSomewhereElseButton);


                                                                });
                                                                document.body.appendChild(takeAnythingElseButton);
                                                            });
                                                            document.body.appendChild(drugButton);

                                                        });

                                                    }//
                                                    if (choice === 'the white house') {
                                                        document.body.innerHTML += '<p>As you walk to the white house...</p>';

                                                        var intervalId;
                                                        var isBlue = true;
                                                        var toggleCount = 0;

                                                        function toggleSiren() {
                                                            if (isBlue) {
                                                                document.body.style.backgroundColor = 'red';
                                                                isBlue = false;
                                                            } else {
                                                                document.body.style.backgroundColor = 'blue';
                                                                isBlue = true;
                                                            }

                                                            toggleCount++;
                                                            if (toggleCount === 4) {
                                                                clearInterval(intervalId);
                                                            }
                                                        }

                                                        intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second

                                                        intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds

                                                        setTimeout(function () {

                                                            document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                                                            document.body.style.backgroundColor = 'red';
                                                        }, 6000); //7 seconds

                                                        setTimeout(function () {
                                                            // Exit the game button
                                                            const exitButton = document.createElement('button');
                                                            exitButton.textContent = 'Exit Game';
                                                            exitButton.addEventListener('click', function () {
                                                                document.location.reload();
                                                            });
                                                            document.body.appendChild(exitButton);
                                                        }, 9000); //7 seconds

                                                    }
                                                });
                                                document.body.appendChild(button);
                                            });
                                        });

                                        document.body.appendChild(simpleButton);

                                    });
                                    document.body.appendChild(additionalButton);

                                });


                                // Leave button for Drug 1
                                var simpleButton = document.createElement('button');
                                simpleButton.innerHTML = 'Leave the store';

                                // Add an event listener to the button
                                simpleButton.addEventListener('click', function () {
                                    // Perform some action when the button is clicked
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<p style="color: grey;">You chose to leave the store.</p>';
                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                    var choices = ['grocery store', 'Gun store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'grocery store') {
                                                document.body.innerHTML += '<img src="Img/Grocery-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                                // Create a box element
                                                var box = document.createElement('div');
                                                box.style.width = '400px';
                                                box.style.height = '550px';
                                                box.style.backgroundColor = 'black';
                                                box.style.position = 'absolute';
                                                box.style.top = '50%';
                                                box.style.left = '50%';
                                                box.style.transform = 'translate(-50%, -50%)';
                                                box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                                box.style.borderRadius = '10px';
                                                box.style.zIndex = '-1'; // Send the box to the back

                                                // Append the box to the body
                                                document.body.appendChild(box);
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['milk', 'eggs', 'Canned food', ' Raw meat', 'bread', 'fresh fruits'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                        // Ask if the player wants to take anything else in the grocery store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                                });
                                                                document.body.appendChild(additionalButton);
                                                            });

                                                            document.body.appendChild(goBackButton);
                                                        });

                                                        document.body.appendChild(takeAnythingElseButton);

                                                    });

                                                    document.body.appendChild(groceryButton);

                                                });

                                            }
                                            if (choice === 'Gun store') {
                                                document.body.innerHTML += '<img src="Img/Weapon-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                                // Create a box element
                                                var box = document.createElement('div');
                                                box.style.width = '400px';
                                                box.style.height = '550px';
                                                box.style.backgroundColor = 'black';
                                                box.style.position = 'absolute';
                                                box.style.top = '50%';
                                                box.style.left = '50%';
                                                box.style.transform = 'translate(-50%, -50%)';
                                                box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                                box.style.borderRadius = '10px';
                                                box.style.zIndex = '-1'; // Send the box to the back

                                                // Append the box to the body
                                                document.body.appendChild(box);
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['Grenade', 'M6', 'AK47'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                        // Ask if the player wants to take anything else in the drug store
                                                        var takeAnythingElseButton = document.createElement('button');
                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                            var additionalChoices = ['Flashbomb', 'Smokebomb', 'Munitions'];
                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                var additionalButton = document.createElement('button');
                                                                additionalButton.innerHTML = additionalChoice;
                                                                additionalButton.addEventListener('click', function () {
                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                                });
                                                                document.body.appendChild(additionalButton);

                                                            });


                                                            document.body.appendChild(goSomewhereElseButton);


                                                        });
                                                        document.body.appendChild(takeAnythingElseButton);

                                                    });
                                                    document.body.appendChild(drugButton);

                                                });

                                            }//
                                            if (choice === 'the white house') {
                                                document.body.innerHTML += '<p style="color: grey;">You chose to go to the White House...</p>';
                                                setTimeout(function () {
                                                    document.body.innerHTML += '<p>Unfortunately, you were caught by the guards and got killed.</p>';
                                                }, 3000); // 3 seconds
                                            }
                                        });
                                        document.body.appendChild(button);
                                    });
                                });

                                // Append the button to the document body
                                document.body.appendChild(simpleButton);



                            });

                            document.body.appendChild(takeAnythingElseButton);

                            var simpleButton = document.createElement('button');
                            simpleButton.innerHTML = 'Leave the store';

                            // Add an event listener to the button
                            simpleButton.addEventListener('click', function () {
                                // Perform some action when the button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<p style="color: grey;">You chose to leave the store.</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                var choices = ['grocery store', 'drug store', 'the white house'];
                                choices.forEach(function (choice) {
                                    var button = document.createElement('button');
                                    button.innerHTML = choice;
                                    // choice of where to go
                                    button.addEventListener('click', function () {
                                        document.body.innerHTML = ''; // Clear the screen
                                        document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                        // choice of what to take
                                        if (choice === 'grocery store') {
                                            document.body.innerHTML += '<img src="Img/Grocery-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                            // Create a box element
                                            var box = document.createElement('div');
                                            box.style.width = '400px';
                                            box.style.height = '550px';
                                            box.style.backgroundColor = 'black';
                                            box.style.position = 'absolute';
                                            box.style.top = '50%';
                                            box.style.left = '50%';
                                            box.style.transform = 'translate(-50%, -50%)';
                                            box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                            box.style.borderRadius = '10px';
                                            box.style.zIndex = '-1'; // Send the box to the back

                                            // Append the box to the body
                                            document.body.appendChild(box);
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var groceryChoices = ['milk', 'eggs', 'Canned food', ' Raw meat', 'bread', 'fresh fruits'];
                                            groceryChoices.forEach(function (groceryChoice) {
                                                var groceryButton = document.createElement('button');
                                                groceryButton.innerHTML = groceryChoice;
                                                groceryButton.addEventListener('click', function () {
                                                    inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                    // Ask if the player wants to take anything else in the grocery store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
                                                                inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                            });
                                                            document.body.appendChild(additionalButton);
                                                        });

                                                        document.body.appendChild(goBackButton);
                                                    });

                                                    document.body.appendChild(takeAnythingElseButton);

                                                });

                                                document.body.appendChild(groceryButton);

                                            });

                                        }
                                        if (choice === 'drug store') {
                                            document.body.innerHTML += '<img src="Img/Drug-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back
                    
                    // Append the box to the body
                    document.body.appendChild(box);
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                            drugChoices.forEach(function (drugChoice) {
                                                var drugButton = document.createElement('button');
                                                drugButton.innerHTML = drugChoice;
                                                drugButton.addEventListener('click', function () {
                                                    inventory.push(drugChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    // Ask if the player wants to take anything else in the drug store
                                                    var takeAnythingElseButton = document.createElement('button');
                                                    takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                    takeAnythingElseButton.addEventListener('click', function () {
                                                        document.body.innerHTML = ''; // Clear the screen
                                                        document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                        var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                        additionalChoices.forEach(function (additionalChoice) {
                                                            var additionalButton = document.createElement('button');
                                                            additionalButton.innerHTML = additionalChoice;
                                                            additionalButton.addEventListener('click', function () {
                                                                inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                            });
                                                            document.body.appendChild(additionalButton);

                                                        });


                                                        document.body.appendChild(goSomewhereElseButton);


                                                    });

                                                    document.body.appendChild(takeAnythingElseButton);
                                                });

                                                //Leave Button drug 2
                                                var simpleButton = document.createElement('button');
                                                simpleButton.innerHTML = 'Leave the store';

                                                // Add an event listener to the button
                                                simpleButton.addEventListener('click', function () {
                                                    // Perform some action when the button is clicked
                                                    document.body.innerHTML = '';
                                                    document.body.innerHTML += '<p style="color: grey;">You chose to leave the store.</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                                    var choices = ['grocery store', 'drug store', 'the white house'];
                                                    choices.forEach(function (choice) {
                                                        var button = document.createElement('button');
                                                        button.innerHTML = choice;
                                                        // choice of where to go
                                                        button.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<p style="color: grey;">You chose to run to: ' + choice + '</p>';
                                                            // choice of what to take
                                                            if (choice === 'grocery store') {
                                                                document.body.innerHTML += '<img src="Img/Grocery-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                                                                // Create a box element
                                                                var box = document.createElement('div');
                                                                box.style.width = '400px';
                                                                box.style.height = '550px';
                                                                box.style.backgroundColor = 'black';
                                                                box.style.position = 'absolute';
                                                                box.style.top = '50%';
                                                                box.style.left = '50%';
                                                                box.style.transform = 'translate(-50%, -50%)';
                                                                box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                                                                box.style.borderRadius = '10px';
                                                                box.style.zIndex = '-1'; // Send the box to the back

                                                                // Append the box to the body
                                                                document.body.appendChild(box);
                                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                                var groceryChoices = ['milk', 'eggs', 'Canned food', ' Raw meat', 'bread', 'fresh fruits'];
                                                                groceryChoices.forEach(function (groceryChoice) {
                                                                    var groceryButton = document.createElement('button');
                                                                    groceryButton.innerHTML = groceryChoice;
                                                                    groceryButton.addEventListener('click', function () {
                                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + groceryChoice + '</p>';
                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                        document.body.scrollTop = document.body.scrollHeight; // Scroll to the bottom of the screen
                                                                        // Ask if the player wants to take anything else in the grocery store
                                                                        var takeAnythingElseButton = document.createElement('button');
                                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = ''; // Clear the screen
                                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                            var additionalChoices = ['water', 'flashlight', 'rope', ' Raw meat'];
                                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                                var additionalButton = document.createElement('button');
                                                                                additionalButton.innerHTML = additionalChoice;
                                                                                additionalButton.addEventListener('click', function () {
                                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                                                });
                                                                                document.body.appendChild(additionalButton);
                                                                            });

                                                                            document.body.appendChild(goBackButton);
                                                                        });

                                                                        document.body.appendChild(takeAnythingElseButton);

                                                                    });

                                                                    document.body.appendChild(groceryButton);

                                                                });

                                                            }
                                                            if (choice === 'drug store') {
                                                                document.body.innerHTML += '<img src="Img/Drug-store.jpg" alt="Image" style="width: 750px; height: auto; position: fixed; z-index: -1;">';
                    // Create a box element
                    var box = document.createElement('div');
                    box.style.width = '400px';
                    box.style.height = '550px';
                    box.style.backgroundColor = 'black';
                    box.style.position = 'absolute';
                    box.style.top = '50%';
                    box.style.left = '50%';
                    box.style.transform = 'translate(-50%, -50%)';
                    box.style.opacity = '0.8'; // Set the opacity value (between 0 and 1)
                    box.style.borderRadius = '10px';
                    box.style.zIndex = '-1'; // Send the box to the back
                    
                    // Append the box to the body
                    document.body.appendChild(box);
                                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                                var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                                                drugChoices.forEach(function (drugChoice) {
                                                                    var drugButton = document.createElement('button');
                                                                    drugButton.innerHTML = drugChoice;
                                                                    drugButton.addEventListener('click', function () {
                                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                                        document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + drugChoice + '</p>';
                                                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                                        // Ask if the player wants to take anything else in the drug store
                                                                        var takeAnythingElseButton = document.createElement('button');
                                                                        takeAnythingElseButton.innerHTML = 'Take anything else?';
                                                                        takeAnythingElseButton.addEventListener('click', function () {
                                                                            document.body.innerHTML = ''; // Clear the screen
                                                                            document.body.innerHTML += '<h2>What else will you take?</h2>';
                                                                            var additionalChoices = ['medkit', 'vitamins', 'prescription drugs'];
                                                                            additionalChoices.forEach(function (additionalChoice) {
                                                                                var additionalButton = document.createElement('button');
                                                                                additionalButton.innerHTML = additionalChoice;
                                                                                additionalButton.addEventListener('click', function () {
                                                                                    inventory.push(additionalChoice); // Add the chosen item to the inventory
                                                                                    document.body.innerHTML += '<p style="color: grey;">You chose to take: ' + additionalChoice + '</p>';
                                                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

                                                                                });
                                                                                document.body.appendChild(additionalButton);

                                                                            });


                                                                            document.body.appendChild(goSomewhereElseButton);


                                                                        });
                                                                        document.body.appendChild(takeAnythingElseButton);
                                                                    });
                                                                    document.body.appendChild(drugButton);

                                                                });

                                                            }//
                                                            if (choice === 'the white house') {
                                                                document.body.innerHTML += '<p style="color: grey;">You chose to go to the White House...</p>';
                                                                setTimeout(function () {
                                                                    document.body.innerHTML += '<p>Unfortunately, you were caught by the guards and got killed.</p>';
                                                                }, 3000); // 3 seconds
                                                            }
                                                        });
                                                        document.body.appendChild(button);
                                                    });
                                                });

                                                // Append the button to the document body
                                                document.body.appendChild(simpleButton);

                                                document.body.appendChild(drugButton);

                                            });

                                        }//
                                        if (choice === 'the white house') {
                                            document.body.innerHTML += '<p style="color: grey;">You chose to go to the White House...</p>';
                                            setTimeout(function () {
                                                document.body.innerHTML += '<p>Unfortunately, you were caught by the guards and got killed.</p>';
                                            }, 3000); // 3 seconds
                                        }
                                    });
                                    document.body.appendChild(button);
                                });
                            });

                            // Append the button to the document body
                            document.body.appendChild(simpleButton);
                        });

                        document.body.appendChild(drugButton);

                    });

                }
                //what happens in white house
                if (choice === 'the white house') {
                    document.body.innerHTML += '<p>As you walk to the white house...</p>';

                    var intervalId;
                    var isBlue = true;
                    var toggleCount = 0;

                    function toggleSiren() {
                        if (isBlue) {
                            document.body.style.backgroundColor = 'red';
                            isBlue = false;
                        } else {
                            document.body.style.backgroundColor = 'blue';
                            isBlue = true;
                        }

                        toggleCount++;
                        if (toggleCount === 4) {
                            clearInterval(intervalId);
                        }
                    }

                    intervalId = setInterval(toggleSiren, 1000); // Toggle every 1 second

                    intervalId = setInterval(toggleSiren, 500); // Toggle every 500 milliseconds

                    setTimeout(function () {

                        document.body.innerHTML += '<p><b>Unfortunately, you were caught by the guards and got Shot.</b></p>';
                        document.body.style.backgroundColor = 'red';
                    }, 6000); //7 seconds

                    setTimeout(function () {
                        // Exit the game button
                        const exitButton = document.createElement('button');
                        exitButton.textContent = 'Exit Game';
                        exitButton.addEventListener('click', function () {
                            document.location.reload();
                        });
                        document.body.appendChild(exitButton);
                    }, 9000); //7 seconds

                }






            });

            document.body.appendChild(button);






        });

    });



    document.getElementById('phone').addEventListener('click', function () {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>What do you want to do?</h1>';
        document.body.innerHTML += '<img src="Img/phone.png" alt="Image" style="width: 250px">';
        // Create buttons for the player's choices
        var button1 = document.createElement('button');
        button1.innerHTML = 'Call someone';

        button1.addEventListener('click', function () {
            document.body.innerHTML = '';
            document.body.innerHTML += '<h1>Who will you call?</h1>';
            document.body.innerHTML += '<img src="img/Calling.png" alt="Calling" style="width: 250px">';
            var choices = ['Joe', 'Mama', 'Freddy', 'Brother'];
            function choice(person) {
                var button = document.createElement('button');
                button.innerHTML = person;
                button.addEventListener('click', function () {
                    document.body.innerHTML = '';
                    document.body.innerHTML += '<h1>You chose to call: ' + person + '</h1>';
                    if (person === 'Joe') {
                        document.body.innerHTML += '<p><b>Joe:</b> <f>Hey! What can I do for you?</f></p>';
                        // Player's possible responses to Joe
                        document.body.innerHTML += '<button id="Help-me-survive">I need your help!</button>';
                        document.body.innerHTML += '<button id="responseToJoe">Can I come to the White House bunker?</button>';
                        document.getElementById('Help-me-survive').addEventListener('click', function () {
                            // Code to run when the "Help-me-survive" button is clicked
                            document.body.innerHTML = '';
                            document.body.innerHTML += '<h1>Joe</h1>'
                            document.body.innerHTML += '<p><b>Joe:</b> Hey! What can I do for you?</p>';
                            document.body.innerHTML += '<p><b>You:</b> I need your help.</p>';
                            document.body.innerHTML += '<p><b>Joe:</b> <j>Yeah for sure, tell me what you need.</j></p>';

                            // Create buttons for the player's choices
                            var button1 = document.createElement('button');
                            button1.innerHTML = 'Ask Joe to pick up family';
                            button1.addEventListener('click', function () {
                                // Code to run when the "Ask Joe to pick up family" button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<h1>Joe</h1>'
                                document.body.innerHTML += '<p><b>Joe:</b> Hey! What can I do for you?</p>';
                                document.body.innerHTML += '<p><b>You:</b> I need your help.</p>';
                                document.body.innerHTML += '<p><b>Joe:</b> Yeah for sure, tell me what you need.</p>';
                                document.body.innerHTML += '<p><b>You:</b> Man I\'m worried for my family, can you do something to get them to a safe place?</p>'
                                setTimeout(function () {
                                    document.body.innerHTML += '<p><b>Joe:</b> <j>Sure, I will send a troop to go and pick up your family.</j></p>';
                                    var textElements = document.querySelectorAll('j');

                                    // Add CSS styling to the 'strong' class
                                    var style = document.createElement('style');
                                    style.innerHTML = '.strong { font-weight: bold; }';
                                    document.head.appendChild(style);

                                    textElements.forEach(function (element) {
                                        var text = element.innerHTML;
                                        element.innerHTML = '';
                                        var i = 0;
                                        var speed = 35; // Adjust the typing speed here (in milliseconds)

                                        function typeWriter() {
                                            if (i < text.length) {
                                                element.innerHTML += text.charAt(i);
                                                i++;
                                                setTimeout(typeWriter, speed);
                                            }
                                        }

                                        typeWriter();
                                    });
                                }, 3000); // 3 seconds
                                setTimeout(function () {
                                    document.body.innerHTML += '<h2><j>Congratulations, you just saved your whole family!</j></h2>';
                                }, 6000); // 4.5 seconds
                                setTimeout(function () {
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<h1>What will you do now?<h1>';
                                    document.body.innerHTML += '<button id="phone">Call someone else</button>';
                                    document.body.innterHTML += '<button id="weapon">Run somewhere</button>';
                                }, 9000); // 9 seconds


                                // Additional code for handling Joe picking up family
                            });



                            var button2 = document.createElement('button');
                            button2.innerHTML = 'Ask Joe to pick up friends';
                            button2.addEventListener('click', function () {
                                // Code to run when the "Ask Joe to pick up friends" button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<h1>Joe</h1>'
                                document.body.innerHTML += '<p><b>Joe:</b> Alright, I will go and pick up your friends.</p>';
                                // Additional code for handling Joe picking up friends
                            });

                            var button3 = document.createElement('button');
                            button3.innerHTML = 'Send a helicopter to save yourself';
                            button3.addEventListener('click', function () {
                                // Code to run when the "Send a helicopter to save yourself" button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<h1>Joe</h1>'
                                document.body.innerHTML += '<p><b>Joe:</b> Sorry, I can\'t arrange a helicopter. You\'re on your own.</p>';
                                document.body.innerHTML += '<button id="F-joe">Tell joe to go F@ck himself.</button>'
                                document.body.innerHTML += '<button id="F-joe2">Wish him well.</button>'
                                document.getElementById('F-joe').addEventListener('click', function () {
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<h1>Joe</h1>'
                                    document.body.innerHTML += '<p><b>Joe:</b> Sorry, I can\'t arrange a helicopter. You\'re on your own.</p>';
                                    document.body.innerHTML += '<p><b>You:</b> x@xx you Joe!</p>';
                                    document.body.innerHTML += '<p><b>Joe:</b> <j>Goodbye!</j></p>';
                                    setTimeout(function () {
                                        location.reload();
                                    }, 5000);
                                });
                                document.getElementById('F-joe2').addEventListener('click', function () {
                                    document.body.innerHTML = '';
                                    document.body.innerHTML += '<h1>Joe</h1>'
                                    document.body.innerHTML += '<p><b>Joe:</b> Sorry, I can\'t arrange a helicopter. You\'re on your own.</p>';
                                    document.body.innerHTML += '<p><b>You:</b> Goodbye Joe, take care.</p>';
                                    document.body.innerHTML += '<p><b>Joe:</b> <j>Goodbye!</j></p>';
                                    setTimeout(function () {
                                        location.reload();
                                    }, 5000);
                                });


                                // Additional code for handling sending a helicopter
                            });

                            // Append the buttons to the document body
                            document.body.appendChild(button1);
                            document.body.appendChild(button2);
                            document.body.appendChild(button3);



                            // Typing animation effect
                            var textElements = document.querySelectorAll('j');

                            // Add CSS styling to the 'strong' class
                            var style = document.createElement('style');
                            style.innerHTML = '.strong { font-weight: bold; }';
                            document.head.appendChild(style);

                            textElements.forEach(function (element) {
                                var text = element.innerHTML;
                                element.innerHTML = '';
                                var i = 0;
                                var speed = 35; // Adjust the typing speed here (in milliseconds)

                                function typeWriter() {
                                    if (i < text.length) {
                                        element.innerHTML += text.charAt(i);
                                        i++;
                                        setTimeout(typeWriter, speed);
                                    }
                                }

                                typeWriter();
                            });

                            var textElements = document.querySelectorAll('o')

                            var style = document.createElement('style');
                            style.innerHTML = '.strong { font-weight: bold; }';
                            document.head.appendChild(style);
                            textElements.forEach(function (element) {
                                var text = element.innerHTML;
                                element.innerHTML = '';
                                var i = 0;
                                var speed = 35; // Adjust the typing speed here (in milliseconds)

                                function typeWriter() {
                                    if (i < text.length) {
                                        element.innerHTML += text.charAt(i);
                                        i++;
                                        setTimeout(typeWriter, speed);
                                    }
                                }

                                typeWriter();

                            });
                        });
                    }
                    if (person === 'Mama') {
                        document.body.innerHTML += '<p>Hey it\'s been a while how are you doing?</p>';
                        document.body.innerHTML += '<button id="Convo">I\'m fine how are you mom?</button>';
                        document.body.innerHTML += '<button id="responseToJoe">Mom! there\'s no time! You need to come to me!</button>';
                        document.getElementById('Convo').addEventListener('click', function () {
                            document.body.innerHTML = '';
                            document.body.innerHTML += '<p>Hey it\'s been a while how are you doing?</p>';
                            document.body.innerHTML += '<p>I\'m fine how are you mom?</p>';
                            document.body.innerHTML += '<p>Good to hear that you are fine, I\'m doing good too.</p>';
                        });
                    }

                    if (person === 'Freddy') {
                        document.body.innerHTML += '<p><b>You:</b> Hello?</p>';
                        // Play sound for Freddy
                        var audio = new Audio('mp3/ I want to break free Sound .mp3');
                        audio.play();
                        document.body.innerHTML += '<img src="img/Freddy.png" alt="Freddy" style="width: 250px">';
                        // Typing animation effect  for Freddy
                        var textElements = document.querySelectorAll('f');
                        textElements.forEach(function (element) {
                            var text = element.innerHTML;
                            element.innerHTML = '';
                            var i = 0;
                            var speed = 35; // Adjust the typing speed here (in milliseconds)

                            function typeWriter() {
                                if (i < text.length) {
                                    element.innerHTML += text.charAt(i);
                                    i++;
                                    setTimeout(typeWriter, speed);
                                }
                            }

                            typeWriter();
                            // Start the typing animation
                        });
                        document.body.innerHTML += '<p><b>Freddy:</b> <f>I want to break free!</f></p>';
                    }
                    if (person === 'Brother') {
                        document.body.innerHTML += '<p>Brother is not available right now. Please leave a message after the beep.</p>';
                    }

                    // Typing animation effect
                    var textElements = document.querySelectorAll('f');
                    textElements.forEach(function (element) {
                        var text = element.innerHTML;
                        element.innerHTML = '';
                        var i = 0;
                        var speed = 35; // Adjust the typing speed here (in milliseconds)

                        function typeWriter() {
                            if (i < text.length) {
                                element.innerHTML += text.charAt(i);
                                i++;
                                setTimeout(typeWriter, speed);
                            }
                        }

                        typeWriter();
                        // Start the typing animation
                    });



                });

                document.body.appendChild(button);
            }
            choices.forEach(function (person) {
                choice(person);
            });
        });
        document.body.appendChild(button1);

        var button2 = document.createElement('button');
        button2.innerHTML = 'Watch a tutorial on how to survive';
        button2.addEventListener('click', function () {
            var videoUrl = "https://www.youtube.com/watch?v=Tvyx-1IpU58";
            window.location.href = videoUrl;

        });
        document.body.appendChild(button2);
    });

}
