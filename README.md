# Deposit-calculator
CSS Responsive deposit-calculator using Jquery, CSS, HTML 

# Main logic
Whenever user changes range input it would automatically set this value to div above and display. Also when user changes currency, the value would by updated approximetely and set it both to div and range input. After button is clicked, the input values would be used to calculate deposit according to the formula and div block with the result would be displayed. 

# Formula

- I - interest per year

- t – deposit storing time 

- K – days in calendar. I decided to hard-code 365

- P – deposit contributed money value 

- finalDepositValue - the deposit value amount after storing. 

Calculation is based on simple percentage deposit formula 

**finalDepositValue** = p + ((p * i * t) / (k * 100))

**income** = finalDepositValue - P;

  
![Deposit-calculator](https://github.com/Reverlight/Deposit-calculator/blob/master/deposit-calculator-preview.png?raw=true)
