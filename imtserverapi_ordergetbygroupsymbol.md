# OrderGetByGroupSymbol (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderGetByGroupSymbol | [](imtserverapi_ordergetbygroup.md "OrderGetByGroup") [](imtserverapi_ordergetbylogins.md "OrderGetByLogins") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderGetByGroupSymbol
Get open orders from the server by group and symbol.
MTAPIRES IMTServerAPI::OrderGetByGroupSymbol( LPCWSTR group, // group LPCWSTR symbol, // symbol IMTOrderArray* orders // order array object )  
---  
Parameters
group
[in] The groups for which the orders are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group 'demoforex'.
symbol
[in] The symbol, for which you are requesting orders. You can specify multiple symbols separated by commas as well as symbol masks. The maximum length of the string is 127 characters.
orders
[out] Orders array object. The 'orders' object must first be created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies the data on all open orders belonging to clients in the specified groups to the 'orders' object.
The method cannot be called from event handlers (any IMT*Sink class methods).