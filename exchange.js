document.addEventListener('DOMContentLoaded', function () {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const apiKey = "UMslntydeX0twFFlpnbjQQ==dwjZ1vzXrAa04aGS";
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const currencyTotal = currency.options[currency.selectedIndex].value; // Corrected method to get the selected currency
        const url = apiUrl + currencyTotal;

        $.ajax({
            method: 'GET',
            url: url,
            headers: { 'X-Api-Key': apiKey },
            contentType: 'application/json',
            success: function (data) {
                if (data.exchange_rate) { // Corrected key to access the exchange rate
                    const rate = data.exchange_rate; // Corrected key to access the exchange rate
                    const resultPrice = amountTotal * rate;
                    result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
                } else {
                    result.innerHTML = 'Invalid response data. Missing exchange rate.';
                }
            },
            error: function ajaxError(jqXHR) {
                console.error('Error:', jqXHR.responseText);
                result.innerHTML = 'An error occurred. Please try again later.';
            }
        });
    });
});
