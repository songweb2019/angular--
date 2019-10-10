import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Options } from 'selenium-webdriver';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {

  private uname = ''     //用户输入的登录账号
  private upwd = ''  //用户输入的登录密码

  //依赖于 http请求  api服务 警告框控制器
  constructor(private http:HttpClient,private api:ApiService,private alertController:AlertController){ 

  }

  ngOnInit(){}

  doLogin(){
    // console.log(this.uname,this.upwd)
    // 向服务器端发起异步的post请求
    let body = `uname=${this.uname}&upwd=${this.upwd}`
    //可用于修改请求头部的选项对象
    let Options = {  
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }  

    this.http.post(this.api.userLoginApi,body,Options).subscribe((res:any)=>{
      //console.log('获取异步请求数据')
      //console.log(res)
      if(res.code == 200){
        //alert('登陆成功')
        this.alertController.create({
          header:'登录成功',
          message:'欢迎回来：'+this.uname,
          buttons:['好的']
          
        }).then((dialog)=>{
          //对话框创建并挂载到DOM树完成 开始呈现它
          dialog.present()
        })
      }else{
        //alert('登陆失败')
        this.alertController.create({
          header:'登录失败',
          message:'请检查输入的用户名或密码',
          buttons:['好的']
        }).then((dialog)=>{
          //对话框创建并挂载到DOM树完成 开始呈现它
          dialog.present()
        })
      }
    })
  }

}
