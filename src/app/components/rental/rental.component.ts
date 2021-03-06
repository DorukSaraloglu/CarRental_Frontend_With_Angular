import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetails } from 'src/app/models/rentalDetails';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDetails:RentalDetails[];
  rentals:Rental[]=[];
  dataLoaded = false;

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    //this.getRentals();
    this.getRentalDetails();
  }
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data,
      this.dataLoaded=true
    })
  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentalDetails=response.data,
    console.log("rental",response.data);

      this.dataLoaded=true
    })
  }
}
