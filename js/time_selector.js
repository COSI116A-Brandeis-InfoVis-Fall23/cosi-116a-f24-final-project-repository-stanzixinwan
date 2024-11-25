// Create a time selector for years 2000-2020
function createTimeSelector(data, updateVisualization) {
    // Append a slider to the body or a specific container
    const container = d3.select("body") // Change to your container selector
        .append("div")
        .attr("id", "time-selector")
        .style("margin", "20px");

    container.append("label")
        .attr("for", "year-slider")
        .text("Select Year: ");

    // Slider input
    container.append("input")
        .attr("type", "range")
        .attr("id", "year-slider")
        .attr("min", 2000)
        .attr("max", 2020)
        .attr("value", 2000)
        .attr("step", 1);

    // Display selected year
    const yearLabel = container.append("span")
        .attr("id", "selected-year")
        .style("margin-left", "10px")
        .text("2000");

    // Event listener for slider input
    d3.select("#year-slider").on("input", function () {
        const selectedYear = +this.value;
        yearLabel.text(selectedYear); // Update year label
        updateVisualization(selectedYear); // Trigger update function
    });
}

// Example Update Visualization Function
function updateVisualization(selectedYear) {
    // Filter data based on the selected year
    const yearData = data.filter(d => d.year === selectedYear);

    // Update the Visualization Here!!
    console.log("Updating visualization for year:", selectedYear, yearData);

    // For demonstration, updating some example text
    d3.select("#chart")
        .text(`Data for Year: ${selectedYear}`);
}

// Load data, Just example now: data hasn't been prepared
d3.csv("data.csv").then(data => {
    // Parse data if necessary
    data.forEach(d => {
        d.year = +d.year; // Convert year to number
        d.value = +d.value; // Example for numerical values
    });

    // Create time selector
    createTimeSelector(data, updateVisualization);

    // Initial render
    updateVisualization(2000); // Render for the first year
});
