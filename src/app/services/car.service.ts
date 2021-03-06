import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44303/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetails():Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarsByBrand(id:number):Observable<ListResponseModel<CarDetails>> {
    console.log("service",id)
    let newPath = this.apiUrl + "cars/getbybrand?id="+id
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
}
