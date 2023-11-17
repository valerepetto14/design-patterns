//patron singleton, evitamos generar multiples instancias de una clase
class ConexioDB {
  private static _instance: ConexioDB;
  private constructor() {
    // init
  }
  public static get getInstance() {
    if (!this._instance) {
      this._instance = new ConexioDB();
    }
    return this._instance;
  }
  query(sql: string) {
    console.log(sql);
  }
}

const db = ConexioDB.getInstance;
db.query("SELECT * FROM users");
