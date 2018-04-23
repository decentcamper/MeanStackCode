import {AfterViewInit, Directive, ElementRef, HostListener, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appImageOverlay]'
})
export class ImageOverlayDirective {
  private newDiv: any;


  constructor(private el: ElementRef,
              private renderer: Renderer2) {
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

