


$('#currency-value').change((e) => {
    if (e.target.value === 'USD') {

        $('#deposit-input').attr({
            'max': 800,
            'min': 50,
            'step': 25
        })

        let RUBValue = parseInt($('#deposit-value').text())
        let USDValue = Math.round(RUBValue / 80)

        let deposit = $('#deposit-value').text(USDValue).text()

        $('#deposit-input').val(deposit)

    }

    if (e.target.value === 'RUB') {
        $('#deposit-input').attr({
            'max': 50000,
            'min': 5000,
            'step': 1000
        })

        let USDValue = parseInt($('#deposit-value').text())
        let RUBValue = Math.round(USDValue * 80)
        let deposit = $('#deposit-value').text(RUBValue).text()

        $('#deposit-input').val(deposit)
    }




})


$('button').click(() => {
    let initalDepositValue = parseInt($('#deposit-value').text())
    let termValue = parseInt($('#term-value :selected').text())
    let interestValue = parseInt($('#interest-value :selected').text())


    let p = initalDepositValue;
    let i = interestValue;
    let k = 365;
    let t = termValue;
    let finalDepositValue;

    // I – interest per year
    // t – deposit storing time 
    // K – days in calendar. I decided to hard-code 365
    // P – deposit contributed money value 
    // finalDepositValue - the deposit value amount after storing. Calculation is based on simple percentage deposit formula 
    // finalDepositValue - finalDepositValue substracted by initalDepositValue
    finalDepositValue = p + ((p * i * t) / (k * 100))
    finalDepositValue = Math.round(finalDepositValue)
    income = finalDepositValue - initalDepositValue
    $('#result').addClass('active')
    $('#result h1').text(income)
})

$('#deposit-input').on('input', function (e) {
    $('#deposit-value').text(e.target.value)
});