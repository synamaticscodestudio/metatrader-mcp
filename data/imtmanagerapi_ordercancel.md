# OrderCancel (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderCancel | [](imtmanagerapi_orderdeletebatch.md "OrderDeleteBatch") [](imtmanagerapi_ordercancelbatch.md "OrderCancelBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderCancel
Move an open trading order to history.
C++
MTAPIRES IMTManagerAPI::OrderCancel( const UINT64 ticket // order ticket )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderCancel( ulong ticket // order number )  
---  
Python
ManagerAPI.OrderCancel( ticket # order number )  
---  
Parameters
ticket
[in] Order number (ticket).
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error code will be returned.
Note
When an order is transferred, its state changes to [IMTOrder::ORDER_STATE_CANCELED](imtorder_enum.htm#enorderstate). Such orders are not executed or triggered, and no margin is charged for them.
An order can be moved only from the plugins running on the same trade server where the order was created. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.