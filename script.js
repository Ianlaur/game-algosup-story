window.onload = function () {
    var inventory = []; // Declare and initialize the inventory array

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
                document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                // choice of what to take
                if (choice === 'grocery store') {
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                    groceryChoices.forEach(function (groceryChoice) {
                        var groceryButton = document.createElement('button');
                        groceryButton.innerHTML = groceryChoice;
                        groceryButton.addEventListener('click', function () {
                            inventory.push(groceryChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
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
                                        document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

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
                                    document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                    var choices = ['Gun store', 'drug store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'Gun store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['knife', 'grenade', 'gun'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
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
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
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
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                                document.body.innerHTML += '<p>You chose to go to the White House...</p>';
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
                            //Leave button grocery 2
                            var simpleButton = document.createElement('button');
                            simpleButton.innerHTML = 'Leave the store';

                            // Add an event listener to the button
                            simpleButton.addEventListener('click', function () {
                                // Perform some action when the button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                var choices = ['Gun store', 'drug store', 'the white house'];
                                choices.forEach(function (choice) {
                                    var button = document.createElement('button');
                                    button.innerHTML = choice;
                                    // choice of where to go
                                    button.addEventListener('click', function () {
                                        document.body.innerHTML = ''; // Clear the screen
                                        document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                        // choice of what to take
                                        if (choice === 'Gun store') {
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var groceryChoices = ['knife', 'grenade', 'gun'];
                                            groceryChoices.forEach(function (groceryChoice) {
                                                var groceryButton = document.createElement('button');
                                                groceryButton.innerHTML = groceryChoice;
                                                groceryButton.addEventListener('click', function () {
                                                    inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
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
                                                                document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                            drugChoices.forEach(function (drugChoice) {
                                                var drugButton = document.createElement('button');
                                                drugButton.innerHTML = drugChoice;
                                                drugButton.addEventListener('click', function () {
                                                    inventory.push(drugChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
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
                                                                document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                            document.body.innerHTML += '<p>You chose to go to the White House...</p>';
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


                        document.body.appendChild(groceryButton);

                    });

                }

                // what to take weapon store
                if (choice === 'weapon store') {
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var weaponChoices = ['knife', 'grenade', 'gun'];
                    weaponChoices.forEach(function (weaponChoice) {
                        var weaponButton = document.createElement('button');
                        weaponButton.innerHTML = weaponChoice;
                        weaponButton.addEventListener('click', function () {
                            inventory.push(weaponChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p>You chose to take: ' + weaponChoice + '</p>';
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
                                        document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
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
                                    document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                    var choices = ['grocery store', 'Gun store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'grocery store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
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
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['Grenade', 'M6', 'AK47'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
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
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                                document.body.innerHTML += '<p>You chose to go to the White House...</p>';
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
                            //return button should be here

                            // Leave button weapon2
                            var simpleButton = document.createElement('button');
                            simpleButton.innerHTML = 'Leave the store';

                            // Add an event listener to the button
                            simpleButton.addEventListener('click', function () {
                                // Perform some action when the button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                var choices = ['grocery store', 'drug store', 'the white house'];
                                choices.forEach(function (choice) {
                                    var button = document.createElement('button');
                                    button.innerHTML = choice;
                                    // choice of where to go
                                    button.addEventListener('click', function () {
                                        document.body.innerHTML = ''; // Clear the screen
                                        document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                        // choice of what to take
                                        if (choice === 'grocery store') {
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                            groceryChoices.forEach(function (groceryChoice) {
                                                var groceryButton = document.createElement('button');
                                                groceryButton.innerHTML = groceryChoice;
                                                groceryButton.addEventListener('click', function () {
                                                    inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
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
                                                                document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                            drugChoices.forEach(function (drugChoice) {
                                                var drugButton = document.createElement('button');
                                                drugButton.innerHTML = drugChoice;
                                                drugButton.addEventListener('click', function () {
                                                    inventory.push(drugChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
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
                                                                document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                            document.body.innerHTML += '<p>You chose to go to the White House...</p>';
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

                        document.body.appendChild(weaponButton);

                    });
                }



                //What to take in drug store
                if (choice === 'drug store') {
                    document.body.innerHTML += '<h2>What will you take?</h2>';
                    var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                    drugChoices.forEach(function (drugChoice) {
                        var drugButton = document.createElement('button');
                        drugButton.innerHTML = drugChoice;
                        drugButton.addEventListener('click', function () {
                            inventory.push(drugChoice); // Add the chosen item to the inventory
                            document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
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
                                        document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
                                        document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory

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
                                    document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                    var choices = ['grocery store', 'Gun store', 'the white house'];
                                    choices.forEach(function (choice) {
                                        var button = document.createElement('button');
                                        button.innerHTML = choice;
                                        // choice of where to go
                                        button.addEventListener('click', function () {
                                            document.body.innerHTML = ''; // Clear the screen
                                            document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                            // choice of what to take
                                            if (choice === 'grocery store') {
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                                groceryChoices.forEach(function (groceryChoice) {
                                                    var groceryButton = document.createElement('button');
                                                    groceryButton.innerHTML = groceryChoice;
                                                    groceryButton.addEventListener('click', function () {
                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
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
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                var drugChoices = ['Grenade', 'M6', 'AK47'];
                                                drugChoices.forEach(function (drugChoice) {
                                                    var drugButton = document.createElement('button');
                                                    drugButton.innerHTML = drugChoice;
                                                    drugButton.addEventListener('click', function () {
                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                        document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
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
                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                                document.body.innerHTML += '<p>You chose to go to the White House...</p>';
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
                                document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                var choices = ['grocery store', 'drug store', 'the white house'];
                                choices.forEach(function (choice) {
                                    var button = document.createElement('button');
                                    button.innerHTML = choice;
                                    // choice of where to go
                                    button.addEventListener('click', function () {
                                        document.body.innerHTML = ''; // Clear the screen
                                        document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                        // choice of what to take
                                        if (choice === 'grocery store') {
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                            groceryChoices.forEach(function (groceryChoice) {
                                                var groceryButton = document.createElement('button');
                                                groceryButton.innerHTML = groceryChoice;
                                                groceryButton.addEventListener('click', function () {
                                                    inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
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
                                                                document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                            document.body.innerHTML += '<h2>What will you take?</h2>';
                                            var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                            drugChoices.forEach(function (drugChoice) {
                                                var drugButton = document.createElement('button');
                                                drugButton.innerHTML = drugChoice;
                                                drugButton.addEventListener('click', function () {
                                                    inventory.push(drugChoice); // Add the chosen item to the inventory
                                                    document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
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
                                                                document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                                    document.body.innerHTML += '<p>You chose to leave the store.</p>';
                                                    document.body.innerHTML += '<p>Inventory: ' + inventory.join(', ') + '</p>'; // Display the inventory
                                                    document.body.innerHTML += '<h1>Where will you run now?</h1>';
                                                    var choices = ['grocery store', 'drug store', 'the white house'];
                                                    choices.forEach(function (choice) {
                                                        var button = document.createElement('button');
                                                        button.innerHTML = choice;
                                                        // choice of where to go
                                                        button.addEventListener('click', function () {
                                                            document.body.innerHTML = ''; // Clear the screen
                                                            document.body.innerHTML += '<p>You chose to run to: ' + choice + '</p>';
                                                            // choice of what to take
                                                            if (choice === 'grocery store') {
                                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                                var groceryChoices = ['milk', 'eggs', 'boite de conserve', ' Raw meat', 'bread', 'fresh fruits'];
                                                                groceryChoices.forEach(function (groceryChoice) {
                                                                    var groceryButton = document.createElement('button');
                                                                    groceryButton.innerHTML = groceryChoice;
                                                                    groceryButton.addEventListener('click', function () {
                                                                        inventory.push(groceryChoice); // Add the chosen item to the inventory
                                                                        document.body.innerHTML += '<p>You chose to take: ' + groceryChoice + '</p>';
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
                                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                                                document.body.innerHTML += '<h2>What will you take?</h2>';
                                                                var drugChoices = ['painkillers', 'antibiotics', 'bandages'];
                                                                drugChoices.forEach(function (drugChoice) {
                                                                    var drugButton = document.createElement('button');
                                                                    drugButton.innerHTML = drugChoice;
                                                                    drugButton.addEventListener('click', function () {
                                                                        inventory.push(drugChoice); // Add the chosen item to the inventory
                                                                        document.body.innerHTML += '<p>You chose to take: ' + drugChoice + '</p>';
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
                                                                                    document.body.innerHTML += '<p>You chose to take: ' + additionalChoice + '</p>';
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
                                                                document.body.innerHTML += '<p>You chose to go to the White House...</p>';
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
                                            document.body.innerHTML += '<p>You chose to go to the White House...</p>';
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
                    document.body.innerHTML += '<p>You chose to go to the White House...</p>';
                    setTimeout(function () {
                        document.body.innerHTML += '<p>Unfortunately, you were caught by the guards and got killed.</p>';
                    }, 3000); // 3 seconds
                }



            });

            document.body.appendChild(button);






        });

    });


    document.getElementById('phone').addEventListener('click', function () {
        document.body.innerHTML = '';
        document.body.innerHTML += '<h1>What do you want to do?</h1>';

        // Create buttons for the player's choices
        var button1 = document.createElement('button');
        button1.innerHTML = 'Call someone';
        button1.addEventListener('click', function () {
            document.body.innerHTML = '';
            document.body.innerHTML += '<h1>Who will you call?</h1>';
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
                        document.body.innerHTML += '<button id="Help-me-survive">Help me survive</button>';
                        document.body.innerHTML += '<button id="responseToJoe">Can I come to the White House bunker?</button>';
                        document.getElementById('Help-me-survive').addEventListener('click', function () {
                            // Code to run when the "Help-me-survive" button is clicked
                            document.body.innerHTML = '';
                            document.body.innerHTML += '<h1>Joe</h1>'
                            document.body.innerHTML += '<p><b>Joe:</b> Hey! What can I do for you?</p>';
                            document.body.innerHTML += '<p><b>You:</b> Help me survive.</p>';
                            document.body.innerHTML += '<p><b>Joe:</b> <j>Yeah for sure, tell me what you need.</j></p>';

                            // Create buttons for the player's choices
                            var button1 = document.createElement('button');
                            button1.innerHTML = 'Ask Joe to pick up family';
                            button1.addEventListener('click', function () {
                                // Code to run when the "Ask Joe to pick up family" button is clicked
                                document.body.innerHTML = '';
                                document.body.innerHTML += '<h1>Joe</h1>'
                                document.body.innerHTML += '<p><b>Joe:</b> Hey! What can I do for you?</p>';
                                document.body.innerHTML += '<p><b>You:</b> Help me survive.</p>';
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
                                    document.body.innerHTML += '<button id="run">Run to the grocery store</button>';
                                    document.body.innerHTML += '<button id="phone">Call someone</button>';
                                    //stopped here
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
                        document.body.innerHTML += '<p>Mama is not available right now. Please leave a message after the beep.</p>';
                    }
                    if (person === 'Freddy') {
                        document.body.innerHTML += '<p>You: Hello?</p>';
                        // Play sound for Freddy
                        var audio = new Audio('https://github.com/Ianlaur/game-algosup-story/blob/main/mp3/Freddie%20Mercury%20saying%20MAMA.mp3');
                        audio.play();
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
        button2.innerHTML = 'Option 2';
        button2.addEventListener('click', function () {
            // Code for option 2
        });
        document.body.appendChild(button2);
    });



}

