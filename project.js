document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("category");
    const searchInput = document.getElementById("search");
    const eventCards = document.querySelectorAll(".event-card");
    const modal = document.getElementById("event-modal");
    const closeModal = document.getElementById("close-modal");
    const eventTitle = document.getElementById("event-title");
    const eventDescription = document.getElementById("event-description");
    const eventLocation = document.getElementById("event-location");
    const eventDateTime = document.getElementById("event-date-time");

    // Filter events based on category selection
    categoryFilter.addEventListener("change", function () {
        const selectedCategory = categoryFilter.value.toLowerCase();
        eventCards.forEach(card => {
            const category = card.querySelector("button").innerText.toLowerCase();
            if (selectedCategory === "all" || category.includes(selectedCategory)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Search events
    searchInput.addEventListener("keyup", function () {
        const searchText = searchInput.value.toLowerCase();
        eventCards.forEach(card => {
            const title = card.querySelector("h4").innerText.toLowerCase();
            const description = card.querySelector("p").innerText.toLowerCase();
            if (title.includes(searchText) || description.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Open modal when event is clicked
    eventCards.forEach(card => {
        card.addEventListener("click", function () {
            eventTitle.innerText = card.querySelector("h4").innerText;
            eventDescription.innerText = card.querySelector("p").innerText;
            eventLocation.innerText = "Location: TBD";
            eventDateTime.innerText = "Date & Time: TBD";
            modal.style.display = "block";
        });
    });

    // Close modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
