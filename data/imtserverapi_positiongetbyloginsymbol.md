# PositionGetByLoginsSymbol (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionGetByLoginsSymbol | [](imtserverapi_positiongetbylogins.md "PositionGetByLogins") [](imtserverapi_positiongetbytickets.md "PositionGetByTickets") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionGetByLoginsSymbol
Get open positions from the server by list of logins and symbol.
MTAPIRES IMTServerAPI::PositionGetByLoginsSymbol( const UINT64* logins, // logins const UINT logins_total, // number of logins LPCWSTR symbol, // symbol IMTPositionArray* positions // object of positions array )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
news
[in] The symbol, for which you need to get positions. You can specify multiple symbols separated by commas as well as symbol masks. The maximum length of the string is 127 characters.
positions
[out] Positions array object. Positions object must first be created using the [IMTServerAPI::PositionCreateArray](imtserverapi_positioncreatearray.md "PositionCreateArray") method.
Return Value
The response code [MT_RET_OK](retcodes_successful.md "Successful completion") indicates that the request was successfully sent. However, it does not necessarily mean that any positions were retrieved as a result. For example, if the accounts specified in the 'logins' parameter do not exist on the server and an empty array of positions is returned, the method will still return the MT_RET_OK code. The results should be analyzed based on the actual data received.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).