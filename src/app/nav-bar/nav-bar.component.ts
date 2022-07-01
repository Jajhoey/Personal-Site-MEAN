import { Component, OnInit} from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../app.component.css']
})

export class NavBarComponent implements OnInit {
  constructor(public router: Router){
  }

  ngOnInit(): void {
  }


}
