# Delete Open (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Delete Open | [](webapi_order_update.md "Update Open") [](webapi_order_cancel.md "Move to History") |
| --- | --- | --- |
| --- | --- |

Delete an Open Order
The request allows deleting one or more open orders by ticket.
Request Format
GET /api/order/delete?ticket=tickets POST /api/order/delete?ticket=tickets POST /api/order/delete [ 1012, 4034 ]  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/order/delete?ticket=73339,73340 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * ticket — the ticket of the order to be deleted. Multiple tickets can be specified as separated by commas. Tickets can also be specified as an array in the POST request body.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * An order can only be deleted when connected to the same trade server on which it was created. If the order with the specified ticket is not found, response code [13](retcodes_common.md "Common errors") is returned.
  * To use the function, the manager account used by the Web API application must have the following permissions: [RIGHT_TRADE_DELETE](imtconmanager_enum.htm#enmanagerrights) and [RIGHT_TRADES_MANAGER](imtconmanager_enum.htm#enmanagerrights).
