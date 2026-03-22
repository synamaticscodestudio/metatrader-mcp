# OrderDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderDelete | [](imtadminapi_orderupdatebatcharray.md "OrderUpdateBatchArray") [](imtadminapi_orderdeletebatch.md "OrderDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderDelete
Deletes a trade order.
C++
MTAPIRES IMTAdminAPI::OrderDelete( const UINT64 ticket // Order number )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderDelete( ulong ticket // Order number )  
---  
Python
AdminAPI.OrderDelete( ticket # Order number )  
---  
Parameters
ticket
[in] Order number.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An order can only be deleted from the applications connected to the trade server, on which the order has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The manager account requires the [RIGHT_TRADE_DELETE](imtconmanager_enum.htm#enmanagerrights) and [RIGHT_TRADES_MANAGER](imtconmanager_enum.htm#enmanagerrights) permissions in order to use the function.