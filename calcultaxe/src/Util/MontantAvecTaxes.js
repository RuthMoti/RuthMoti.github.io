import { calculTPS, calculTVQ } from './Mathematique';

export class MontantAvecTaxes {
    constructor(annee, montantSansTaxe) {
        this.annee = annee;
        this.montantSansTaxe = montantSansTaxe;
        this.tps = calculTPS(this.annee, this.montantSansTaxe);
        this.tvq = calculTVQ(this.annee,this.montantSansTaxe);
        console.log(montantSansTaxe);
        console.log();
        console.log(this.tps);
        console.log(this.tvq);
        this.montantAvecTaxe = Number(montantSansTaxe) + (this.tps) + (this.tvq);
    }



    getMontantSansTaxe() {
        return this.montantSansTaxe;
    }



    getTPS() {
        return this.tps;
    }



    getTVQ() {
        return this.tvq;
    }



    getMontantAvecTaxe() {
        return this.montantAvecTaxe;
    }



    getYear() {
        return this.annee;
    }
}

//export default MontantAvecTaxes;