export default class Comment {
    userName: string
    text: string

    constructor(userName: string, text: string) {
        this.userName = userName;
        this.text = text;
    }
}