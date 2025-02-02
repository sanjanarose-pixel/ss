// Get the access token from the URL after redirect
function getAccessToken() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get("access_token");
}

const accessToken = getAccessToken();
if (accessToken) {
    console.log("Spotify Access Token:", accessToken);
    // Now you can use this token to make API requests
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

// Mood selection logic
let selectedMoods = [];
document.querySelectorAll('.mood-img').forEach(img => {
  img.addEventListener('click', (e) => {
    const mood = e.target.dataset.mood;
    if (selectedMoods.length < 3 && !selectedMoods.includes(mood)) {
      selectedMoods.push(mood);
      e.target.style.border = '3px solid green'; // Visually show selection
    } else if (selectedMoods.includes(mood)) {
      selectedMoods = selectedMoods.filter(item => item !== mood);
      e.target.style.border = ''; // Deselect the mood
    }
  });
});

// Generate playlist logic
document.getElementById('generate-playlist').addEventListener('click', () => {
  const artist1 = document.getElementById('artist1').value;
  const artist2 = document.getElementById('artist2').value;
  const artist3 = document.getElementById('artist3').value;
  const artist4 = document.getElementById('artist4').value;
  const artist5 = document.getElementById('artist5').value;

  // Use Spotify API here to generate playlist
  fetch(`https://api.spotify.com/v1/recommendations?seed_artists=${artist1},${artist2},${artist3},${artist4},${artist5}&limit=20`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer YOUR_SPOTIFY_API_TOKEN'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data); // Display the playlist
    // Render playlist to the user (can be added here)
  })
  .catch(error => console.error(error));
});

