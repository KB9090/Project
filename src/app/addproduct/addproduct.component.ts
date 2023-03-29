import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit
{
constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOneproduct(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.productForm.patchValue({

        food_name:res.data[0].food_name,
        food_price:res.data[0].food_price,
        food_img:res.data[0].food_img	,

      });
    });
  }
  }

  productForm = new FormGroup({
    'food_name':new FormControl('',Validators.required),
    'food_price':new FormControl('',Validators.required),
    'food_img':new FormControl('',Validators.required),
  });

//// to create a new PRODUCT
  productSubmit(){
    if(this.productForm.valid){
      console.log(this.productForm.value);
      this.service.createproduct( this.productForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.productForm.reset();
        this.successmsg = 'Add Product Profile Successful';
      });

    }
    else{
      this.errormsg = 'Add Product Profile Unsuccessful';
    }

  }


////// to update a PRODUCT
productUpdate()
  {
  console.log(this.productForm.value,'updatedform');

    if(this.productForm.valid)
      {
        this.service.updateproduct(this.productForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,'resupdated');
        this.successmsg = res.message; })
      }
    else
      {
        this.errormsg = 'invalid';
      }
  }
}
