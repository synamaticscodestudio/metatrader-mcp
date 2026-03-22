# PositionGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionGet | [](imtmanagerapi_positionunsubscribe.md "PositionUnsubscribe") [](imtmanagerapi_positiongetbygroup.md "PositionGetByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionGet
Get an open trade position.
C++
MTAPIRES IMTManagerAPI::PositionGet( const UINT64 login, // User's login LPCWSTR symbol, // Symbol IMTPosition* position // Position object )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionGet( ulong login, // User's login string symbol, // Symbol CIMTPosition position // Position object )  
---  
Python
ManagerAPI.PositionGet( int login, # User's login str symbol # Symbol )  
---  
Parameters
login
[in] The login of a user whose position should be obtained.
symbol
[in] The symbol, for which you need to get a position.
position
[out] An object of a trade position. The 'position' object must be first created using the [IMTManagerAPI::PositionCreate](imtmanagerapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a position of specified client and the specified symbol to the position object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_POSITIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.
To get a position when using the hedging accounting system ([EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode)), use the [IMTManagerAPI::PositionGetByTicket](imtmanagerapi_positiongetbyticket.md "PositionGetByTicket") method as a position in that case is identified by the ticket, not by the login and symbol.
IMTManagerAPI::PositionGet
Get an array of open positions of all symbols for the specified login.
C++
MTAPIRES IMTManagerAPI::PositionGet( const UINT64 login, // User's login IMTPositionArray* position // An object of the array of positions )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionGet( ulong login, // User's login CIMTPositionArray position // An object of the array of positions )  
---  
Python
ManagerAPI.PositionGet( int login # User's login )  
---  
Parameters
login
[in] The login of a user.
position
[out] An object of the array of trade positions. The position object must be first created using the [IMTManagerAPI::PositionArrayCreate](imtmanagerapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the array of positions of a client with the specified login to the position object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_POSITIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.