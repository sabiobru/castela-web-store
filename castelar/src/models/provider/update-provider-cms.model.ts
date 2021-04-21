export class ProviderUpdateModel {
  public constructor(init?: Partial<ProviderUpdateModel>) {
    Object.assign(this, init);
  }
  id: number;
  name: string;
  cnpj: string;
  site: string;
  email: string;
}
