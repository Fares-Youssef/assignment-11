import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() data:any;
  @Input() index:any;
  @Output() delete = new EventEmitter<number>();

  remove() {
    this.delete.emit(this.index);
  }
}
