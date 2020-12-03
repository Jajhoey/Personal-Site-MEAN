import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AboutSkillsComponent } from './about-skills/about-skills.component';
import { AboutCoursesComponent } from './about-courses/about-courses.component';
import { AboutEduComponent } from './about-edu/about-edu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [routingComponents],
  bootstrap: [AppComponent]
})
export class AppModule { }
