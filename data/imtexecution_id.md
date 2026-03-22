# ID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ ID | [](imtexecution_print.md "Print") [](imtexecution_externalid.md "ExternalID") |
| --- | --- | --- |
| --- | --- |

IMTExecution::ID
Gets the ID of a trade execution.
C++
UINT64 IMTExecution::ID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTExecution.ID()  
---  
Return Value
The ID of a trade execution.
Note
This identifier is only intended for internal use.
IMTExecution::ID
Sets the ID of a trade execution.
C++
MTAPIRES IMTExecution::ID( const UINT64 id // Trade execution ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.ID( ulong id // Trade execution ID )  
---  
Parameters
id
[in] Trade execution ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This identifier is only intended for internal use.