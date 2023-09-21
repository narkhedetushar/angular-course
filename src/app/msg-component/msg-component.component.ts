import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-msg-component',
  templateUrl: './msg-component.component.html',
  styleUrls: ['./msg-component.component.scss']
})
export class MsgComponentComponent {
  @Input()
  message: any = {};
  @Input()
  index: number = -1;

  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>();

  onDelete() {
    this.delete.emit(this.index);
  }
}
