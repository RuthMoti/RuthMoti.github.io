import React, { Component } from 'react';
import { MontantAvecTaxes } from '../Util/MontantAvecTaxes';

class TaxeQC extends Component {
    state = {
        valueMontant: 0,
        valueTps: 0,
        valueTvq: 0,
        valueTotal: 0,
        annee: [
            '2006',
            '2007',
            '2008',
            '2010',
            '2011',
            '2012',
            '2013',
            '1994',
            '1997',
        ],
        anneeChoisi: '2013',
    };

    montantEntree = (e) => {
        this.setState({ valueMontant: e.target.value });

        console.log(e.target.value);
    };

    // Entrer le montant
    //Recuperer le montant
    //Quand je clique sur l'année
    /**Recuperer l'année
           - creer un un objet Montant taxe
               getMontantSansTaxe()
              getTPS()
              getTVQ()
              getMontantAvecTaxe()
              getYear()
          * */

    anneeHadle = (e) => {
        this.setState({ annee: e.target.value });
    };
    /*
        handleYearChange = (e) => {
          const selectedYear = e.target.value;
          this.setState({ selectedYear }, this.anneResultat);
        };
      */
    anneResultat = () => {
        const { anneeChoisi, valueMontant } = this.state;
        const m = new MontantAvecTaxes(
            anneeChoisi,
            valueMontant,
        );

        const tps = isNaN(m.getTPS()) ? 0 : m.getTPS();
        const tvq = isNaN(m.getTVQ()) ? 0 : m.getTVQ();
       const total = isNaN(m.getMontantAvecTaxe()) ? 0 : m.getMontantAvecTaxe();
 

        this.setState({
            valueTps: tps,
            valueTvq: tvq,
            valueTotal: total,
        });
    };

    handleYearChange = (e) => {
        const selectedYear = e.target.value;
        this.setState({ anneeChoisi: selectedYear }, this.anneResultat);
    };

    render() {
        return (


            <div>

                <fieldset>
                    <legend> Choisissez l 'année du calcul:</legend>
                    <select onChange={this.handleYearChange} value={this.state.anneeChoisi} > {
                        this.state.annee.map((year, index) => {
                            return <option key={index}> {year}</option>;
                        })
                    }  </select>
                    <form>
                        <h3> Choisissez l 'année du calcul:</h3>
                        <h3> Entrer le montant avant taxe: </h3>
                        <input type='number' onChange={this.montantEntree} value={this.state.valueMontant} />
                        <h3> TPS </h3><input type='text' className='form-control result-textbox' value={this.state.valueTps} readOnly />
                        <h3 > TVQ </h3> <input type='text' className='form-control result-textbox' value={this.state.valueTvq} readOnly />
                        <h3 > Montant Total </h3> <input type='text' className='form-control result-textbox' value={this.state.valueTotal} readOnly />
                    </form> </fieldset> </div>
        );
    }
}

export default TaxeQC;