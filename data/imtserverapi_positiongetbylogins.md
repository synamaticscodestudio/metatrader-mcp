# PositionGetByLogins (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionGetByLogins | [](imtserverapi_positiongetbygroupsymbol.md "PositionGetByGroupSymbol") [](imtserverapi_positiongetbyloginsymbol.md "PositionGetByLoginsSymbol") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionGetByLogins
Get trading positions by the list of logins.
MTAPIRES IMTServerAPI::PositionGetByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTPositionArray* positions // An object of positions array )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
positions
[out] An object of positions array. The 'positions' object must be first created using [IMTServerAPI::PositionCreateArray](imtserverapi_positioncreatearray.md "PositionCreateArray").
Returned Value
The response code [MT_RET_OK](retcodes_successful.md "Successful completion") indicates that the request was successfully sent. However, it does not necessarily mean that any positions were retrieved as a result. For example, if the accounts specified in the 'logins' parameter do not exist on the server and an empty array of positions is returned, the method will still return the MT_RET_OK code. The results should be analyzed based on the actual data received.
Note
The method copies to the 'positions' object the data of all open positions belonging to the specified accounts.
The method cannot be called from event handlers (any IMT*Sink class methods).