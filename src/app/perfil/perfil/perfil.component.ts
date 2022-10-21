import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {

  copyright = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
