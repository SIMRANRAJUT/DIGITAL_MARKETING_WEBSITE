// JavaScript for handling button click event
document.getElementById("learn-more").addEventListener("click", function() {
    // Replace this with the action you want to take when the button is clicked
    alert("You clicked the Learn More button!");
});




   


    // JavaScript code to toggle the navigation menu on small screens
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});




// JavaScript code to handle form submission and validation

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform basic validation (you can replace this with server-side validation)
    if (username === "" || password === "") {
        document.getElementById("error-message").textContent = "Username and password are required.";
        return;
    }

    // Here, you can send the login credentials to your server for validation
    // For this example, we'll simulate a successful login
    // Replace this with your actual authentication logic
    if (username === "user" && password === "password") {
        document.getElementById("error-message").textContent = "Login successful!";
        // Redirect to a new page or perform other actions after a successful login
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});





function initMap() {
    // Create a map centered at a specific latitude and longitude
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 }, // Replace with your desired location
        zoom: 12, // Adjust the zoom level as needed
    });

    // You can add markers, overlays, and other map components here
}
