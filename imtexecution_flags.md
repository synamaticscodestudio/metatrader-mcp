# Flags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Flags | [](imtexecution_group.md "Group") [](imtexecution_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Flags
Gets additional flags of a trade execution.
C++
UINT64 IMTExecution::Flags() const  
---  
.NET (Gateway/Manager API)
ulong CIMTExecution.Flags()  
---  
Return Value
Additional trade execution flags passed using the [IMTExecution::EnFlags](imtexecution_enum.htm#enflags) enumeration.
IMTExecution::Flags
Sets additional flags of a trade execution.
C++
MTAPIRES IMTExecution::Flags( const UINT64 flags // Additional trade execution flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Flags( ulong flags // Additional trade execution flags )  
---  
Parameters
flags
[in] Additional trade execution flags passed using the [IMTExecution::EnFlags](imtexecution_enum.htm#enflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.