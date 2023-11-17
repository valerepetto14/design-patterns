interface OldPrinter {
  conexionPrinterWithUSB(): void;
  odlPrint(s: string): void;
}

class OldPrinter {
  conexionPrinterWithUSB() {
    console.log("Conexion establecida mediante cable USB");
  }

  oldPrint(s: string) {
    console.log("Imprimiendo: " + s);
  }
}

interface NewPrinter {
  conexionPrinterWithWIFI(): void;
  newPrint(s: string): void;
}

class NewPrinter {
  conexionPrinterWithWIFI() {
    console.log("Conexion establecida mediante WIFI");
  }

  newPrint(s: string) {
    console.log("Imprimiendo: " + s);
  }
}

//adapter

class AdapterPrinter implements NewPrinter {
  private oldPrinter: OldPrinter;

  constructor(oldPrinter: OldPrinter) {
    this.oldPrinter = oldPrinter;
  }

  conexionPrinterWithWIFI() {
    this.oldPrinter.conexionPrinterWithUSB();
  }

  newPrint(s: string) {
    this.oldPrinter.oldPrint(s);
  }
}

const oldPrinterInstance = new OldPrinter();

const adapterPrinter = new AdapterPrinter(oldPrinterInstance);
