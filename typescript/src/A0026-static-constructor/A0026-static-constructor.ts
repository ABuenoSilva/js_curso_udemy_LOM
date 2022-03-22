//Singleton
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static getDatabase(host: string, user: string, password: string) {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
}

const database = Database.getDatabase('localhost', 'root', '123456');
database.connect();
