import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'common-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text:string = 'Save';
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.onClick.emit();
  }

}
