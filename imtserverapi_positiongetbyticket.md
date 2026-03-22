# PositionGetByTicket (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionGetByTicket | [](imtserverapi_positionget.md "PositionGet") [](imtserverapi_positiongetbygroup.md "PositionGetByGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionGetByTicket
Get a trade position by the ticket.
MTAPIRES IMTServerAPI::PositionGetByTicket( const UINT64 ticket, // Ticket IMTPosition* position // Position object )  
---  
Parameters
ticket
[in] The ticket of a position. Corresponds to [IMTPosition::Position](imtposition_position.md "Position").
position
[out] An object of a trade position. The position object must be first created using the [IMTServerAPI::PositionCreate](imtserverapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a position with the specified ticket to the position object.