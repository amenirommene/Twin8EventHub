export interface Event {
  id : number;
  title : string;
  description: string;
  date : Date;
  place:string;
  imageUrl : string;
  price: number;
  nbLikes: number;
  nbPlaces: number;
  organizerId : number;
}
