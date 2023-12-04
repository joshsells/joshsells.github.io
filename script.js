// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Change the background color on page load
    document.body.style.backgroundColor = getRandomColor();
});
