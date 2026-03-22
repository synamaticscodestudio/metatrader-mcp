# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Assign | [](imtexecution_release.md "Release") [](imtexecution_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTExecution::Assign( const IMTExecution* exec // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Assign( CIMTExecution exec // Source object )  
---  
Parameters
exec
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.