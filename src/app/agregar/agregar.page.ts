import { Component, OnInit } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  notas: any = {name:'',titulo:'',descripcion:''};
  constructor(public database: DatabaseService ) { }

  ngOnInit() {
  }
  agreganota(){
    this.database.agregarNotas(this.notas).then(res=>{
    }).catch(e=>{
      console.log(e);
    });
  }

}
