import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {

  copyright = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
