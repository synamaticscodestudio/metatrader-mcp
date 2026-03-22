# PositionGetByTickets (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionGetByTickets | [](imtserverapi_positiongetbyloginsymbol.md "PositionGetByLoginsSymbol") [](imtserverapi_positionselectbygroup.md "PositionSelectByGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionGetByTickets
Receive trading positions by the list of tickets.
MTAPIRES IMTServerAPI::PositionGetByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// The number of tickets IMTPositionArray* positions // Position array )  
---  
Parameters
tickets
[in] List of order tickets.
tickets_total
[in] The number of tickets in the 'tickets' array.
positions
[out] An object of positions array. The 'positions' object must be first created using [IMTServerAPI::PositionCreateArray](imtserverapi_positioncreatearray.md "PositionCreateArray").
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of positions with the specified tickets to the 'positions' object.
The method cannot be called from event handlers (any IMT*Sink class methods).