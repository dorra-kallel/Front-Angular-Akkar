import { Furniture } from "./furniture";

export class Command {
    commandId: any;
    quantity: any;
    commandDate: any;
    totalPrice: any;
    payementStatus: any;
    furnitures: Furniture[]=[];
}