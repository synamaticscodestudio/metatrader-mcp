# OrderRequestByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderRequestByGroup | [](imtadminapi_orderrequestopen.md "OrderRequestOpen") [](imtadminapi_orderrequestbygroupsymbol.md "OrderRequestByGroupSymbol") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderRequestByGroup
Request from the server open orders related to a client group.
C++
MTAPIRES IMTAdminAPI::OrderRequestByGroup( LPCWSTR group, // Group IMTOrderArray* orders // Object of the orders array )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderRequestByGroup( string mask, // Group CIMTOrderArray orders // Object of the orders array )  
---  
Python
AdminAPI.OrderRequestByGroup( group # Group )  
---  
AdminAPI.OrderRequestByGroupCSV( group, # Group fields # Comma-separated list of required fields )  
---  
AdminAPI.OrderRequestByGroupNumPy( group, # Group fields # Comma-separated list of required fields )  
---  
Parameters
group
[in] The groups for which the orders are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex. The maximum length of the string is 127 characters.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'orders' object the data on all open orders belonging to clients in the specified groups.
The method cannot be called from event handlers (any IMT*Sink class methods).