export class ProviderCreateModel {
  public constructor(init?: Partial<ProviderCreateModel>) {
    Object.assign(this, init);
  }
  name: string;
  cnpj: string;
  site: string;
  email: string;
}
