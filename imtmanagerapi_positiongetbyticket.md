# PositionGetByTicket (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionGetByTicket | [](imtmanagerapi_positiongetbylogins.md "PositionGetByLogins") [](imtmanagerapi_positiongetbytickets.md "PositionGetByTickets") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionGetByTicket
Get an open trade position by the ticket.
C++
MTAPIRES IMTManagerAPI::PositionGetByTicket( const UINT64 ticket, // Ticket IMTPosition* position // Position object )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionGetByTicket( ulong ticket, // Ticket CIMTPosition position // Position object )  
---  
Python
ManagerAPI.PositionGetByTicket( int ticket # Ticket )  
---  
Parameters
ticket
[in] The ticket of a position. Corresponds to [IMTPosition::Position](imtposition_position.md "Position").
position
[out] An object of a trade position. The 'position' object must be first created using the [IMTManagerAPI::PositionCreate](imtmanagerapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a position with specified ticket to the position object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_POSITIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.