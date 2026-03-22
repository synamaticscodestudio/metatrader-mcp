# PositionExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ PositionExternalID | [](imtexecution_positionby.md "PositionBy") [](imtexecution_positionbyexternalid.md "PositionByExternalID") |
| --- | --- | --- |
| --- | --- |

IMTExecution::PositionExternalID
Gets the ticket (a unique number) of a position in an external trading system.
C++
LPCWSTR IMTExecution::PositionExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTExecution.PositionExternalID()  
---  
Return Value
The ticket of a position in an external trading system.
IMTExecution::PositionExternalID
Sets the ticket (a unique number) of a position in an external trading system.
C++
MTAPIRES IMTExecution::PositionExternalID( LPCWSTR id // Position ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.PositionExternalID( string id // Position ticket )  
---  
Parameters
id
[in] The ticket of a position in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.