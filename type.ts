class CapoAbbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: string;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  disponibile: string;
  saldo: number;
  constructor(
    _id: number,
    _codprod: number,
    _collezione: string,
    _capo: string,
    _modello: string,
    _quantita: number,
    _colore: string,
    _prezzoivaesclusa: number,
    _disponibile: string,
    _saldo: number
  ) {
    this.id = _id;
    this.codprod = _codprod;
    this.collezione = _collezione;
    this.capo = _capo;
    this.modello = _modello;
    this.quantita = _quantita;
    this.colore = _colore;
    this.prezzoivaesclusa = _prezzoivaesclusa;
    this.disponibile = _disponibile;
    this.saldo = _saldo;
  }

  getsaldocapo(saldo: number) {
    this.prezzoivaesclusa -= saldo;
  }

  getacquistocapo() {
    const ivaPercentuale = 0.22;
    return this.prezzoivaesclusa * (1 + ivaPercentuale);
  }
}

const getAbbigliamento = function () {
  const URL = "https://mocki.io/v1/513abb31-db68-4b50-93d3-865ea73f06aa";
  fetch(URL)
    .then((response) => response.json())
    .then((vestiti: any) => {
      vestiti
        .forEach((e: any) => {
          let newCapo: any = new CapoAbbigliamento(
            e.id,
            e.codprod,
            e.collezione,
            e.capo,
            e.modello,
            e.quantita,
            e.colore,
            e.prezzoivaesclusa,

            e.disponibile,
            e.saldo
          );
          console.log(newCapo);
          console.log(newCapo.getsaldocapo(20));
        })
        .catch((error: string) => {
          console.error("Errore durante la richiesta all'API:", error);
        });
    });
};

getAbbigliamento();
console;
