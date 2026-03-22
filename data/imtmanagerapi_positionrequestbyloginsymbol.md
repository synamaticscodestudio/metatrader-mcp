# PositionRequestByLoginsSymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionRequestByLoginsSymbol | [](imtmanagerapi_positionrequestbylogins.md "PositionRequestByLogins") [](imtmanagerapi_positionrequestbytickets.md "PositionRequestByTickets") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionRequestByLoginsSymbol
Request open positions from the server by list of logins and symbol.
C++
MTAPIRES IMTManagerAPI::PositionRequestByLoginsSymbol( const UINT64* logins, // logins const UINT logins_total, // number of logins LPCWSTR symbol, // symbol IMTPositionArray* positions // object of positions array )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionRequestByLoginsSymbol( ulong[] logins, // logins string symbol, // symbol CIMTPositionArray positions // object of positions array )  
---  
Python
ManagerAPI.PositionRequestByLoginsSymbol( logins, # logins symbol # symbol )  
---  
ManagerAPI.PositionRequestByLoginsSymbolCSV( logins, # logins symbol, # symbol fields # comma-separated list of required fields )  
---  
ManagerAPI.PositionRequestByLoginsSymbolNumPy( logins, # logins symbol, # symbol fields # comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
symbol
[in] The symbol, for which you need to get positions.
positions
[out] An object of positions array. The 'positions' object should be first created using [IMTManagerAPI::PositionCreateArray](imtmanagerapi_positioncreatearray.md "PositionCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).