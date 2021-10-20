import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public network: Network) {}
  ionViewDidEnter(){
    const desconecta = this.network.onDisconnect().subscribe(()=>{
      console.log('Estamos Desconectados');
    });
    const conecta = this.network.onConnect().subscribe(()=>{
      console.log('Estamos Conectados');
      setTimeout(()=>{
        if(this.network.type === 'wifi'){
          console.log('Estamos Conectados a Wifi');
        }
        if(this.network.type === 'ethernet'){
          console.log('Estamos Conectados a Ethernet');
        }
        if(this.network.type === '3g'){
          console.log('Estamos Conectados a 3g');
        }
      }, 3000);
    });
  }
}
