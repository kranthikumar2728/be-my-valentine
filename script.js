function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Randomize the heart symbol slightly
    const hearts = ['❤️', '💖', '💝', '💗', '💓'];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Randomize position and speed
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // between 2-5s
    
    document.body.appendChild(heart);
    
    // Remove heart after it falls to keep the page fast
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start the heart rain
setInterval(createHeart, 300);
