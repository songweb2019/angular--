import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  private product = {}  //商品数据 

  @ViewChild('indexSides',{static:true})
  private dSlides    //首页轮播广告组件视图子元素

  constructor(private route:ActivatedRoute,private http:HttpClient,private api:ApiService,private nav:NavController) { }

  goBack(){
    this.nav.back() 
  }

  ngOnInit() {
    //组件初始化完成后
    //1.读取路透参数pid
    this.route.params.subscribe((data)=>{
      let pid = data.pid  //路由地址中的参数：商品编号
      //2.根据pid异步请求服务器端商品数据
      this.http.get(this.api.productDetailsApi+'?lid='+pid).subscribe((res:any)=>{
        // console.log('一部获取到商品详情数据')
        // console.log(res)
        this.product = res.details
        console.log(this.product)
        //轮播组件开始自动播放
        this.dSlides.startAutoplay()
      })
    })
  }

}
