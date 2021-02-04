import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './libs/first-component/first-component.component';
import { SecondComponentComponent } from './libs/second-component/second-component.component';
import { ThirdComponentComponent } from './libs/third-component/third-component.component';
import { FourthComponentComponent } from './libs/fourth-component/fourth-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    FourthComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
