import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentCarouselComponent } from './Component/component-carousel/component-carousel.component';
import { NavMenuComponent } from './Component/nav-menu/nav-menu.component';
import { ModalsComponent } from './Component/modals/modals.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentCarouselComponent,
    NavMenuComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
