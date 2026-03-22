# PositionByExternalID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ PositionByExternalID | [](imtexecution_positionexternalid.md "PositionExternalID") [](imtexecution_positionpricesl.md "PositionPriceSL") |
| --- | --- | --- |
| --- | --- |

IMTExecution::PositionByExternalID
Gets the ticket (a unique number) of an opposite position in an external trading system.
C++
LPCWSTR IMTExecution::PositionByExternalID() const  
---  
.NET (Gateway/Manager API)
string CIMTExecution.PositionByExternalID()  
---  
Return Value
The ticket of an opposite position in an external trading system.
Note
IMTExecution::PositionBy is used for Close By operations.
It is only used in the hedging position accounting mode [EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode).
IMTExecution::PositionByExternalID
Sets the ticket (a unique number) of an opposite position in an external trading system.
C++
MTAPIRES IMTExecution::PositionByExternalID( LPCWSTR id // Position ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.PositionByExternalID( string id // Position ticket )  
---  
Parameters
id
[in] The ticket of an opposite position in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
IMTExecution::PositionBy is used for Close By operations.
It is only used in the hedging position accounting mode [EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode).