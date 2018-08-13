import {User} from "./user";

export class Message {
    constructor(private user: User, private text: string ) {}
}