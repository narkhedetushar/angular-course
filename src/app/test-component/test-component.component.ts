import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor( private msgService: MessagesService) {
    this.messages = this.msgService.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.name, this.email, this.message);
    this.msgService.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  deleteMessage(index: number) {
    this.msgService.deleteMessage(index);
  };

}
