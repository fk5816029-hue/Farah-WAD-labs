// Live name update
const nameInput = document.getElementById("nameinput");
const greeting = document.getElementById("mood");
const moodSelect = document.getElementById("moodSelect");
const emoji = document.getElementById("emoji");
const button = document.getElementById("changeMoodBtn");

nameInput.addEventListener("input", function() {
    const name = nameinput.value;
    greeting.textContent = "Hello " + name + "!";
});

// Change emoji and background color on button click
button.addEventListener("click", function() {
    const mood = moodSelect.value;

    if (mood === "happy") {
        emoji.textContent = "😄";
        document.body.style.backgroundColor = "lightpink";
    } else if (mood === "sad") {
        emoji.textContent = "😢";
        document.body.style.backgroundColor = "lightblue";
    } else if (mood === "angry") {
        emoji.textContent = "😡";
        document.body.style.backgroundColor = "lightgrey";
    } else if (mood === "excited") {
        emoji.textContent = "🤩";
        document.body.style.backgroundColor = "lightyellow";
    }
});