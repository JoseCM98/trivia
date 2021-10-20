import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarPage } from '../agregar/agregar.page';
import { EditarPage } from '../editar/editar.page';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
notas: any =[];
  constructor(public modalController: ModalController,public sqlite: SQLite,public database: DatabaseService) {
    this.database.createDatabase();
    this.getNotas();
  }
getItems($event){
const valor = $event.target.value;
console.log('el valor es: ', valor);
}
async editar(item){

    const modal = await this.modalController.create({
      component: EditarPage,
      componentProps: { value: 123 }
    });
     await modal.present();
}
eliminar(item){
  console.log('eliminar');
}
async agregar(){

  const modal = await this.modalController.create({
    component: AgregarPage,
    componentProps: { value: 123 }
  });
   await modal.present();
}
getNotas(){
this.database.getNotas().then((data)=>{
  this.notas = data;
}).catch(error=>{
  console.log(error);
});
}
}
