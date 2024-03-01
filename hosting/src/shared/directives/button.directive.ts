import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button',
})
export class ButtonDirective {

  constructor(
    private _elem : ElementRef,
    private _renderer : Renderer2
  ){
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    // disable elem in 1 second
    this._renderer.setAttribute(this._elem.nativeElement, 'disabled', 'true');
    setTimeout(() => {
      this._renderer.removeAttribute(this._elem.nativeElement, 'disabled');
    }, 1000);
  } 

}
