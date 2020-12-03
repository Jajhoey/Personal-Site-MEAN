import { Component } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mean-personal-site';
  constructor(public router: Router){
  }
}
