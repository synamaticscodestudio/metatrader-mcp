# PositionGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionGet | [](imtserverapi_positionupdate.md "PositionUpdate") [](imtserverapi_positiongetbyticket.md "PositionGetByTicket") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionGet
Get a trade position.
MTAPIRES IMTServerAPI::PositionGet( const UINT64 login, // User's login LPCWSTR symbol, // Symbol IMTPosition* position // Position object )  
---  
Parameters
login
[in] The login of a user whose position should be obtained.
symbol
[in] The symbol, for which you need to get a position.
position
[out] An object of a trade position. The position object must be first created using the [IMTServerAPI::PositionCreate](imtserverapi_positioncreate.md "PositionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a position of specified client and the specified symbol to the position object.
To get a position when using the hedging accounting system ([EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode)), use the [IMTServerAPI::PositionGetByTicket](imtserverapi_positiongetbyticket.md "PositionGetByTicket") method as a position in that case is identified by the ticket, not by the login and symbol..
IMTServerAPI::PositionGet
Get an array of positions by the login.
MTAPIRES IMTServerAPI::PositionGet( const UINT64 login, // User's login IMTPositionArray* position // An object of the array of positions )  
---  
Parameters
login
[in] The login of a user.
position
[out] An object of the array of trade positions. The position object must be first created using the [IMTServerAPI::PositionCreateArray](imtserverapi_positioncreatearray.md "PositionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the array of positions of a client with the specified login to the position object.