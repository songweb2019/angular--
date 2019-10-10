import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private productList = []  //商品列表
  private pno = 0     //当前加载的是第几页数据
  private hasMore = true   //还有更多数据可供加载吗

  //使用了 *ngIf的组件不再是静态组件
  @ViewChild('myInfiniteScroll',{ static:false })
  private myInfiniteScroll

  constructor(private nav:NavController,private http:HttpClient,private api:ApiService){}

  ngOnInit(){
    //组件初始化完成，立即加载第一页商品数据
    //this.pno++
    //this.loadData(this.pno) 
    this.loadData() 
  }

  goBack(){
    //回退到历史记录上一个页面
    this.nav.back()      
    //this.nav.navigateForward  前进
    //this.nav.navigateRoot     返回最开始页面
  }

  // loadData(pno){
  loadData(){
    this.pno++
    //异步请求服务器端商品数据
    this.http.get(this.api.productListApi+'?pno='+this.pno).subscribe((res:any)=>{
      //console.log(res);
      //加载更多数据，就是把数据拼接数据的底部
      this.productList = this.productList.concat(res.data)
      //console.log( this.productList );
      //隐藏“无限滚动”组件“加载中...”的提示，让其可以继续触发滚动事件
      this.myInfiniteScroll.complete()
      //判断还有更多可加载的吗？
      if(this.pno == res.pageCount){
        //console.log("没有更多数据了....")
        this.hasMore = false
      }
    }) 
  }

}

