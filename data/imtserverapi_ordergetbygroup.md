# OrderGetByGroup (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderGetByGroup | [](imtserverapi_orderget.md "OrderGet") [](imtserverapi_ordergetbygroupsymbol.md "OrderGetByGroupSymbol") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderGetByGroup
Get open orders for a client group.
MTAPIRES IMTServerAPI::OrderGetByGroup( LPCWSTR group, // Group IMTOrderArray* orders // The object of the orders array )  
---  
Parameters
group
[in] The groups for which the orders are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTServerAPI::OrderCreateArray](imtserverapi_ordercreatearray.md "OrderCreateArray") method.
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'orders' object the data of all open orders belonging to clients from the specified groups.
The method cannot be called from event handlers (any IMT*Sink class methods).