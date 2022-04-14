import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  OrderCustomer,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, OrderCustomer
{
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string,
  ) {}
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, OrderCustomer
{
  constructor(public name: string, public cnpj: string) {}
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
