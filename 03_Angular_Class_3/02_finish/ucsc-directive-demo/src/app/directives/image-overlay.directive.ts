import {Directive, ElementRef, HostListener,  Renderer2} from '@angular/core';

@Directive({
  selector: '[appImageOverlay]'
})
export class ImageOverlayDirective {
  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('#detailsList');
    this.renderer.setStyle(part, 'display', 'block');
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('#detailsList');
    this.renderer.setStyle(part, 'display', 'none');
  }
}


