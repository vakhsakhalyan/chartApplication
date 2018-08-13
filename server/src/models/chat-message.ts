import {Message} from "./message";
import {User} from "./user";

export class ChartMessage extends  Message {
    constructor(user: User, text: string) {
        super(user, text);
    }
}