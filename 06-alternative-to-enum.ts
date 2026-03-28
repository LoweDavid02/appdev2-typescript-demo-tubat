type LoweCareerPath = "Web-Developer" | "Mobile-Developer" | "UI-UX-Designer";

let myCurrentFocus: LoweCareerPath = "Web-Developer";

function updateFocus(newFocus: LoweCareerPath) {
    console.log(`Lowe David Tubat is now focusing on: ${newFocus}`);
}

updateFocus("UI-UX-Designer");