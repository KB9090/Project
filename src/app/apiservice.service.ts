import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const basecustomerUrl = "http://localhost:8080/customer"
const createcustomerUrl = "http://localhost:8080/customer/add"
const delcustomerUrl = "http://localhost:8080/customer/del"
const putcustomerUrl = "http://localhost:8080/customer/put"

const baseproductUrl = "http://localhost:8080/product"
const createproductUrl = "http://localhost:8080/product/add"
const delproductUrl = "http://localhost:8080/product/del"
const putproductUrl = "http://localhost:8080/product/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

//////////////////////////////////////////////////////////////////// CUSTOMER  /////////////////////////////////////////////////////////////////////////////////////

//  get all CUSTOMER
  getAllcustomer():Observable<any>{
    const url = "http://localhost:8080/allcustomer"
    return this._http.get<any>(url)
  }

// create CUSTOMER
  createcustomer(customer: any):Observable<any>{
    console.log(customer,'createapi=>');
    return this._http.post(createcustomerUrl, customer)
  }

// deleting CUSTOMER
  deletecustomer(id: any): Observable<any> {
    return this._http.delete(`${delcustomerUrl}/${id}`);
  }

// update CUSTOMER
  updatecustomer(id: any, customer: any): Observable<any> {
    return this._http.put(`${putcustomerUrl}/${id}`, customer);
  }

//get one CUSTOMER
  getOnecustomer(id:any):Observable<any>{
   return this._http.get(`${basecustomerUrl}/${id}`);
  }


//////////////////////////////////////////////////////////////////// PRODUCT /////////////////////////////////////////////////////////////////////////////////////

//  get all PRODUCT
  getAllproduct():Observable<any>{
    const url = "http://localhost:8080/allproduct"
    return this._http.get<any>(url)
  }

// create PRODUCT
  createproduct(product: any):Observable<any>{
    console.log(product,'createapi=>');
    return this._http.post(createproductUrl, product)
  }

// deleting PRODUCT
  deleteproduct(id: any): Observable<any> {
    return this._http.delete(`${delproductUrl}/${id}`);
  }

// update PRODUCT
  updateproduct(id: any, product: any): Observable<any> {
    return this._http.put(`${putproductUrl}/${id}`, product);
  }

//get one PRODUCT
  getOneproduct(id:any):Observable<any>{
    return this._http.get(`${baseproductUrl}/${id}`);
  }
}

