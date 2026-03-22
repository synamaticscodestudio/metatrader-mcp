# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Positions ](webapi_positions.md "Positions")/ Get Total | [](webapi_position_get.md "Get by Symbol") [](webapi_position_get_page.md "Get Paged") |
| --- | --- | --- |
| --- | --- |

Getting the Number of Positions
This request allows to get the total number of open positions of a client.
Request format
GET /api/position/get_total?login=login POST /api/position/get_total?login=login  
---  
Response format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /api/position/get_total?login=1020 //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "10" } }  
---  
Request Parameters
  * login — the login of a client

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * total — the number of a client's positions that are currently open.

Note
The request only works with open positions on the client's account. The history of positions is formed on the side of client terminals based on the history of trades. It is impossible to obtain it.