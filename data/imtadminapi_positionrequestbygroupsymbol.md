# PositionRequestByGroupSymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionRequestByGroupSymbol | [](imtadminapi_positionrequestbygroup.md "PositionRequestByGroup") [](imtadminapi_positionrequestbylogins.md "PositionRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionRequestByGroupSymbol
Request open positions from the server by group and symbol.
C++
MTAPIRES IMTAdminAPI::PositionRequestByGroupSymbol( LPCWSTR group, // group LPCWSTR symbol, // symbol IMTPositionArray* positions // object of positions array )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionRequestByGroupSymbol( string mask, // group string symbol, // symbol CIMTPositionArray positions // object of positions array )  
---  
Python
AdminAPI.PositionRequestByGroupSymbol( group, # group symbol # symbol )  
---  
AdminAPI.PositionRequestByGroupSymbolCSV( group, # group symbol, # symbol fields # comma-separated list of required fields )  
---  
AdminAPI.PositionRequestByGroupSymbolNumPy( group, # group symbol, # symbol fields # comma-separated list of required fields )  
---  
Parameters
group
[in] The groups for which the positions are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex. The maximum length of the string is 127 characters.
symbol
[in] The symbol, for which you need to get positions. You can specify multiple symbols separated by commas. The maximum length of the string is 127 characters.
positions
[out] An object of the array of trade positions. The 'positions' object must be first created using [IMTAdminAPI::PositionCreateArray](imtadminapi_positioncreatearray.md "PositionCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).