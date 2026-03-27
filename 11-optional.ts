// 11-optional.ts - Experimentation
interface Gadget {
    brand: string;
    model: string;
    warrantyMonths?: number; // Optional property
}

const myPhone: Gadget = {
    brand: "Apple",
    model: "iPhone 15"
    // warrantyMonths is missing, but it's okay because of the '?'
};

const myLaptop: Gadget = {
    brand: "Dell",
    model: "XPS 13",
    warrantyMonths: 12 // Provided here
};

console.log(myPhone, myLaptop);