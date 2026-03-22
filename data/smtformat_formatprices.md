# FormatPrices (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatPrices | [](smtformat_formatprice.md "FormatPrice") [](smtformat_formatvolume.md "FormatVolume") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatPrices
Format values of Bid, Ask and Last from a passed structure [MTTickShort](mttickshort.md "MTTickShort") to a string.
static LPCWSTR SMTFormat::FormatPrices( CMTStr &str, // Reference to a string object MTTickShort &tick, // Reference to the MTTickShort structure const UINT digits // Number of decimal places )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
tick
[in] Reference to the[MTTickShort](mttickshort.md "MTTickShort") structure.
digits
[in] The number of digits after the decimal point in the Bid, Ask and Last prices.
Return Value
Returns a constant pointer to a string in the str object.
Note
Prices are shown in the following format: Bid / Ask / Last. If there is no Last price in the structure, only Bid and Ask are shown: Bid / Ask.