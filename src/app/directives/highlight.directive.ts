import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() highlightColor: string | undefined;
  @Input() defaultColor: string | undefined;
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    //this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultColor);
  }
}

