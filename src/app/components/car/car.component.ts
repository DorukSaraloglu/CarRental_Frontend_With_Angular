import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  carDetails:CarDetails[];
  dataLoaded = false;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    //this.getCars();
    this.getCarDetails();
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      console.log("data",response.data)
      this.cars=response.data
      this.dataLoaded=true
    })
  } 

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      console.log("datadetail",response.data)
      this.carDetails=response.data
      this.dataLoaded=true
    })
  }
}