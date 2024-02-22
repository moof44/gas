import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'common-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ],
  host: {
    '(blur)': '_onTouched()',
    '(change)': '_onChange($event.target.value)'
   }
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type:InputType = 'text';
  @Output() onChange = new EventEmitter();

  inputControl = new FormControl();
  _onTouched: any = () => {};
   _onChange: any = () => {};
  

  constructor() { }
  writeValue(obj: any): void {
    this.inputControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled){
      this.inputControl.disable();
    } else {
      this.inputControl.enable();
    }
  }

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
