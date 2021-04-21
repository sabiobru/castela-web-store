export class StoreModel {
  public constructor(init?: Partial<StoreModel>) {
    Object.assign(this, init);
  }
  id: number;
  name: string;
  cnpj: string;
  site: string;
  email: string;
}
