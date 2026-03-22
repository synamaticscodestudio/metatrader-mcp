# OrderRequestByLoginsSymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderRequestByLoginsSymbol | [](imtadminapi_orderrequestbylogins.md "OrderRequestByLogins") [](imtadminapi_orderrequestbytickets.md "OrderRequestByTickets") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderRequestByLoginsSymbol
Request open orders from the server by list of logins and symbol.
C++
MTAPIRES IMTAdminAPI::OrderRequestByLoginsSymbol( const UINT64* logins, // logins const UINT logins_total, // number of logins LPCWSTR symbol, // symbol IMTOrderArray* orders // order array object )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderRequestByLoginsSymbol( ulong[] logins, // logins string symbol, // symbol CIMTOrderArray orders // order array object )  
---  
Python
AdminAPI.OrderRequestByLoginsSymbol( logins, # logins symbol # symbol )  
---  
AdminAPI.OrderRequestByLoginsSymbolCSV( logins, # logins symbol, # symbol fields # comma-separated list of required fields )  
---  
AdminAPI.OrderRequestByLoginsSymbolNumPy( logins, # logins symbol, # symbol fields # comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
symbol
[in] The symbol, for which you wish to get orders. You can specify multiple symbols separated by commas. The maximum length of the string is 127 characters.
orders
[out] An object of the array of orders. The 'orders' object must first be created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).