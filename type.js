var CapoAbbigliamento = /** @class */ (function () {
    function CapoAbbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _disponibile, _saldo) {
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
    CapoAbbigliamento.prototype.getsaldocapo = function (saldo) {
        this.prezzoivaesclusa -= saldo;
    };
    CapoAbbigliamento.prototype.getacquistocapo = function () {
        var ivaPercentuale = 0.22;
        return this.prezzoivaesclusa * (1 + ivaPercentuale);
    };
    return CapoAbbigliamento;
}());
var getAbbigliamento = function () {
    var URL = "https://mocki.io/v1/513abb31-db68-4b50-93d3-865ea73f06aa";
    fetch(URL)
        .then(function (response) { return response.json(); })
        .then(function (vestiti) {
        vestiti
            .forEach(function (e) {
            var newCapo = new CapoAbbigliamento(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.disponibile, e.saldo);
            console.log(newCapo);
            console.log(newCapo.getsaldocapo(20));
        })
            .catch(function (error) {
            console.error("Errore durante la richiesta all'API:", error);
        });
    });
};
getAbbigliamento();
console;
