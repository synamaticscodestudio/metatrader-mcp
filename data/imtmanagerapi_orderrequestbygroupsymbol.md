# OrderRequestByGroupSymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderRequestByGroupSymbol | [](imtmanagerapi_orderrequestbygroup.md "OrderRequestByGroup") [](imtmanagerapi_orderrequestbylogins.md "OrderRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderRequestByGroupSymbol
Request open orders from the server by group and symbol.
C++
MTAPIRES IMTManagerAPI::OrderRequestByGroupSymbol( LPCWSTR group, // group LPCWSTR symbol, // symbol IMTOrderArray* orders // order array object )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderRequestByGroupSymbol( string mask, // group string symbol, // symbol CIMTOrderArray orders // order array object )  
---  
Python
ManagerAPI.OrderRequestByGroupSymbol( mask, # group symbol # symbol )  
---  
ManagerAPI.OrderRequestByGroupSymbolCSV( mask, # group symbol, # symbol fields # comma-separated list of required fields )  
---  
ManagerAPI.OrderRequestByGroupSymbolNumPy( mask, # group symbol, # symbol fields # comma-separated list of required fields )  
---  
Parameters
group
[in] The groups for which the orders are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex. The maximum length of the string is 127 characters.
symbol
[in] The symbol, for which you wish to get orders. You can specify multiple symbols separated by commas as well as symbol masks. The maximum length of the string is 127 characters.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'orders' object the data on all open orders belonging to clients in the specified groups.
The method cannot be called from event handlers (any IMT*Sink class methods).