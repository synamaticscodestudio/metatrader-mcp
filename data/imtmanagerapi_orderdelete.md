# OrderDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderDelete | [](imtmanagerapi_orderupdatebatcharray.md "OrderUpdateBatchArray") [](imtmanagerapi_orderdeletebatch.md "OrderDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderDelete
Deletes a trade order.
C++
MTAPIRES IMTManagerAPI::OrderDelete( const UINT64 ticket // Order number )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderDelete( ulong ticket // Order number )  
---  
Python
ManagerAPI.OrderDelete( ticket # Order number )  
---  
Parameters
ticket
[in] Order number.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An order can only be deleted from the applications connected to the trade server, on which the order has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The manager account requires the [RIGHT_TRADE_DELETE](imtconmanager_enum.htm#enmanagerrights) and [RIGHT_TRADES_MANAGER](imtconmanager_enum.htm#enmanagerrights) permissions in order to use the function.