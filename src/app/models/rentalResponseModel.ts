import { Rental } from "./rental";
import { ResponseModel } from "./ResponseModel";

extends interface RentalResponseModel extends ResponseModel{
    data:Rental[]
}