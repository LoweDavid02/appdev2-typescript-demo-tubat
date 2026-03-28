let designFeedback: unknown = "The layout looks modern and clean!";

if (typeof designFeedback === "string") {
    console.log(`Lowe's Feedback: ${designFeedback.trim()}`);
}

function logLoweActivity(action: string): void {
    console.log(`Lowe David Tubat performed: ${action}`);
}

function handleCriticalError(msg: string): never {
    throw new Error(`System halt: ${msg}`);
}