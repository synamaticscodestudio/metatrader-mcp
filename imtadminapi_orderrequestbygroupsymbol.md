# OrderRequestByGroupSymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderRequestByGroupSymbol | [](imtadminapi_orderrequestbygroup.md "OrderRequestByGroup") [](imtadminapi_orderrequestbylogins.md "OrderRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderRequestByGroupSymbol
Request open orders from the server by group and symbol.
C++
MTAPIRES IMTAdminAPI::OrderRequestByGroupSymbol( LPCWSTR group, // group LPCWSTR symbol, // symbol IMTOrderArray* orders // order array object )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderRequestByGroupSymbol( string mask, // group string symbol, // symbol CIMTOrderArray orders // order array object )  
---  
Python
AdminAPI.OrderRequestByGroupSymbol( group, # group symbol # symbol )  
---  
AdminAPI.OrderRequestByGroupSymbolCSV( group, # group symbol, # symbol fields # comma-separated list of required fields )  
---  
AdminAPI.OrderRequestByGroupSymbolNumPy( group, # group symbol, # symbol fields # comma-separated list of required fields )  
---  
Parameters
group
[in] The groups for which the orders are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex. The maximum length of the string is 127 characters.
symbol
[in] The symbol, for which you wish to get orders. You can specify multiple symbols separated by commas. You can specify multiple symbols separated by commas as well as symbol masks. The maximum length of the string is 127 characters.
orders
[out] An object of the array of orders. The 'orders' object must first be created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'orders' object the data on all open orders belonging to clients in the specified groups.
The method cannot be called from event handlers (any IMT*Sink class methods).