import {Directive, HostListener, HostBinding, ElementRef, Renderer2} from '@angular/core';
@Directive({
  selector:'[appRainbow]'
})
export class RainbowDirective{
    constructor(private el: ElementRef, private renderer: Renderer2) {
        // this.ChangeBgColor('red');
    }
    possibleColor=['red', 'yellow', 'green', 'blue','pink', 'black'];
    colorIndex = Math.floor(Math.random() * this.possibleColor.length);
    @HostBinding('style.border') border: string;
    @HostListener('mouseover') onMouseOver() {
      this.border = '5px solid green';
        this.ChangeBgColor(this.possibleColor[this.colorIndex]);
    }
 
    @HostListener('click') onClick() {
        window.alert('Host Element Clicked value');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.ChangeBgColor(this.possibleColor[this.colorIndex]);
    }
 
    ChangeBgColor(color: string) {
 
        this.renderer.setStyle(this.el.nativeElement, 'color', color);
    }
}