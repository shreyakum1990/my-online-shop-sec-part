import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private login : any = {};
  constructor(private data : MessageService, private rest : RestService) { }

  ngOnInit() {
  }

}
