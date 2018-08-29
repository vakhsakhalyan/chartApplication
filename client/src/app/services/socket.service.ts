import {Injectable} from "@angular/core";


import * as io from 'socket.io-client';
import {Message} from "../model/message";
const URL = 'http://localhost:8080';

@Injectable()
export class ChatService {
  private socket;
  public initSocket(): void {
    this.socket = io(URL);
  }

  public sendMessage(): Message {

    return null;

  }



}

