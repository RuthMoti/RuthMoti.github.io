function calculTPS(anne, montant) {
  let  tps = 0;

    if (anne >= 2008) {
        tps = montant * 0.05;
    } else if (anne == 2007) {
        tps = montant * 0.06;
    } else if (anne == 2006) {
        tps = montant * 0.07;
    }
    return tps;
}



function calculTVQ(anne, montant) {
    let tvq = 0;

    if (anne == 2010) {
        tvq = montant * 0.075;
    } else if (anne == "2011") {
        tvq = montant * 0.085;
    } else if (anne == "2012") {
        tvq = montant * 0.095;
    } else if (anne == "2013") {
        tvq = montant * 0.00975;
    } else if (anne <= 1994) {
        tvq = montant * 0.08;
    } else if (anne == "1997") {
        tvq = montant * 0.065;
    }
    return tvq;
}


export {
    calculTPS,
    calculTVQ
}