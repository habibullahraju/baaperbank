document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFeld = document.getElementById('withdraw-feld');
    const withdrawFeldString = withdrawFeld.value;
    const withdrawFeldValue = parseFloat(withdrawFeldString)
    if (isNaN(withdrawFeldValue)) {
        alert('please provide a valid number')
        return
    }
    

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmountString);
    
  
    withdrawFeld.value = ''
    const balanceTotal  = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalNumber =  parseFloat(balanceTotalString);
    if (withdrawFeldValue > balanceTotalNumber) {
        alert('Baper eto taka nai!!  kamla den vai')
        return
    }
    const totalWithdraw = withdrawFeldValue + withdrawAmountNumber;
    withdrawAmount.innerText = totalWithdraw;
 


    const withdrawMinus = balanceTotalNumber - withdrawFeldValue;
    balanceTotal.innerText = withdrawMinus;

  






})