# Get Open Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Get Open Total | [](webapi_order_get.md "Get Open by Ticket") [](webapi_order_get_page.md "Get Open Paged") |
| --- | --- | --- |
| --- | --- |

Getting the Number of Open Orders
This request allows to get the total number of open orders of a client by the login.
Request format
GET /api/order/get_total?login=login POST /api/order/get_total?login=login  
---  
Response format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/order/get_total?login=1020 //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "10" } }  
---  
Request Parameters
  * login — the login of a client

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * total — the number of open orders of a client with the specified login.
