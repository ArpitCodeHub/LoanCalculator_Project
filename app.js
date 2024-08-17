function calculateLoan() {
    let loanAmountValue = document.querySelector("#loanAmt + input").value;
    let interestRateValue = document.querySelector("#rate + input").value;
    let MonthsToPayValue = document.querySelector("#months + input").value;

    let interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

    let monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerText = `${monthlyPayment}`;
};
