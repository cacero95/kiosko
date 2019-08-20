import { Component, OnInit } from '@angular/core';
import { NavParams, Platform } from '@ionic/angular';
import { Concursantes, Clase } from '../../models/structure';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {
  clase:Clase
  people:Concursantes;
  constructor(private params:NavParams,
    private platform:Platform) { }

  ngOnInit() {
    this.platform.ready().then(()=>{
      let title = this.params.get('title');
      if (title) {
        this.clase = {
          titulo:title,
          preguntas:[]
        }
      }
    })
  }
  registrar(mensaje:string) {
    // registra una clase nueva
    if (this.clase){
      this.clase.preguntas.push(mensaje);
    }
    else{

    }
  }
}
