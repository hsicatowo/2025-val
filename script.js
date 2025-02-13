function startChomping() {
    const pacman = document.querySelector('.pacman');
    const chocolate = document.querySelector('.chocolate');
    const chompSound = document.getElementById('chomp-sound');
    const btn = document.querySelector('.btn');
    const os = document.querySelector('.os-container');
    
    pacman.style.display = 'block';
    pacman.style.animation = 'move 6s linear 1, chomp 0.8s steps(1) 7.5'; // Run animation once
    pacman.addEventListener('animationend', function() {
        pacman.style.display = 'none'; // Hide Pac-Man after the animation ends
        chocolate.style.display = 'none';
        chompSound.pause(); // Stop the sound when animation ends
        chompSound.currentTime = 0; // Reset the audio to the beginning
        btn.style.display = 'none';
        os.style.display = 'block';
        
    });

    chocolate.style.animation = 'disappear 6s linear 1'; // Gradually disappear chocolate bar
    chompSound.play(); // Play the chomping sound
}
