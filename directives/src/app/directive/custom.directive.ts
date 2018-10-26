import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
	selector: "[appCustomDirective]"
})

export class CustomDirective implements OnInit {
	constructor(private eleRef: ElementRef) {
	}

	ngOnInit() {
		this.eleRef.nativeElement.style.backgroundColor = "red"
	}
}