import { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  protected abstract parseData(): Promise<CustomerData[]>;

  protected hook(): void {}

  readonly fixCustomerData = async (): Promise<void> => {
    this.customerData = await this.parseData();
    this.hook();
    this.customerData = this.fixCpf();
  };

  private fixCpf(): CustomerData[] {
    return this.customerData.map((customer) => ({
      ...customer,
      cpf: customer.cpf.replace(/\D/g, ''),
    }));
  }
}
