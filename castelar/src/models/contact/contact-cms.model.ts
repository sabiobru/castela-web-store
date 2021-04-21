export class ContactModel {
  public constructor(init?: Partial<ContactModel>) {
    Object.assign(this, init);
  }
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  typePhone: string;
  phoneLine: string;
}
