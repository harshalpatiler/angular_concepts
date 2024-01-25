import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
})
export class BackgroundColorDirective implements OnInit {
  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.ele.nativeElement.style.backgroundColor = 'grey';
    this.ele.nativeElement.style.color = 'white';
   // this.renderer.setStyle(this.ele.nativeElement, 'textDecoration', 'underline');
    this.renderer.setStyle(this.ele.nativeElement, 'color', 'aqua');
    this.renderer.setStyle(this.ele.nativeElement, 'padding', '12px')
  }
}
