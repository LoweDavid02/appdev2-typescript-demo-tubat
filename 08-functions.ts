function introduceLowe(name: string, role: string): string {
    return `Hello! I am ${name}, an aspiring ${role}.`;
}

const intro = introduceLowe("Lowe David Tubat", "Mobile Application Developer");
console.log(intro);

const addSkill = (skills: string[], newSkill: string): number => {
    return skills.push(newSkill);
};