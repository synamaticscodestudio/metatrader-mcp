# OrderGetByLogins (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderGetByLogins | [](imtserverapi_ordergetbygroupsymbol.md "OrderGetByGroupSymbol") [](imtserverapi_ordergetbyloginssymbol.md "OrderGetByLoginsSymbol") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderGetByLogins
Receive open orders by the list of logins.
MTAPIRES IMTServerAPI::OrderGetByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTOrderArray* orders // The object of the orders array )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTServerAPI::OrderCreateArray](imtserverapi_ordercreatearray.md "OrderCreateArray") method.
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'orders' object the data of all open orders belonging to the specified accounts.
The method cannot be called from event handlers (any IMT*Sink class methods).