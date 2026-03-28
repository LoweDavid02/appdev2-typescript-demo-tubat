interface LoweProject {
    title: string;
    liveUrl?: string;
    tags?: string[];
}

const myNewApp: LoweProject = {
    title: "Mobile Health Tracker"
};

const projectLink = myNewApp.liveUrl?.toLowerCase() ?? "Link not yet available";

console.log(`Project: ${myNewApp.title} | Link: ${projectLink}`);