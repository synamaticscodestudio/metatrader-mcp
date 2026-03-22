# PositionBy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ PositionBy | [](imtexecution_position.md "Position") [](imtexecution_positionexternalid.md "PositionExternalID") |
| --- | --- | --- |
| --- | --- |

IMTExecution::PositionBy
Gets the ticket (a unique number) of an opposite trade position in the MetaTrader 5 platform.
C++
UINT64 IMTExecution::PositionBy() const  
---  
.NET (Gateway/Manager API)
ulong CIMTExecution.PositionBy()  
---  
Return Value
The ticket of an opposite position in the MetaTrader 5 platform.
Note
IMTExecution::PositionBy is used for Close By operations.
It is only used in the hedging position accounting mode [EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode).
IMTExecution::PositionBy
Sets the ticket (a unique number) of an opposite trade position in the MetaTrader 5 platform.
C++
MTAPIRES IMTExecution::PositionBy( const UINT64 position // Position ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.PositionBy( ulong position // Position ticket )  
---  
Parameters
position
[in] The ticket of an opposite position in the MetaTrader 5 platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
IMTExecution::PositionBy is used for Close By operations.
It is only used in the hedging position accounting mode [EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode).