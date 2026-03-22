# PositionRequestByLoginsSymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionRequestByLoginsSymbol | [](imtadminapi_positionrequestbylogins.md "PositionRequestByLogins") [](imtadminapi_positionrequestbytickets.md "PositionRequestByTickets") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionRequestByLoginsSymbol
Request open positions from the server by list of logins and symbol.
C++
MTAPIRES IMTAdminAPI::PositionRequestByLoginsSymbol( const UINT64* logins, // logins const UINT logins_total, // number of logins LPCWSTR symbol, // symbol IMTPositionArray* positions // object of positions array )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionRequestByLoginsSymbol( ulong[] logins, // logins string symbol, // symbol CIMTPositionArray positions // object of positions array )  
---  
Python
AdminAPI.PositionRequestByLoginsSymbol( logins, # logins symbol # symbol )  
---  
AdminAPI.PositionRequestByLoginsSymbolCSV( logins, # logins symbol, # symbol fields # comma-separated list of required fields )  
---  
AdminAPI.PositionRequestByLoginsSymbolNumPy( logins, # logins symbol, # symbol fields # comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
symbol
[in] The symbol, for which you need to get positions. You can specify multiple symbols separated by commas. The maximum length of the string is 127 characters.
positions
[out] An object of positions array. Positions object must be first created using [IMTAdminAPI::PositionCreateArray](imtadminapi_positioncreatearray.md "PositionCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).