# PositionGetByTickets (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionGetByTickets | [](imtmanagerapi_positiongetbyticket.md "PositionGetByTicket") [](imtmanagerapi_positiongetbysymbol.md "PositionGetBySymbol") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionGetByTickets
Receive open positions by the list of tickets.
C++
MTAPIRES IMTManagerAPI::PositionGetByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// Number of tickets IMTPositionArray* positions // An array of positions )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionGetByTickets( ulong[] tickets, // Tickets CIMTPositionArray positions // An array of positions )  
---  
Python
ManagerAPI.PositionGetByTickets( tickets # Tickets )  
---  
ManagerAPI.PositionGetByTicketsCSV( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
ManagerAPI.PositionGetByTicketsNumPy( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
Parameters
tickets
[in] List of position tickets.
tickets_total
[in] The number of tickets in the 'tickets' array.
positions
[out] An object of positions array. The 'positions' object should be first created using [IMTManagerAPI::PositionCreateArray](imtmanagerapi_positioncreatearray.md "PositionCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of positions with the specified tickets to the 'positions' object. The method works only if the [IMTManagerAPI::PUMP_MODE_POSITIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during the connection.