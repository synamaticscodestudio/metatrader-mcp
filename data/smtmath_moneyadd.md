# MoneyAdd (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Functions of Monetary Units ](smtmath_money.md "Functions of Monetary Units")/ MoneyAdd | [](smtmath_money.md "Functions of Monetary Units") [](smtmath_moneyequal.md "MoneyEqual") |
| --- | --- | --- |
| --- | --- |

SMTMath::MoneyAdd
Add sums of money in the form of two numbers of type double.
C++
static double SMTMath::MoneyAdd( const double left // The first amount const double right // The second amount const UCHAR digits // Accuracy )  
---  
.NET (Gateway/Manager API)
static double SMTMath.MoneyAdd( double  left // The first amount double right // The second amount byte digits // Accuracy )  
---  
Parameters
left
[in] The first sum of money.
right
[in] The second sum of money.
digits
[in] The accuracy (number of decimal places), to which you want to normalize the result of the addition.
Return Value
The sum of left and right.