# OrderCancel (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderCancel | [](imtadminapi_orderdeletebatch.md "OrderDeleteBatch") [](imtadminapi_ordercancelbatch.md "OrderCancelBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderCancel
Move an open trading order to history.
C++
MTAPIRES IMTAdminAPI::OrderCancel( const UINT64 ticket // order ticket )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderCancel( ulong ticket // order number )  
---  
Python
AdminAPI.OrderCancel( ticket # order number )  
---  
Parameters
ticket
[in] Order number (ticket).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When an order is transferred, its state changes to [IMTOrder::ORDER_STATE_CANCELED](imtorder_enum.htm#enorderstate). Such orders are not executed or triggered, and no margin is charged for them.
An order can be moved only from the plugins running on the same trade server where the order was created. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.