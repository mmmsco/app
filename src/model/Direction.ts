export default class Direction {
    stepNumber: number
    text: string

    constructor(stepNumber: number, description: string) {
        this.stepNumber = stepNumber;
        this.text = description;
    }
}
