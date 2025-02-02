// Get the access token from the URL after redirect
function getAccessToken() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get("access_token");
}

const accessToken = getAccessToken();
if (accessToken) {
    console.log("Spotify Access Token:", accessToken);
    // You can now use this token to make API requests to Spotify
} else {
    console.log("No access token found.");
}

// Handling page navigation
document.querySelectorAll('.continue-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const currentPage = e.target.closest('body').classList[0]; // Get current page class
        if (currentPage === 'welcome-page') {
            window.location.href = 'intro.html'; // Navigate to introduction page
        } else if (currentPage === 'intro-page') {
            window.location.href = 'mood.html'; // Navigate to mood selection page
        } else if (currentPage === 'mood-page') {
            window.location.href = 'artist.html'; // Navigate to artist selection page
        }
    });
});
