export class StoreCreateModel {
  public constructor(init?: Partial<StoreCreateModel>) {
    Object.assign(this, init);
  }
  name: string;
  cnpj: string;
  site: string;
  email: string;
}
