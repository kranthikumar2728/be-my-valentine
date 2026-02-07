let messageIndex = 0;

const messages = [
    "Really sure??",
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
    
    // Change the text of the No button
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Make the Yes button grow
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    yesButton.style.padding = `${currentSize * 0.8}px ${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Redirect to a success page or change the content
    document.querySelector('.container').innerHTML = `
        <h1 class="header_text">Knew you would say yes!</h1>
        <div class="gif_container">
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndnBqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqJnBvPT1hJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/MDJ9IbxxvDUQM/giphy.gif" alt="Cute Hug">
        </div>
    `;
}