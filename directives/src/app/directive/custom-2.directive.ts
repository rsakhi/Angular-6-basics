import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Directive({
  selector: '[appCustom2]'
})
export class Custom2Directive implements OnInit{
  @Input() defaultBgColor: string;
  @Input() highlightColor: string;
  constructor(private eleRef: ElementRef, private render: Renderer2) { }
  
  @HostBinding('style.backgroundColor') bgcolor: string = this.defaultBgColor;

  ngOnInit(){
    // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseOver(){
    // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    this.bgcolor = this.defaultBgColor
  }

  @HostListener('mouseleave') mouseLeave(){
    // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
    this.bgcolor = this.highlightColor;
  }


}
