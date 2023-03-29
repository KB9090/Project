import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})

export class UpdatecustomerComponent implements OnInit {

  customerForm = new FormGroup({
    'customerID':new FormControl('',Validators.required),
    'customerName':new FormControl('',Validators.required),
    'customerEmail':new FormControl('',Validators.required),
    'customerPhone':new FormControl('',Validators.required),
    'customerIntake':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOnecustomer(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.customerForm.patchValue({
          customerID:res.data[0].customerID,
            customerName:res.data[0].customerName,
            customerEmail:res.data[0].customerEmail,
            customerPhone:res.data[0].customerPhone,
            customerIntake:res.data[0].customerIntake

        });
      });
  }
//to update a customer
customerUpdate()
{
  console.log(this.customerForm.value);
    this.service.updatecustomer(this.router.snapshot.params['id'], this.customerForm.value).subscribe((result:any)=>{

    this.customerForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}
