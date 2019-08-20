import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { RegistrarComponent } from '../../components/registrar/registrar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private pop:PopoverController,
    private alert:AlertController) { }

  ngOnInit() {
  }
  async add(){
    let alert = await this.alert.create({
      header:'Que categoria?',
      mode:'ios',
      animated:true,
      inputs:[
        {
          type:'text',
          placeholder:'Nombre',
          name:'titulo'
        }
      ],
      buttons:[
      {
        text:'Cancelar'
      },
      {
        text:'Confirmar',
        handler:(value)=>{
          this.pop_create(value.titulo);
        }
      }
    ]
    });
    alert.present();
  }

  async pop_create(title:string){
    let pop = await this.pop.create({
      component:RegistrarComponent,
      componentProps:{
        title
      }
    });
    pop.present()
  }
  async agregar_personas() {

  }
}
