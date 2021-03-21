import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestoService} from '../resto.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  updateForm= new FormGroup({
    name:new FormControl(''),
    address:new FormControl('')
  })

  alert:boolean=false;

  constructor(private router:ActivatedRoute, private resto:RestoService) { }

  ngOnInit(): void {
    //this.router.snapshot.params.id;
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.updateForm= new FormGroup({
        name:new FormControl(result['name']),
        address:new FormControl(result['address'])
      })
    })
  }

  update(){
    this.alert=true;
    this.resto.updateCurData(this.router.snapshot.params.id,this.updateForm.value).subscribe((result)=>{
      console.warn(result);
    })
    this.updateForm.reset({});
  }

}
