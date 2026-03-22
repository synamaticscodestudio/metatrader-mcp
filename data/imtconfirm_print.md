# Print (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ Print | [](imtconfirm_clear.md "Clear") [](imtconfirm_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::Print
Get the string description of trade request confirmation.
C++
LPCWSTR IMTConfirm::Print( MTAPISTR& string // Confirmation description string ) const  
---  
.NET (Gateway/Manager API)
string CIMTConfirm.Print()  
---  
Parameters
string
[out] The request confirmation description string.
Return Value
A pointer to string that is passed as a parameter.