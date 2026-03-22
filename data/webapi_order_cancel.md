# Move to History (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Move to History | [](webapi_order_delete.md "Delete Open") [](webapi_history_get.md "Get Closed by Ticket") |
| --- | --- | --- |
| --- | --- |

Move an open order to history
The request allows moving one or more open orders to history.
Request format
GET /api/order/cancel?ticket=tickets POST /api/order/cancel?ticket=tickets POST /api/order/cancel [ 1012, 4034 ]  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/order/delete?ticket=73339,73340 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * ticket — the ticket of the order to be moved to history. Multiple names can be specified as separated by commas. Also, the tickets can be specified as an array in the POST request body.

Response Parameters
  * RETCODE — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.

Notes
  * When an order is transferred, its state changes to [IMTOrder::ORDER_STATE_CANCELED](imtorder_enum.htm#enorderstate). Such orders are not executed or triggered, and no margin is charged for them.
  * An order can only be moved to history when connected to the same trade server on which it was created. If the order with the specified ticket is not found, response code [13](retcodes_common.md "Common errors") is returned.
