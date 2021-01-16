import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  private isHighlighted = false;
  constructor() { }

  @HostBinding('class.highlight')
  get shouldHighLight(){
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  onHoverIn() {
    this.isHighlighted = true;
  }
  @HostListener('mouseout')
  onHoverOut() {
    this.isHighlighted = false;

  }
}
