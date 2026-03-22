# PositionRequestByGroupSymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionRequestByGroupSymbol | [](imtmanagerapi_positionrequestbygroup.md "PositionRequestByGroup") [](imtmanagerapi_positionrequestbylogins.md "PositionRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionRequestByGroupSymbol
Request open positions from the server by group and symbol.
C++
MTAPIRES IMTManagerAPI::PositionRequestByGroupSymbol( LPCWSTR group, // group LPCWSTR symbol, // symbol IMTPositionArray* positions // object of positions array )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionRequestByGroupSymbol( string mask, // group string symbol, // symbol CIMTPositionArray positions // object of positions array )  
---  
Python
ManagerAPI.PositionRequestByGroupSymbol( mask, # group symbol # symbol )  
---  
ManagerAPI.PositionRequestByGroupSymbolCSV( mask, # group symbol, # symbol fields # comma-separated list of required fields )  
---  
ManagerAPI.PositionRequestByGroupSymbolNumPy( mask, # group symbol, # symbol fields # comma-separated list of required fields )  
---  
Parameters
group
[in] The groups for which the positions are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex. The maximum length of the string is 127 characters.
symbol
[in] The symbol, for which you need to get positions.
positions
[out] An object of the array of trade positions. The 'position' object must be first created using the [IMTManagerAPI::PositionCreateArray](imtmanagerapi_positioncreatearray.md "PositionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).