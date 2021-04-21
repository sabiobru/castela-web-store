export class ProviderModel {
  public constructor(init?: Partial<ProviderModel>) {
    Object.assign(this, init);
  }
  id: number;
  name: string;
  cnpj: string;
  site: string;
  email: string;
}
