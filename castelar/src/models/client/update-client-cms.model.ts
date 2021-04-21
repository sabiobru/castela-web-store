export class ClientUpdateModel {
  public constructor(init?: Partial<ClientUpdateModel>) {
    Object.assign(this, init);
  }
  id: number;
  name: string;
  cnpj: string;
  site: string;
  email: string;
}
