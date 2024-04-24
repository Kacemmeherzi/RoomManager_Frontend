import { Room } from "./room.model";

export interface Reservation {
    _id : string  ;
    owner : string ;
    room : Room ;
    started : Date ;
    ended :     Date;
    duration : number   ;
    validation : boolean ; 

}