# Send Request (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Trade Requests ](webapi_trade.md "Trade Requests")/ Send Request | [](webapi_trade_profit.md "Calculate Profit") [](webapi_dealer_updates.md "Get Request Result") |
| --- | --- | --- |
| --- | --- |

Send Trade Request
The request allows sending a trade request to a server on behalf of the dealer.
Request Format
POST /api/dealer/send_request { Description of the trade request }  
---  
Response Format
{ "retcode" : "code description", "answer" : { "ID" : "request identifier" } }  
---  
Example
//--- request to the server POST /api/dealer/send_request { "Action" : "200", "Login" : "1010", "Symbol" : "EURUSD", "Volume" : "100", // 0.01 lot "TypeFill" : "0", "Type" : "0", "PriceOrder" : "1.11850", "Digits" : "5" } //--- server response { "retcode" : "0 Done", "answer" : { "ID" : "13992" } }  
---  
Request Parameters
The request has no parameters. The request description is passed in JSON format as an additional body.
  * The full description of possible parameters is provided in the [Data structure](webapi_trade_data_structure.md "Data Structure") section. 
  * Required fields are determined by request type. For details, please see the [appropriate section](imtrequest_enum.htm#entradeactions).

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * id — trade request identifier in [/api/dealer/get_request_result](webapi_dealer_updates.md "Get Request Result") for receiving request execution results.

Note
  * For correct operations with prices, be sure to fill the "Digits" field in the request.
  * The response code 0 does not indicate the execution of the request. It indicates that the request has been verified and enqueued to be processed by the server.
  * Only [dealer actions](imtrequest_enum.htm#entradeactions) (200-255) can be set as a request type (Action field).
  * A trade request execution result can be obtained via [/api/dealer/get_request_result](webapi_dealer_updates.md "Get Request Result").
  * Up to 128 trade requests can be enqueued at the same time. If this limit is exceeded, the server returns the error [10024](retcodes_trade_request.md "Trade Requests").
  * After each call of /api/dealer/send_request, a [subscription to events](webapi_dealer_updates.htm#subscription) related to the execution of this request is created automatically.
