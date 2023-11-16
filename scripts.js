function shakeMagic8Ball() {
    const responses = [
        "Yes, definitely.",
        "Without a doubt.",
        "Most likely.",
        "Yes, but ask again later.",
        "Ask again later.",
        "Cannot predict now.",
        "Don't count on it.",
        "Very doubtful.",
        "No way!",
        "Outlook not so good.",
    ];

    const questionInput = document.getElementById("questionInput");
    const responseDisplay = document.getElementById("response");

    // Check if the question is not empty
    if (questionInput.value.trim() !== "") {
        // Add shake animation class
        responseDisplay.classList.add("shake-animation");

        // Shake the Magic 8 Ball and display the response after the animation
        setTimeout(() => {
            const response = responses[Math.floor(Math.random() * responses.length)];
            responseDisplay.textContent = `Magic 8 Ball says: ${response}`;
            
            // Remove shake animation class
            responseDisplay.classList.remove("shake-animation");
        }, 500);
    } else {
        alert("Please enter a question before shaking the Magic 8 Ball.");
    }
}
