import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from './api.service';

@Pipe({
  name: 'productDetail'
})
export class ProductDetailPipe implements PipeTransform {

  //声明依赖 需要使用server地址
  constructor(private api:ApiService){}

  transform(val){
    if(val){  //防止尚未获得数据时 val时undefined
      return val.replace(/src=\"img/g,'src="'+this.api.server+'img')
    }
  
  }

}
