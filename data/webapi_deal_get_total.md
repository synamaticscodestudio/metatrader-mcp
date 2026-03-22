# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Deals ](webapi_deal.md "Deals")/ Get Total | [](webapi_deal_get.md "Get by Ticket") [](webapi_deal_get_page.md "Get Paged") |
| --- | --- | --- |
| --- | --- |

Getting the Number of Deals
This request is used for obtaining the total number of deals performed by a client in the specified time range.
Request format
GET /api/deal/get_total?login=login&from=date&to=date POST /api/deal/get_total?login=login&from=date&to=date  
---  
Response format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/deal/get_total?login=1020&from=1314882419&to=1315573619 //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "10" } }  
---  
Request Parameters
  * login — the login of a client
  * from — the beginning of the period for requesting deals. The date is specified in seconds that have elapsed since 01.01.1970.
  * to — the end of the period for requesting deals. The date is specified in seconds that have elapsed since 01.01.1970.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * total — the number of deals performed by the client in the specified time range.
