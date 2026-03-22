# PositionRequestByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionRequestByGroup | [](imtmanagerapi_positionrequest.md "PositionRequest") [](imtmanagerapi_positionrequestbygroupsymbol.md "PositionRequestByGroupSymbol") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionRequestByGroup
Request from the server open positions related to a client group.
C++
MTAPIRES IMTManagerAPI::PositionRequestByGroup( LPCWSTR group, // Group IMTPositionArray* positions // An object of positions array )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionRequestByGroup( string mask, // Group CIMTPositionArray positions // An object of positions array )  
---  
Python
ManagerAPI.PositionRequestByGroup( mask # Group )  
---  
ManagerAPI.PositionRequestByGroupCSV( mask, # Group fields # An object of positions array )  
---  
ManagerAPI.PositionRequestByGroupNumPy( mask, # Group fields # An object of positions array )  
---  
Parameters
group
[in] The groups the positions are requested for. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex. The maximum length of the string is 127 characters. The maximum length of the string is 127 characters.
positions
[out] An object of the array of trade positions. The 'position' object must be first created using the [IMTManagerAPI::PositionCreateArray](imtmanagerapi_positioncreatearray.md "PositionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'positions' object the data of all open positions belonging to clients in the specified groups.
The method cannot be called from event handlers (any IMT*Sink class methods).