type VotationOption = {
  option: string;
  votation: number;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].votation++;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    this.votations.forEach((v: Votation) => {
      console.log(v.details);
      console.log();
      v.votationOptions.forEach((o: VotationOption) =>
        console.log(o.option, ':', o.votation),
      );
      console.log('########');
      console.log();
    });
  }
}

const votation1 = new Votation('Qual sua LP preferida?');
votation1.addVotationOption({ option: 'Python', votation: 0 });
votation1.addVotationOption({ option: 'Javascript', votation: 0 });
votation1.addVotationOption({ option: 'C#', votation: 0 });

const votation2 = new Votation('Qual sua cor preferida?');
votation2.addVotationOption({ option: 'Vermelho', votation: 0 });
votation2.addVotationOption({ option: 'Preto', votation: 0 });
votation2.addVotationOption({ option: 'Azul', votation: 0 });

const votationApp = new VotationApp();

votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votation1.vote(0);

votationApp.showVotations();
