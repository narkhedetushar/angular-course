import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init() {
    this.insert({
      name: 'Tushar',
      email: 'tushar@gmail.com',
      message: 'Hello Tushar'
    });
    this.insert({
      name: 'Tushar 1',
      email: 'tushar1@gmail.com',
      message: 'Hello Tushar1'
    });
    this.insert({
      name: 'Tushar 2',
      email: 'tushar2@gmail.com',
      message: 'Hello Tushar2'
    });
    this.insert({
      name: 'Tushar 3',
      email: 'tushar3@gmail.com',
      message: 'Hello Tushar3'
    });
  }

  insert(message: {name: string, email: string, message: string}) : void {
    this.messages.push(message);
  }

  getAllMessages() : any[]  {
    return this.messages;
  }

  deleteMessage(index: number) : void {
    this.messages.splice(index, 1);
  };
}
