import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserCenterComponent } from './user-center/user-center.component';

import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailPipe } from './product-detail.pipe'
import { FormsModule } from '@angular/forms';

//创建路由词典
const routes=[
  {path:'',redirectTo:'index',pathMatch:'full'}, // index 重定向
  {path:'index',component:IndexComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-detail/:pid',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'user-center',component:UserCenterComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'**',component:NotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CartComponent,
    IndexComponent,
    NotFoundComponent,
    ProductDetailComponent,
    ProductListComponent,
    UserLoginComponent,
    UserCenterComponent,
    ProductDetailPipe
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    RouterModule.forRoot(routes),  //注册路由词典
    HttpClientModule,  //HttpClient 服务所在模块
    FormsModule,  // ngModel 指令所在模块
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
