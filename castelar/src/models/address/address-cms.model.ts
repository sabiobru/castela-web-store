export class AddressModel {
  public constructor(init?: Partial<AddressModel>) {
    Object.assign(this, init);
  }
  id: number;
  cep: string;
  address: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
  country: string;
}
