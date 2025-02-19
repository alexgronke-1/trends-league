const API_URL = "https://trends-league.onrender.com/api/trends";

async function loadTrends() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const container = document.getElementById("trends-container");

        for (const [category, trends] of Object.entries(data)) {
            const categoryDiv = document.createElement("div");
            categoryDiv.classList.add("trend-category");

            const title = document.createElement("h2");
            title.textContent = category.replace(/([A-Z])/g, ' $1').trim();
            categoryDiv.appendChild(title);

            trends.forEach(trend => {
                const trendDiv = document.createElement("div");
                trendDiv.classList.add("trend-item");

                // Create button for selection
                const button = document.createElement("button");
                button.textContent = trend.trend;
                button.classList.add("trend-button");
                button.dataset.trendId = trend.id;
                
                // Add click event for selection
                button.addEventListener("click", () => toggleSelection(button));

                trendDiv.appendChild(button);
                categoryDiv.appendChild(trendDiv);
            });

            container.appendChild(categoryDiv);
        }
    } catch (error) {
        console.error("Error loading trends:", error);
    }
}

// Store selected trends
let selectedTrends = [];

function toggleSelection(button) {
    const trendId = button.dataset.trendId;

    if (selectedTrends.includes(trendId)) {
        selectedTrends = selectedTrends.filter(id => id !== trendId);
        button.classList.remove("selected");
    } else {
        if (selectedTrends.length >= 3) {
            alert("You can only select up to 3 trends!");
            return;
        }
        selectedTrends.push(trendId);
        button.classList.add("selected");
    }
}

// Handle Submit Button Click
document.getElementById("submit-btn").addEventListener("click", () => {
    if (selectedTrends.length !== 3) {
        alert("Please select exactly 3 trends before submitting.");
        return;
    }

    alert("You selected trends: " + selectedTrends.join(", "));
});

loadTrends();
