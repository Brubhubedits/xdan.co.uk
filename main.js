document.addEventListener("DOMContentLoaded", function() {
    const youtubeToggle = document.getElementById("youtube-toggle");
    const youtubeEmbeds = document.getElementById("youtube-embeds");
    const spotifyToggle = document.getElementById("spotify-toggle");
    const spotifyEmbeds = document.getElementById("spotify-embeds");

    youtubeEmbeds.classList.add("hidden");
    spotifyEmbeds.classList.add("hidden");

    function toggleVisibility(embeds, toggleButton, buttonTextShow, buttonTextHide) {
        const container = embeds.parentElement;

        if (embeds.classList.contains("hidden")) {
            container.classList.add("expanded");
            embeds.classList.remove("hidden", "fade-out");
            embeds.classList.add("fade-in");
            toggleButton.textContent = buttonTextHide;
        } else {
            embeds.classList.remove("fade-in");
            embeds.classList.add("fade-out");

            embeds.addEventListener("animationend", function hideAfterAnimation() {
                embeds.classList.add("hidden");
                embeds.classList.remove("fade-out");
                container.classList.remove("expanded");
                toggleButton.textContent = buttonTextShow;
                embeds.removeEventListener("animationend", hideAfterAnimation);
            });
        }
    }

    youtubeToggle.addEventListener("click", function() {
        toggleVisibility(youtubeEmbeds, youtubeToggle, "Show Videos", "Hide Videos");
    });

    spotifyToggle.addEventListener("click", function() {
        toggleVisibility(spotifyEmbeds, spotifyToggle, "Show Spotify", "Hide Spotify");
    });
});
