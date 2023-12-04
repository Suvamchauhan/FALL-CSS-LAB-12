// Selecting the text element displaying the percentage
let percentageText = document.querySelector("#percentage");

// Adding an event listener for click events on the SVG element
document.querySelector("svg").addEventListener("click", function () {
    // Getting the current percentage value as an integer
    let currentPercentage = parseInt(percentageText.textContent, 10);

    // Calculating the new percentage value (increased by 25% up to a maximum of 75%)
    let newPercentage = (currentPercentage < 75) ? currentPercentage + 25 : 75;

    // Updating the text content to display the new percentage
    percentageText.textContent = newPercentage + '%';

    // Dynamically setting the width of the bar using the 'width' attribute
    document.querySelector("#bar").setAttribute('width', newPercentage + '%');
});
