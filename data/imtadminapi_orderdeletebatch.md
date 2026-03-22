# OrderDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderDeleteBatch | [](imtadminapi_orderdelete.md "OrderDelete") [](imtadminapi_ordercancel.md "OrderCancel") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderDeleteBatch
Delete orders from the server database in bulk.
C++
MTAPIRES IMTAdminAPI::OrderDeleteBatch( const UINT64*  tickets, // Array of tickets const UINT tickets_total, // Number of tickets in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderDeleteBatch( ulong[] tickets, // Deal ticket MTRetCode[] retcodes // Array of results )  
---  
Python
AdminAPI.OrderDeleteBatch( tickets # Deal ticket )  
---  
Parameters
tickets
[in] A pointer to an array of tickets of the orders which you want to delete.
tickets_total
[in] The number of tickets in the 'tickets' array.
results
[out] The array with the order deletion results. The size of the 'results' array must not be less than that of 'tickets'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all orders have been deleted. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the orders have been deleted. Analyze the 'results' array for more details concerning the execution results. The result of deletion of each order from the 'tickets' array is added to 'results'. The result index corresponds to the ticket index in the source array.
Note
Orders can only be deleted from the applications connected to the trade server, on which the orders have been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
Bulk deletion is executed faster than deletion of the same number of orders in a cycle one by one, using [IMTManagerAPI::OrderDelete](imtmanagerapi_orderdelete.md "OrderDelete"). The acceleration can be especially noticeable when deleting orders belonging to one account.
To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.