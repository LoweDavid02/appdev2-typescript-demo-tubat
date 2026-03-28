type Aspiration = {
    role: string;
    description: string;
};

type LoweProfile = {
    readonly name: string;
    aspirations: Aspiration[];
};

const loweTubat: LoweProfile = {
    name: "Lowe David Tubat",
    aspirations: [
        { role: "Web Dev", description: "Building responsive web apps" },
        { role: "UI/UX", description: "Designing intuitive user interfaces" }
    ]
};