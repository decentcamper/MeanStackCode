import {AfterViewInit, Directive, ElementRef, HostListener, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appImageOverlay]'
})
export class ImageOverlayDirective implements AfterViewInit {
  private newDiv: any;


  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  /*  renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
//    this.renderer.addClass(this.el.nativeElement.querySelector('#imageHolder'), 'hovereffect');


  //  this.renderer.addClass(el.nativeElement, 'hovereffect');


    this.newDiv = this.renderer.selectRootElement(el.nativeElement);
    this.newDiv.insertAdjacentHTML('beforeend', `
            <div class="overlay">
                <h2>Effect 14</h2>
                        <p>
                          <a href="#">LINK HERE</a>
                        </p>
            </div>`);
*/
  }

  ngAfterViewInit(){
    let imageHodler = this.el.nativeElement.querySelector('#imageHolder');
    this.renderer.addClass(imageHodler, 'hovereffect');
    this.renderer.selectRootElement(imageHodler).insertAdjacentHTML('beforeend', `
            <div class="overlay">
                <h2>Effect 14</h2>
                        <p>
                          <a href="#">LINK HERE</a>
                        </p>
            </div>`);
  /*  this.newDiv = this.renderer.selectRootElement(this.el.nativeElement);

*/

  }


  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'block');
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'none');
  }
}
