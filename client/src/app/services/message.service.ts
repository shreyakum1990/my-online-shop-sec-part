<<<<<<< HEAD


export class MessageService{

    message : string;
    messageType : string;
    
    success(data){
        this.message = data;
        this.messageType = "success";
    }
    
    error(data){
        this.message = data;
        this.messageType = "danger";
    }
    
    warning(data){
        this.message = data;
        this.messageType = "warning";
    }
    
    
    
    }
=======
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message : string;
  messageType : string;

  constructor() { }

  success(data){
    this.message = data;
    this.messageType = "success";
  }

  error(data){
    this.message = data;
    this.messageType = "danger";
  }

  warning(data){
    this.message = data;
    this.messageType = "warning";
  }
}
>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f
