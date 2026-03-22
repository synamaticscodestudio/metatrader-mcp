# PositionRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionRequestByLogins | [](imtmanagerapi_positionrequestbygroupsymbol.md "PositionRequestByGroupSymbol") [](imtmanagerapi_positionrequestbyloginsymbol.md "PositionRequestByLoginsSymbol") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionRequestByLogins
Request from the server open positions by the list of logins.
C++
MTAPIRES IMTManagerAPI::PositionRequestByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTPositionArray* positions // An object of positions array )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionRequestByLogins( ulong[] logins, // Logins CIMTPositionArray positions // An object of positions array )  
---  
Python
ManagerAPI.PositionRequestByLogins( logins # Logins )  
---  
ManagerAPI.PositionRequestByLoginsCSV( logins, # Logins fields # Comma-separated list of required fields )  
---  
ManagerAPI.PositionRequestByLoginsNumPy( logins, # Logins fields # Comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
positions
[out] An object of positions array. The 'positions' object should be first created using [IMTManagerAPI::PositionCreateArray](imtmanagerapi_positioncreatearray.md "PositionCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'positions' object the data of all open positions belonging to the specified accounts.
The method cannot be called from event handlers (any IMT*Sink class methods).