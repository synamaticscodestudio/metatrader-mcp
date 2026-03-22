# PositionRequestByTickets (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionRequestByTickets | [](imtadminapi_positionrequestbyloginsymbol.md "PositionRequestByLoginsSymbol") [](imtadminapi_positionupdate.md "PositionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionRequestByTickets
Request from the server open positions by the list of tickets.
C++
MTAPIRES IMTAdminAPI::PositionRequestByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// Number of tickets IMTPositionArray* positions // An array of positions )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionRequestByTickets( ulong[] tickets, // Tickets CIMTPositionArray positions // An array of positions )  
---  
Python
AdminAPI.PositionRequestByTickets( tickets # Tickets )  
---  
AdminAPI.PositionRequestByTicketsCSV( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
AdminAPI.PositionRequestByTicketsNumPy( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
Parameters
tickets
[in] List of position tickets.
tickets_total
[in] The number of tickets in the 'tickets' array.
positions
[out] An object of positions array. Positions object must be first created using [IMTAdminAPI::PositionCreateArray](imtadminapi_positioncreatearray.md "PositionCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of positions with the specified tickets to the 'positions' object.
The method cannot be called from event handlers (any IMT*Sink class methods).