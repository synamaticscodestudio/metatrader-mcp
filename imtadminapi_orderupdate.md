# OrderUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderUpdate | [](imtadminapi_orderaddbatcharray.md "OrderAddBatchArray") [](imtadminapi_orderupdatebatch.md "OrderUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderUpdate
Updates a trade order.
C++
MTAPIRES IMTAdminAPI::OrderUpdate( IMTOrder* order // An order object )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderUpdate( CIMTOrder order // An order object )  
---  
Python
AdminAPI.OrderUpdate( order # An order object )  
---  
Parameters
*order
[in] Order object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An order can only be updated from the applications connected to the trade server, on which the order has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The manager account requires the [RIGHT_TRADE_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission in order to use the function.