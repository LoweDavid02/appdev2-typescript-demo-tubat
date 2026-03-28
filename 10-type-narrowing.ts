const portfolioElement = document.getElementById("lowe-portfolio");

function showDetails() {
    if (portfolioElement instanceof HTMLElement) {
        portfolioElement.innerText = "Lowe David Tubat: UI/UX Portfolio Section";
    } else {
        console.error("The portfolio container was not found in the DOM.");
    }
}

const validateInput = (val: string | number) => {
    if (typeof val === "string") {
        console.log("Processing designer notes...");
    } else {
        console.log("Processing project ID...");
    }
};