export class ClientCreateModel {
  public constructor(init?: Partial<ClientCreateModel>) {
    Object.assign(this, init);
  }
  name: string;
  cnpj: string;
  site: string;
  email: string;
}
