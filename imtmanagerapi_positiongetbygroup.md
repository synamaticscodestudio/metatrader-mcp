# PositionGetByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionGetByGroup | [](imtmanagerapi_positionget.md "PositionGet") [](imtmanagerapi_positiongetbylogins.md "PositionGetByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionGetByGroup
Get all currently opened positions for one or several client groups.
C++
MTAPIRES IMTManagerAPI::PositionGetByGroup( LPCWSTR mask, // group mask IMTPositionArray* positions // object of the array of positions )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionGetByGroup( String^ mask, // group mask CIMTPositionArray positions // object of the array of positions )  
---  
Python
ManagerAPI.PositionGetByGroup( mask  # group mask )  
---  
ManagerAPI.PositionGetByGroupCSV( mask, # group mask fields # comma-separated list of required fields )  
---  
ManagerAPI.PositionGetByGroupNumPy( mask, # group mask fields # comma-separated list of required fields )  
---  
Parameters
mask
[in] The groups the positions are requested for. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex. The maximum length of the string is 127 characters.
positions
[out] An object of positions array. The 'positions' object should be first created using [IMTManagerAPI::PositionCreateArray](imtmanagerapi_positioncreatearray.md "PositionCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies the data on all open positions belonging to clients in the specified groups to the 'positions' object. The method works only if the [IMTManagerAPI::PUMP_MODE_POSITIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during the connection.