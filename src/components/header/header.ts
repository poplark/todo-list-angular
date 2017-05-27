import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-header',
  styleUrls: ['./header.css'],
  templateUrl: './header.html'
})
export class Header implements OnChanges {
  content: String = '';

  @Input() done: Boolean;

  @Output() toggle = new EventEmitter();
  @Output() add = new EventEmitter<string>();

  ngOnChanges() {
    console.log("change", this.done);
  }

  constructor() {
  }

  handleToggle = () => {
    this.toggle.emit();
  }

  handleAdd = () => {
    // todo - focus input
    let value = this.content.trim();
    if(!value) return false;

    this.add.emit(value);
    this.content = '';
  }
}
