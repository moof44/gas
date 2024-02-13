import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'common-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type:InputType = 'text';
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change(val:any){
    this.onChange.emit(val);
  }

  get cssClass(){
    if(this.type === 'number') return 'align-right'
    return '';
  }

}

type InputType = 'text' | 'number' | 'email' | 'password' | 'date'
