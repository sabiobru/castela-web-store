export class StoreUpdateModel {
  public constructor(init?: Partial<StoreUpdateModel>) {
    Object.assign(this, init);
  }
  id: number;
  name: string;
  cnpj: string;
  site: string;
  email: string;
}
