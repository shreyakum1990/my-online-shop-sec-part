import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MessageService } from '../services/message.service';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
=======
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { MessageService } from '../services/message.service';
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private register: any = {};
  private isSellerStt: boolean = false;
<<<<<<< HEAD
  constructor(private route : Router,private rest: RestService, private data: MessageService) { }

  setStatus(stt) {
    this.isSellerStt = stt;
    console.log('Type o9f status is ', this.isSellerStt)
=======
  constructor(private route: Router, private rest: RestService, private data: MessageService) { }

  setStatus(stt) {
    this.isSellerStt = stt;
    console.log('Type of status is', this.isSellerStt)
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  goLogin(){
=======
  goLogin() {
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f
    this.route.navigate(['/'])
  }

  async doregister() {
    if (this.validate()) {
      var rawData = this.register;
      delete rawData.repassword;
      rawData.isSeller = this.isSellerStt;
      var data = await this.rest.post("http://localhost:3000/api/account/users", rawData)
<<<<<<< HEAD
      
     console.log('main status is ',data)
=======
      data = data.json();
      console.log('main status is', data)
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f
      if (data['success']) {
        this.data.success(data['message'])
        this.register = {};
      }
<<<<<<< HEAD
      else{
=======
      else {
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f
        this.data.error(data['message'])
      }
    }
  }

  validate() {
    if (this.register.name != undefined) {
<<<<<<< HEAD

      if (this.register.email != undefined) {

        if (this.register.password) {

          if (this.register.password == this.register.repassword) {
            return true;
          } else {
            this.data.error("Passowrd should equal to re password");
          }

        }
        else {
          this.data.error("Password required");
        }

      }
      else {
        this.data.error("Email required !")
      }

    }
    else {
      this.data.error("Name required !");

    }
  }


}
=======
      if (this.register.email != undefined) {
        if(this.register.password){
          if(this.register.password == this.register.repassword){
            return true;
          }else{
            this.data.error("Password should equal to re password");
          }
        }
        else{
          this.data.error("Password required !");
        }
      }
      else{
        this.data.error("Email required !")
      }
    }
    else{
      this.data.error("Name required !");
    }
  }

}
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f
