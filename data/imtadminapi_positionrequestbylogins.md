# PositionRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionRequestByLogins | [](imtadminapi_positionrequestbygroupsymbol.md "PositionRequestByGroupSymbol") [](imtadminapi_positionrequestbyloginsymbol.md "PositionRequestByLoginsSymbol") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionRequestByLogins
Request from the server open positions by the list of logins.
C++
MTAPIRES IMTAdminAPI::PositionRequestByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTPositionArray* positions // An object of positions array )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionRequestByLogins( ulong[] logins, // Logins CIMTPositionArray positions // An object of positions array )  
---  
Python
AdminAPI.PositionRequestByLogins( logins # Logins )  
---  
AdminAPI.PositionRequestByLoginsCSV( logins, # Logins fields # comma-separated list of required fields )  
---  
AdminAPI.PositionRequestByLoginsNumPy( logins, # Logins fields # comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
positions
[out] An object of positions array. Positions object must be first created using [IMTAdminAPI::PositionCreateArray](imtadminapi_positioncreatearray.md "PositionCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'positions' object the data of all open positions belonging to the specified accounts.
The method cannot be called from event handlers (any IMT*Sink class methods).