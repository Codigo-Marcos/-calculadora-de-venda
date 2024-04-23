function calculateProfit(){
    const cost = parseFloat(document.getElementById('cost').value);
    const margin = parseFloat(document.getElementById('margin').value);

    if(! isNaN(cost)&&(margin)){
        const sellingPrince= cost*(1 + margin/100);
        const formattedPrince=sellingPrince.toFixed(2);
        document.getElementById('result').style.display='block';
        document.getElementById('sellingPrince')
        .textContent='Preço de Venda:R$ ${formattedPrince}';
    
    } else{
        alert('Por favor,insira valores numericos validos.');
    }    
}
