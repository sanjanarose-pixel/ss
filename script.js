document.addEventListener('DOMContentLoaded', () => {
    // Function to extract access token from the URL hash
    function getAccessToken() {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        return params.get("access_token");
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
        continueButton
