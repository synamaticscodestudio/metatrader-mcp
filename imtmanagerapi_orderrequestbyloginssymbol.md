# OrderRequestByLoginsSymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderRequestByLoginsSymbol | [](imtmanagerapi_orderrequestbylogins.md "OrderRequestByLogins") [](imtmanagerapi_orderrequestbytickets.md "OrderRequestByTickets") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderRequestByLoginsSymbol
Request open orders from the server by list of logins and symbol.
C++
MTAPIRES IMTManagerAPI::OrderRequestByLoginsSymbol( const UINT64* logins, // logins const UINT logins_total, // number of logins LPCWSTR symbol, // symbol IMTOrderArray* orders // order array object )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderRequestByLoginsSymbol( ulong[] logins, // logins string symbol, // symbol CIMTOrderArray orders // order array object )  
---  
Python
ManagerAPI.OrderRequestByLoginsSymbol( logins, # logins symbol # symbol )  
---  
ManagerAPI.OrderRequestByLoginsSymbolCSV( logins, # logins symbol, # symbol fields # comma-separated list of required fields )  
---  
ManagerAPI.OrderRequestByLoginsSymbolNumPy( logins, # logins symbol, # symbol fields # comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
symbol
[in] The symbol, for which you wish to get orders.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).