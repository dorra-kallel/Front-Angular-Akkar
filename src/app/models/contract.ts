

export class Contract {
id!: number;
contractStatus!: boolean;
firstSignature!: string;
secondSignature!: string;
dateofSignature!: Date;
typeContract!: ContractType;
description!: string;
idClient!: number;
idRealEstate!: number;
}

export enum ContractType {
  SaleContract,
  RentalContract
}
