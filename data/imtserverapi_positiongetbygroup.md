# PositionGetByGroup (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionGetByGroup | [](imtserverapi_positiongetbyticket.md "PositionGetByTicket") [](imtserverapi_positiongetbygroupsymbol.md "PositionGetByGroupSymbol") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionGetByGroup
Get trading positions for a client group.
MTAPIRES IMTServerAPI::PositionGetByGroup( LPCWSTR group, // Group IMTPositionArray* positions // An object of positions array )  
---  
Parameters
group
[in] The groups for which the positions are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
positions
[out] An object of the array of trade positions. The 'position' object must be first created using [IMTServerAPI::PositionCreateArray](imtserverapi_positioncreatearray.md "PositionCreateArray").
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'positions' object the data of all open positions belonging to clients in the specified groups.
The method cannot be called from event handlers (any IMT*Sink class methods).