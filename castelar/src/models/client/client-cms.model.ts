export class ClientModel{
  public constructor(init?: Partial<ClientModel>){
    Object.assign(this, init);
  }
  id: number;
  name: string;
  cnpj: string;
  site: string;
  email: string;
}
