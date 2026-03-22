# PositionGetBySymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionGetBySymbol | [](imtmanagerapi_positiongetbytickets.md "PositionGetByTickets") [](imtmanagerapi_positionrequest.md "PositionRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionGetBySymbol
Receive open positions by the groups and login.
C++
MTAPIRES IMTManagerAPI::PositionGetBySymbol( LPCWSTR group, // Group mask LPCWSTR symbol, // Symbol IMTPositionArray* positions // Array of positions )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionGetBySymbol( String^ group, // Group mask String^ symbol, // Symbol CIMTPositionArray positions // Array of positions )  
---  
Python
ManagerAPI.PositionGetBySymbol( group, # Group mask symbol # Symbol )  
---  
ManagerAPI.PositionGetBySymbolCSV( group, # Group mask symbol, # Symbol fields # Comma-separated list of required fields )  
---  
ManagerAPI.PositionGetBySymbolNumPy( group, # Group mask symbol, # Symbol fields # Comma-separated list of required fields )  
---  
Parameters
group
[in] The groups for which the positions are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex. The 'nullptr' value means "all groups". The maximum length of the string is 127 characters.
symbol
[in] The symbol, for which you need to get positions.
positions
[out] An object of positions array. The 'positions' object should be first created using [IMTManagerAPI::PositionCreateArray](imtmanagerapi_positioncreatearray.md "PositionCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method works only if the [IMTManagerAPI::PUMP_MODE_POSITIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during the connection.