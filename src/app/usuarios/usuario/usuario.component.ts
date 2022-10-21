import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {

  copyright = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
