import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
 
  alert:boolean=false;

  addForm= new FormGroup({
    name:new FormControl(''),
    address:new FormControl('')
  })

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }

  addData(){
    //console.warn(this.addForm.value);
    this.alert=true;
    this.resto.postList(this.addForm.value).subscribe((result)=>{
      console.warn(result)
    })
    this.addForm.reset({});
  }

}
