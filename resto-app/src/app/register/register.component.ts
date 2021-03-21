import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestoService} from '../resto.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister= new FormGroup({
    email: new FormControl(''),
    password :new FormControl(''),
    address:new FormControl('')
  })
  alert:boolean=false;

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }

  register(){
    this.alert=true;
      this.resto.postUser(this.formRegister.value).subscribe((result)=>{
        console.warn(result);
      })
  }

}
