import { promises } from 'fs';
import { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data-parser';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseData(): Promise<CustomerData[]> {
    const customerData: CustomerData[] = [];

    const rawData = await promises.readFile(this.filePath);
    const data = rawData.toString();
    const lines = data.split('\n');
    lines.forEach((line) => {
      if (line) {
        const [name, age, cpf] = line.split(';');
        customerData.push({ name, age, cpf });
      }
    });

    return customerData;
  }
}
