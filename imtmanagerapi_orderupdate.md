# OrderUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderUpdate | [](imtmanagerapi_orderaddbatcharray.md "OrderAddBatchArray") [](imtmanagerapi_orderupdatebatch.md "OrderUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderUpdate
Updates a trade order.
C++
MTAPIRES IMTManagerAPI::OrderUpdate( IMTOrder* order // An order object )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderUpdate( CIMTOrder order // An order object )  
---  
Python
ManagerAPI.OrderUpdate( order # An order object )  
---  
Parameters
*order
[in] Order object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An order can only be updated from the applications connected to the trade server, on which the order has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The manager account requires the [RIGHT_TRADE_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission in order to use the function.