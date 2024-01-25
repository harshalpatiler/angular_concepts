import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectionComponent } from './projection/projection.component';
import { CustomdirectivesComponent } from './customdirectives/customdirectives.component';
import { BackgroundColorDirective } from './background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectionComponent,
    CustomdirectivesComponent,
    BackgroundColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
