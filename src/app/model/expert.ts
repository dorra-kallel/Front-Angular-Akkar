export class Expert {
  constructor(
    public id:number,
    public birthday:Date,
    public email:string,
    public firstname:string,
    public lastname:string,
    public password:string,
    public sexe:string,
    public cin: number,
    public description: string,
    public expertLocation: string,
    public expertPrice: number,
    public pictures: string,
    public status: boolean,
  ) {}
}