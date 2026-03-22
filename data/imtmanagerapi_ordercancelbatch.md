# OrderCancelBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderCancelBatch | [](imtmanagerapi_ordercancel.md "OrderCancel") [](imtmanagerapi_historyrequest.md "HistoryRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderCancelBatch
Move multiple open order to history.
C++
MTAPIRES IMTManagerAPI::OrderCancelBatch( const UINT64*  tickets, // array of tickets const UINT tickets_total, // number of tickets in the array MTAPIRES* results // array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderCancelBatch( ulong[] tickets, // deal ticket MTRetCode[] retcodes // array of results )  
---  
Python
ManagerAPI.OrderCancelBatch( tickets # deal ticket )  
---  
Parameters
tickets
[in] A pointer to an array of order tickets which you want to move to history.
tickets_total
[in] The number of tickets in the 'tickets' array.
results
[out] An array with the order transferring result. The size of the 'results' array must not be less than that of 'tickets'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified accounts have been moved to history. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the orders have been moved. Analyze the 'results' array for a detailed information on execution results. The result of transfer of each order from the 'tickets' array is added to 'results'. The result index corresponds to the ticket index in the source array.
Note
When an order is transferred, its state changes to [IMTOrder::ORDER_STATE_CANCELED](imtorder_enum.htm#enorderstate). Such orders are not executed or triggered, and no margin is charged for them.
An order can be moved only from the plugins running on the same trade server where the orders were created. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The bulk transfer is executed faster than moving the same number of orders in a loop one by one, using [IMTManagerAPI::OrderCancel](imtserverapi_ordercancel.md "OrderCancel"). The acceleration can be especially noticeable when moving orders belonging to one account.
To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.