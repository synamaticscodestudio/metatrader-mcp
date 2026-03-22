# Get Closed Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Get Closed Total | [](webapi_history_get.md "Get Closed by Ticket") [](webapi_history_get_page.md "Get Closed Paged") |
| --- | --- | --- |
| --- | --- |

Getting the Number of Closed Orders
This request is used for obtaining the total number of orders in a client's history in the specified time range.
Request format
GET /api/history/get_total?login=login&from=date&to=date POST /api/history/get_total?login=login&from=date&to=date  
---  
Response format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/history/get_total?login=873061&from=1546345925&to=1569933125 //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "428" } }  
---  
Request Parameters
  * login — the login of a client
  * from — the beginning of the period for requesting orders. The date is specified in seconds that have elapsed since 01.01.1970.
  * to — the end of the period for requesting orders. The date is specified in seconds that have elapsed since 01.01.1970.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * total — the number of open orders of a client with the specified login.
