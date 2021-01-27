function Verification (temperatura){
    var tipo;
    if(temperatura < 5){
        tipo = 'ice';
        return tipo;
    }
    else if(temperatura >= 5 && temperatura < 10){
        tipo = 'water';
        return tipo;
    }
    else if(temperatura >= 12 && temperatura < 15){
        tipo = 'grass';
        return tipo;
    }
    else if(temperatura >= 15 && temperatura < 21){
        tipo = 'ground';
        return tipo;
    }
    else if(temperatura >= 23 && temperatura < 27){
        tipo = 'bug';
        return tipo;
    }
    else if(temperatura >= 27 && temperatura === 33 ){
        tipo = 'rock';
        return tipo;
    }
    else if(temperatura > 33){
        tipo = 'fire';
        return tipo;
    }
    else {
        tipo = 'normal';
        return tipo;
    }
}

export default Verification;