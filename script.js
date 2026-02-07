let messageIndex = 0;
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

function handleNoClick() {
    const noButton = document.querySelector('#noButton');
    const yesButton = document.querySelector('#yesButton');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Grow the Yes button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    yesButton.style.padding = '20px 40px';
}

function handleYesClick() {
    const container = document.querySelector('.container');
    
    // Customize these two names!
    const myName = "Kranthi"; 
    const herName = "Sunitha";

    const imagePath = "./img3.gif";

    container.innerHTML = `
        <h1 class="header_text">I Knew you would say yes, ${herName}! ❤️</h1>
        <h3 style="color: #ff4d6d; margin-top: -10px;">Forever yours, ${myName}</h3>
        <div class="gif_container">
            <img src="${imagePath}" 
                 onerror="this.src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndnBqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqJnBvPT1hJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/MDJ9IbxxvDUQM/giphy.gif'" 
                 alt="Hugs" 
                 style="height: 250px; border-radius: 15px;">
        </div>
    `;
    
    // Bonus: Make the hearts rain faster when she says Yes!
    setInterval(createHeart, 100); 
}

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



