document.addEventListener('DOMContentLoaded', () => {
    // Function to extract access token from the URL hash
    function getAccessToken() {
        const hash = window.location.hash.substring(1); // Get everything after the '#'
        const params = new URLSearchParams(hash); // Use URLSearchParams to parse the query string
        return params.get("access_token"); // Extract the access_token parameter
    }

    // Get access token from URL if available
    const accessToken = getAccessToken();
    if (accessToken) {
        console.log("Spotify Access Token:", accessToken);
        // You can now use the access token to make API requests to Spotify (e.g., fetch playlists)
    } else {
        console.log("No access token found.");
    }

    // Handling page navigation when 'Continue' button is clicked
    const continueButton = document.querySelector('.continue-btn');
    if (continueButton) {
        continueButton.addEventListener('click', () => {
            console.log("Continue button clicked!");
            window.location.href = 'intro.html'; // Navigate to the next page
        });
    }
});
