# Print (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Print | [](imtdeal_clear.md "Clear") [](imtdeal_deal.md "Deal") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Print
Get the string description of a deal.
C++
LPCWSTR IMTDeal::Print( MTAPISTR& string // The deal description string ) const  
---  
.NET (Gateway/Manager API)
string CIMTDeal.Print()  
---  
Python
MTDeal.Print()  
---  
Parameters
string
[out] The deal description string.
Return Value
A pointer to string that is passed as a parameter.
Note
The description string does not include the login of the client, to whom the deal belongs.