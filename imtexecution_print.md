# Print (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Print | [](imtexecution_clear.md "Clear") [](imtexecution_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Print
Get a string description of a trade execution.
C++
LPCWSTR IMTExecution::Print( MTAPISTR& string // Trade execution description string ) const  
---  
.NET (Gateway/Manager API)
string CIMTExecution.Print()  
---  
Parameters
string
[in] Trade execution description string.
Return Value
A pointer to string that is passed as a parameter.