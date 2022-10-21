import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  copyright = new Date().getFullYear(); 
  
  constructor() { }

  ngOnInit(): void {
  }

}
