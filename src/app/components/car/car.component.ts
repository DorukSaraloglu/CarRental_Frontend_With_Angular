import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { BrandService } from 'src/app/services/brand.service';
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

  constructor(
    private carService:CarService,
    private brandService:BrandService,
    private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    //this.getCars();
    //this.getCarDetails();
    this.activatedRoute.params.subscribe(params=>{
      console.log("ngOnInit",params);
      if(params["brandId"]){
          console.log("if")
        this.getCarsByBrand(params["brandId"])
      }else{
        console.log("else")

        this.getCarDetails()
      }
    })
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
      this.carDetails=response.data
      this.dataLoaded=true
    })
  }

  getCarsByBrand(id:number) {
    console.log("ts",id);
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })   
  }
}