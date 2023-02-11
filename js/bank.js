document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeInputFeld = document.getElementById('deposite-feld');
    const depositeInputFeldValue = depositeInputFeld.value;
    const converNumberNewDeposite = parseFloat(depositeInputFeldValue)
    if (isNaN(converNumberNewDeposite)) {
        alert('Please provide a valid number')
        return;
    }
    
    const depositeAmount = document.getElementById('deposite-amount');
    const newDepositeConverNumber = depositeAmount.innerText;
    const converPreveusDeposite = parseFloat(newDepositeConverNumber);
    const updateTotalDeposite = converNumberNewDeposite + converPreveusDeposite;
  
  depositeAmount.innerText = updateTotalDeposite;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = balanceTotal.innerText;
    const balanceTotalConverToNumber = parseFloat(balanceTotalAmount);
    const balanceTotalAddDeposeite = balanceTotalConverToNumber + converNumberNewDeposite;
    balanceTotal.innerText = balanceTotalAddDeposeite;
   



    document.getElementById('deposite-feld').value = ''
})