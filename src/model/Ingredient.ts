export default class Ingredient {
    quantity: number
    measurement: string //TODO make enum
    name: string // TODO make enum


    constructor(quantity: number, measurement: string, name: string) {
        this.quantity = quantity;
        this.measurement = measurement;
        this.name = name;
    }
}
