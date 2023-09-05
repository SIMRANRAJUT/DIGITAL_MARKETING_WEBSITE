// Sample data for searching (you can replace it with your data)
const data = [
    "This is an example of a search engine.",
    "Search engines are useful tools on the internet.",
    "You can create your own search engine using JavaScript.",
    "HTML, CSS, and JavaScript are essential for web development.",
    "Learning web development is a great way to start a career.",
    "Web development includes frontend and backend development.",
];

const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", handleSearch);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm));
    displayResults(filteredData);
}

function displayResults(results) {
    resultsList.innerHTML = "";
    if (results.length === 0) {
        resultsList.innerHTML = "<li>No results found.</li>";
    } else {
        results.forEach(result => {
            const listItem = document.createElement("li");
            listItem.textContent = result;
            resultsList.appendChild(listItem);
        });
    }
}