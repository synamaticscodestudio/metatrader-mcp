# FormatMoney (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatMoney | [](smtformat_formatdouble.md "FormatDouble") [](smtformat_formatprice.md "FormatPrice") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatMoney
Format a number with a given number of decimal places to a string. It is used to show sums of money with thousands separated.
static LPCWSTR SMTFormat::FormatMoney( CMTStr &str, // Reference to a string object double val, // Number UINT digits // Number of decimal places )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which number is placed.
val
[in] The number being formated.
digits
[in] The number of digits after the decimal point in the formatted number.
Return Value
Returns a constant pointer to a string in the str object.
Note
The method works in the same as [SMTFormat::FormatDouble](smtformat_formatdouble.md "FormatDouble"), but additionally spaces separating thousands are inserted into the final string.