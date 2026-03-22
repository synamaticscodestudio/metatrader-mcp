# OrderGetByLoginsSymbol (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderGetByLoginsSymbol | [](imtserverapi_ordergetbylogins.md "OrderGetByLogins") [](imtserverapi_ordergetbytickets.md "OrderGetByTickets") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderGetByLoginsSymbol
Get open orders from the server by list of logins and symbol.
MTAPIRES IMTServerAPI::OrderGetByLoginsSymbol( const UINT64* logins, // logins const UINT logins_total, // number of logins LPCWSTR symbol, // symbol IMTOrderArray* orders // order array object )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
symbol
[in] The symbol, for which you are requesting orders. You can specify multiple symbols separated by commas as well as symbol masks. The maximum length of the string is 127 characters.
orders
[out] Orders array object. The 'orders' object must first be created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).