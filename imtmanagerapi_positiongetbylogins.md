# PositionGetByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionGetByLogins | [](imtmanagerapi_positiongetbygroup.md "PositionGetByGroup") [](imtmanagerapi_positiongetbyticket.md "PositionGetByTicket") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionGetByLogins
Receive open positions by the list of logins.
C++
MTAPIRES IMTManagerAPI::PositionGetByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTPositionArray* positions // An object of positions array )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionGetByLogins( ulong[] logins, // Logins CIMTPositionArray positions // An object of positions array )  
---  
Python
ManagerAPI.PositionGetByLogins( logins # Logins )  
---  
ManagerAPI.PositionGetByLoginsCSV( logins, # Logins fields # Comma-separated list of required fields )  
---  
ManagerAPI.PositionGetByLoginsNumPy( logins, # Logins fields # Comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
positions
[out] An object of positions array. The 'positions' object should be first created using [IMTManagerAPI::PositionCreateArray](imtmanagerapi_positioncreatearray.md "PositionCreateArray").
Return Value
The response code [MT_RET_OK](retcodes_successful.md "Successful completion") indicates that the request was successfully sent. However, it does not necessarily mean that any positions were retrieved as a result. For example, if the accounts specified in the 'logins' parameter do not exist on the server and an empty array of positions is returned, the method will still return the MT_RET_OK code. The results should be analyzed based on the actual data received.
Note
The method copies to the 'positions' object the data of all open positions belonging to the specified accounts. The method works only if the [IMTManagerAPI::PUMP_MODE_POSITIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during the connection.