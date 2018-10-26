import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustom2]'
})
export class Custom2Directive implements OnInit{

  constructor(private eleRef: ElementRef, private render: Renderer2) { }
  @HostBinding('style.backgroundColor') bgcolor: string;

  ngOnInit(){
    this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseOver(){
    // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    this.bgcolor = 'blue'
  }

  @HostListener('mouseleave') mouseLeave(){
    // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
    this.bgcolor = 'transparent'
  }


}
