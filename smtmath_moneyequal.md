# MoneyEqual (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Functions of Monetary Units ](smtmath_money.md "Functions of Monetary Units")/ MoneyEqual | [](smtmath_moneyadd.md "MoneyAdd") [](smtmath_moneydigits.md "MoneyDigits") |
| --- | --- | --- |
| --- | --- |

SMTMath::MoneyEqual
Compare two quantities of money in the form of numbers of type double.
C++
static bool SMTMath::MoneyEqual( const double left // The first amount const double right // The second amount const UCHAR digits // Accuracy )  
---  
.NET (Gateway/Manager API)
static bool SMTMath.MoneyEqual( double left // The first amount double right // The second amount byte digits // Accuracy )  
---  
Parameters
left
[in] The first sum of money.
right
[in] The second sum of money.
digits
[in] The accuracy (number of decimal places), with which the two number are compared.
Return Value
If the amounts are equal, returns true, otherwise - false.
Note
The following formula is used for comparison: |left-right| < 1/ [10 ^ (digits+1)].