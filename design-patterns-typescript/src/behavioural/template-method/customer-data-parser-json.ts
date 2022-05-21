import { promises } from 'fs';
import { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const customerData: CustomerData[] = [];

    const rawData = await promises.readFile(this.filePath);
    const data = JSON.parse(rawData.toString());

    data.forEach((customer: CustomerData) => {
      if (customer) {
        customerData.push(customer);
      }
    });

    return customerData;
  }

  hook(): void {
    console.log('HOOOK ESMAGA!!!');
  }
}
