import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CustomDirective } from './directive/custom.directive';
import { Custom2Directive } from './directive/custom-2.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CustomDirective,
    Custom2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
