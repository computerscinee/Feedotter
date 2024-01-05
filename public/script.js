// Function to create and add a fish element to the game container
function createFish() {
    const fish = document.createElement('div');
    fish.className = 'fish';
    fish.innerHTML = '🐟'; // Fish emoji
    fish.style.position = 'absolute';
    fish.style.left = Math.random() * 550 + 'px'; // Random horizontal position
    fish.style.top = Math.random() * 350 + 'px'; // Random vertical position
    fish.style.fontSize = '30px';

    document.getElementById('game-container').appendChild(fish);
}

document.getElementById('feed-button').addEventListener('click', function() {
    // Call the createFish function to add a new fish to the screen
    createFish();
});
