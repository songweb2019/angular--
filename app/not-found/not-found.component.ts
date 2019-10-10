import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {}

  goBack(){
    //回退到历史记录上一个页面
    this.nav.back()      
    //this.nav.navigateForward  前进
    //this.nav.navigateRoot     //返回最开始页面
  }
}
