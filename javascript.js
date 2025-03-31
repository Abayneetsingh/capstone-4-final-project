const apiKey = 'PvYmhMKGT6qHMlZbtpgOqQSY275QF26mViTq7du6';  // You can get your own API key from: https://api.nasa.gov/

function fetchAPOD() {
    const date = document.getElementById("date-input").value;
    if (!date) {
        alert("Please select a date.");
        return;
    }
    
    const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
                return;
            }

            // Display the image and description
            document.getElementById("selected-date").textContent = date;
            document.getElementById("apod-image").src = data.url;
            document.getElementById("apod-image").alt = data.title;
            document.getElementById("description").textContent = data.explanation;

            // Show the APOD container
            document.getElementById("apod-container").style.display = "block";
        })
        .catch(error => {
            console.error("Error fetching APOD:", error);
            alert("Failed to retrieve the data.");
        });
}